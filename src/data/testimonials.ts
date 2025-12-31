export const testimonials = [
  {
    id: 1,
    name: "Marc Dupont",
    role: "Propriétaire",
    location: "Luxembourg-Ville",
    projectType: "Maison Clé en Main",
    content:
      "Jumeaux Constructions a réalisé notre maison de rêve. Du premier rendez-vous à la remise des clés, tout était parfait. Une équipe professionnelle et à l'écoute.",
    rating: 5,
    image: "/images/team/client-1.jpg",
  },
  {
    id: 2,
    name: "Sophie Lambert",
    role: "Directrice Générale",
    location: "Kirchberg",
    projectType: "Bureaux d'Entreprise",
    content:
      "Notre nouveau siège social a été livré dans les délais et le budget convenus. La qualité des finitions dépasse nos attentes. Je recommande vivement.",
    rating: 5,
    image: "/images/team/client-2.jpg",
  },
  {
    id: 3,
    name: "Pierre Muller",
    role: "Gérant",
    location: "Betembourg",
    projectType: "Entrepôt Logistique",
    content:
      "Un partenaire de confiance pour notre projet industriel. Respect des normes, des délais et une communication transparente tout au long du chantier.",
    rating: 5,
    image: "/images/team/client-3.jpg",
  },
  {
    id: 4,
    name: "Anne Schmit",
    role: "Propriétaire",
    location: "Strassen",
    projectType: "Extension Maison",
    content:
      "L'extension de notre maison a été réalisée avec un grand professionnalisme. L'équipe a su s'adapter à nos contraintes et nos souhaits.",
    rating: 5,
    image: "/images/team/client-4.jpg",
  },
];

export type Testimonial = (typeof testimonials)[number];
