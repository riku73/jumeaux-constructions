import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ZodError } from "zod";
import { quoteFormSchema } from "@/lib/validations";

// Initialize Resend - will work when RESEND_API_KEY is set
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Simple in-memory rate limiting (for production, use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in ms
const MAX_REQUESTS = 5; // 5 requests per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Sanitize user input
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ||
               request.headers.get("x-real-ip") ||
               "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de tentatives. Veuillez réessayer dans une heure." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = quoteFormSchema.parse(body);

    // Sanitize text inputs
    const sanitizedData = {
      ...validatedData,
      firstName: sanitizeInput(validatedData.firstName),
      lastName: sanitizeInput(validatedData.lastName),
      message: validatedData.message ? sanitizeInput(validatedData.message) : "",
      location: sanitizeInput(validatedData.location),
    };

    // Log for debugging (remove in production or use proper logging)
    console.log("New quote request from:", sanitizedData.email);

    // Send email if Resend is configured
    if (resend) {
      const projectTypeLabels: Record<string, string> = {
        residentiel: "Résidentiel",
        commercial: "Commercial",
        industriel: "Industriel",
      };

      const { error } = await resend.emails.send({
        from: "Jumeaux Constructions <noreply@jumeaux-constructions.lu>",
        to: ["contact@jumeaux-constructions.lu"],
        replyTo: sanitizedData.email,
        subject: `Nouvelle demande de devis - ${projectTypeLabels[sanitizedData.projectType] || sanitizedData.projectType}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Nouvelle demande de devis</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1a2332 0%, #2d3748 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nouvelle demande de devis</h1>
              <p style="color: #8B1E3F; margin: 5px 0 0 0; font-weight: bold;">Jumeaux Constructions</p>
            </div>

            <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
              <h2 style="color: #1a2332; border-bottom: 2px solid #8B1E3F; padding-bottom: 10px; margin-top: 0;">Détails du projet</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 140px;">Type de projet:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${projectTypeLabels[sanitizedData.projectType] || sanitizedData.projectType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Surface:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${sanitizedData.surface}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Budget:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${sanitizedData.budget}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Délai souhaité:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${sanitizedData.timeline}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Localisation:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${sanitizedData.location}</td>
                </tr>
              </table>

              <h2 style="color: #1a2332; border-bottom: 2px solid #8B1E3F; padding-bottom: 10px; margin-top: 30px;">Informations de contact</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 140px;">Nom:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${sanitizedData.firstName} ${sanitizedData.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${sanitizedData.email}" style="color: #8B1E3F;">${sanitizedData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Téléphone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${sanitizedData.phone}" style="color: #8B1E3F;">${sanitizedData.phone}</a></td>
                </tr>
              </table>

              ${sanitizedData.message ? `
              <h2 style="color: #1a2332; border-bottom: 2px solid #8B1E3F; padding-bottom: 10px; margin-top: 30px;">Message</h2>
              <p style="background: #ffffff; padding: 15px; border-radius: 5px; border-left: 4px solid #8B1E3F; margin: 0;">${sanitizedData.message}</p>
              ` : ""}
            </div>

            <div style="background: #1a2332; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
              <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                Ce message a été envoyé via le formulaire de contact du site jumeaux-constructions.lu
              </p>
            </div>
          </body>
          </html>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
          { status: 500 }
        );
      }
    } else {
      // Log warning if Resend is not configured
      console.warn("RESEND_API_KEY not configured. Email not sent.");
      console.log("Form data:", sanitizedData);
    }

    return NextResponse.json(
      { message: "Demande envoyée avec succès. Nous vous contacterons sous 24h." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Données de formulaire invalides",
          details: error.issues.map(e => ({ field: e.path.join("."), message: e.message }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
