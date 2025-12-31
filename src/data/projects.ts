export const projects = [
  {
    id: 1,
    title: "Villa Contemporaine",
    category: "residentiel",
    location: "Luxembourg-Ville",
    year: 2024,
    description:
      "Maison passive de 280m² avec finitions haut de gamme et jardin paysager.",
    image: "/images/projects/villa-1.jpg",
    surface: "280m²",
  },
  {
    id: 2,
    title: "Immeuble de Bureaux",
    category: "commercial",
    location: "Kirchberg",
    year: 2024,
    description:
      "Bâtiment tertiaire de 1500m² avec certification énergétique AAA.",
    image: "/images/projects/office-1.jpg",
    surface: "1500m²",
  },
  {
    id: 3,
    title: "Centre Logistique",
    category: "industriel",
    location: "Betembourg",
    year: 2023,
    description:
      "Entrepôt moderne de 5000m² avec quais de chargement et bureaux intégrés.",
    image: "/images/projects/warehouse-1.jpg",
    surface: "5000m²",
  },
  {
    id: 4,
    title: "Maison Clé en Main",
    category: "residentiel",
    location: "Strassen",
    year: 2024,
    description:
      "Maison familiale de 200m² livrée clé en main avec garage double.",
    image: "/images/projects/house-1.jpg",
    surface: "200m²",
  },
  {
    id: 5,
    title: "Espace Commercial",
    category: "commercial",
    location: "Esch-sur-Alzette",
    year: 2023,
    description: "Surface commerciale de 600m² en centre-ville avec parking.",
    image: "/images/projects/retail-1.jpg",
    surface: "600m²",
  },
  {
    id: 6,
    title: "Résidence Moderne",
    category: "residentiel",
    location: "Tuntange",
    year: 2024,
    description:
      "Résidence de 4 appartements avec architecture contemporaine.",
    image: "/images/projects/residence-1.jpg",
    surface: "450m²",
  },
];

export type Project = (typeof projects)[number];
export type ProjectCategory = "residentiel" | "commercial" | "industriel";
