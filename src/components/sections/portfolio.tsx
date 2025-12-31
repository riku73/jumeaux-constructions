"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Maximize2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Villa contemporaine",
    category: "residentiel",
    location: "Luxembourg-Ville",
    year: 2024,
    description:
      "Maison passive de 280m² avec finitions haut de gamme et jardin paysager.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    surface: "280m²",
  },
  {
    id: 2,
    title: "Immeuble de bureaux",
    category: "commercial",
    location: "Kirchberg",
    year: 2024,
    description:
      "Bâtiment tertiaire de 1500m² avec certification énergétique AAA.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074&auto=format&fit=crop",
    surface: "1500m²",
  },
  {
    id: 3,
    title: "Centre logistique",
    category: "industriel",
    location: "Betembourg",
    year: 2023,
    description:
      "Entrepôt moderne de 5000m² avec quais de chargement et bureaux intégrés.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    surface: "5000m²",
  },
  {
    id: 4,
    title: "Maison clé en main",
    category: "residentiel",
    location: "Strassen",
    year: 2024,
    description:
      "Maison familiale de 200m² livrée clé en main avec garage double.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    surface: "200m²",
  },
  {
    id: 5,
    title: "Espace commercial",
    category: "commercial",
    location: "Esch-sur-Alzette",
    year: 2023,
    description: "Surface commerciale de 600m² en centre-ville avec parking.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    surface: "600m²",
  },
  {
    id: 6,
    title: "Résidence moderne",
    category: "residentiel",
    location: "Tuntange",
    year: 2024,
    description:
      "Résidence de 4 appartements avec architecture contemporaine.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    surface: "450m²",
  },
];

type Project = (typeof projects)[number];

const categories = [
  { value: "all", label: "Tous" },
  { value: "residentiel", label: "Résidentiel" },
  { value: "commercial", label: "Commercial" },
  { value: "industriel", label: "Industriel" },
];

const categoryLabels: Record<string, string> = {
  residentiel: "Résidentiel",
  commercial: "Commercial",
  industriel: "Industriel",
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="realisations" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
            Nos réalisations
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Découvrez une sélection de nos projets récents à travers tout le
            Luxembourg. Chaque réalisation témoigne de notre savoir-faire.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-auto"
          >
            <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10 p-1 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="rounded-full data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6 text-primary-foreground/70 data-[state=active]:text-accent-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-0 rounded-full">
                    {categoryLabels[project.category]}
                  </Badge>

                  {/* View icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline-light"
          >
            Voir tous nos projets
          </Button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {/* Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary rounded-xl p-4">
                    <span className="text-sm text-muted-foreground block mb-1">
                      Catégorie
                    </span>
                    <p className="font-semibold text-foreground">
                      {categoryLabels[selectedProject.category]}
                    </p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <span className="text-sm text-muted-foreground block mb-1">
                      Localisation
                    </span>
                    <p className="font-semibold text-foreground">{selectedProject.location}</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <span className="text-sm text-muted-foreground block mb-1">
                      Surface
                    </span>
                    <p className="font-semibold text-foreground">{selectedProject.surface}</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <span className="text-sm text-muted-foreground block mb-1">Année</span>
                    <p className="font-semibold text-foreground">{selectedProject.year}</p>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground block mb-2">
                    Description
                  </span>
                  <p className="text-foreground leading-relaxed">{selectedProject.description}</p>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    setSelectedProject(null);
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Discuter d&apos;un projet similaire
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
