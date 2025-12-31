import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = quoteFormSchema.parse(body);

    // Here you would typically:
    // 1. Send an email using Resend, Nodemailer, or similar
    // 2. Save to a database
    // 3. Integrate with a CRM

    // For now, we'll just log the data and return success
    console.log("New quote request:", validatedData);

    // Example: Send email with Resend (uncomment when configured)
    // const { data, error } = await resend.emails.send({
    //   from: 'Jumeaux Constructions <contact@jumeaux-constructions.lu>',
    //   to: ['sales@jumeaux-constructions.lu'],
    //   subject: `Nouvelle demande de devis - ${validatedData.projectType}`,
    //   html: `
    //     <h2>Nouvelle demande de devis</h2>
    //     <p><strong>Type de projet:</strong> ${validatedData.projectType}</p>
    //     <p><strong>Surface:</strong> ${validatedData.surface} m²</p>
    //     <p><strong>Budget:</strong> ${validatedData.budget}</p>
    //     <p><strong>Délai:</strong> ${validatedData.timeline}</p>
    //     <p><strong>Localisation:</strong> ${validatedData.location}</p>
    //     <hr />
    //     <p><strong>Nom:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Téléphone:</strong> ${validatedData.phone}</p>
    //     <p><strong>Message:</strong> ${validatedData.message || 'Aucun message'}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "Demande envoyée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la demande" },
      { status: 500 }
    );
  }
}
