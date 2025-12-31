import { z } from "zod";

export const quoteFormSchema = z.object({
  // Step 1: Project Type
  projectType: z.enum(["residentiel", "commercial", "industriel"]),

  // Step 2: Project Details
  surface: z.string().min(1, "Veuillez indiquer la surface approximative"),
  budget: z.string().min(1, "Veuillez sélectionner une fourchette de budget"),
  timeline: z.string().min(1, "Veuillez indiquer le délai souhaité"),
  location: z.string().min(1, "Veuillez indiquer la commune"),

  // Step 3: Contact Information
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(8, "Veuillez entrer un numéro de téléphone valide"),
  message: z.string().optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité pour continuer",
  }),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const quickContactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(8, "Veuillez entrer un numéro de téléphone valide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité pour continuer",
  }),
});

export type QuickContactData = z.infer<typeof quickContactSchema>;
