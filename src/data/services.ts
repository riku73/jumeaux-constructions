import { Home, Building2, Factory } from "lucide-react";

export const services = [
  {
    id: "residentiel",
    icon: Home,
    title: "Construction Résidentielle",
    description:
      "Maisons individuelles, maisons clé en main, extensions et rénovations complètes. Nous réalisons votre projet résidentiel sur mesure.",
    features: [
      "Maisons unifamiliales neuves",
      "Maisons clé en main personnalisées",
      "Maisons passives et basse consommation",
      "Extensions et agrandissements",
      "Rénovations complètes",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Construction Commerciale",
    description:
      "Bureaux, espaces commerciaux et bâtiments mixtes. Des solutions adaptées à vos besoins professionnels.",
    features: [
      "Bureaux et espaces tertiaires",
      "Locaux commerciaux",
      "Bâtiments mixtes",
      "Espaces de co-working",
      "Rénovations énergétiques",
    ],
  },
  {
    id: "industriel",
    icon: Factory,
    title: "Construction Industrielle",
    description:
      "Halls industriels, entrepôts et zones de production. Des structures robustes et fonctionnelles.",
    features: [
      "Halls industriels",
      "Entrepôts et centres logistiques",
      "Ateliers et zones de production",
      "Construction métallique",
      "Bâtiments modulaires",
    ],
  },
];

export type Service = (typeof services)[number];
