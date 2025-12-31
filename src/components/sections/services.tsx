"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, Factory, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "residentiel",
    icon: Home,
    title: "Construction Résidentielle",
    description:
      "Maisons individuelles, maisons clé en main, extensions et rénovations complètes. Nous réalisons votre projet résidentiel sur mesure.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    features: ["Maisons unifamiliales", "Maisons passives", "Extensions & Rénovations"],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Construction Commerciale",
    description:
      "Bureaux, espaces commerciaux et bâtiments mixtes. Des solutions adaptées à vos besoins professionnels.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    features: ["Bureaux modernes", "Locaux commerciaux", "Espaces mixtes"],
  },
  {
    id: "industriel",
    icon: Factory,
    title: "Construction Industrielle",
    description:
      "Halls industriels, entrepôts et zones de production. Des structures robustes et fonctionnelles.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    features: ["Halls industriels", "Entrepôts logistiques", "Ateliers de production"],
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Subtle accent gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 bg-accent/10 px-4 py-2 rounded-lg"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Nos Expertises
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos Services de <span className="text-accent">Construction</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            De la maison individuelle au complexe industriel, nous mettons notre
            expertise au service de tous vos projets de construction au
            Luxembourg.
          </p>
        </motion.div>

        {/* Service Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full bg-card rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    onClick={scrollToContact}
                    className="p-0 h-auto text-accent hover:text-accent/80 group/btn"
                  >
                    <span className="text-sm font-semibold tracking-wide">Demander un devis</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative bg-primary rounded-xl p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/50" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Vous avez un projet en tête?
                </h3>
                <p className="text-white/70">
                  Discutons ensemble de vos besoins et trouvons la meilleure solution.
                </p>
              </div>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="shrink-0 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Discutons de Votre Projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
