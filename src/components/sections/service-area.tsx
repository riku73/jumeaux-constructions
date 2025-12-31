"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const regions = [
  {
    name: "Luxembourg-Ville",
    communes: ["Luxembourg", "Strassen", "Bertrange", "Hesperange"],
  },
  {
    name: "Sud",
    communes: ["Esch-sur-Alzette", "Differdange", "Dudelange", "Bettembourg"],
  },
  {
    name: "Nord",
    communes: ["Ettelbruck", "Diekirch", "Wiltz", "Clervaux"],
  },
  {
    name: "Est",
    communes: ["Echternach", "Grevenmacher", "Remich", "Wasserbillig"],
  },
  {
    name: "Centre",
    communes: ["Mersch", "Tuntange", "Steinfort", "Capellen"],
    highlight: true,
  },
];

const features = [
  "Intervention rapide sur tout le Grand-Duché",
  "Connaissance approfondie des réglementations locales",
  "Partenariats avec des fournisseurs luxembourgeois",
  "Équipes basées à Tuntange, au coeur du Luxembourg",
];

export function ServiceArea() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Map placeholder - Luxembourg shape */}
            <div className="aspect-square bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="h-full relative">
                {/* Simplified Luxembourg map shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-[300px] max-h-[400px] relative">
                    {/* Map outline placeholder */}
                    <svg
                      viewBox="0 0 100 130"
                      className="w-full h-full"
                      fill="none"
                    >
                      <path
                        d="M50 5 L85 20 L90 50 L80 85 L65 100 L50 125 L35 100 L20 85 L10 50 L15 20 Z"
                        className="fill-white/5 stroke-accent stroke-2"
                      />
                      {/* Center point - Tuntange */}
                      <circle
                        cx="45"
                        cy="55"
                        r="8"
                        className="fill-accent animate-pulse"
                      />
                      {/* Other regions */}
                      <circle cx="50" cy="30" r="4" className="fill-white/30" />
                      <circle cx="65" cy="55" r="4" className="fill-white/30" />
                      <circle cx="50" cy="90" r="4" className="fill-white/30" />
                      <circle cx="30" cy="60" r="4" className="fill-white/30" />
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50" />
                        <span className="text-primary-foreground/80 font-medium">
                          Siège - Tuntange
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Zone d&apos;Intervention
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Nous Couvrons Tout le Luxembourg
            </h2>

            <p className="text-primary-foreground/70 mb-8 text-lg leading-relaxed">
              Depuis notre siège à Tuntange, nous intervenons sur l&apos;ensemble du
              Grand-Duché de Luxembourg. Notre connaissance approfondie du
              territoire et des réglementations locales nous permet de vous
              accompagner efficacement, où que se situe votre projet.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-primary-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Regions */}
            <div className="space-y-4">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <MapPin
                    className={`h-5 w-5 mt-0.5 shrink-0 ${
                      region.highlight ? "text-accent" : "text-primary-foreground/50"
                    }`}
                  />
                  <div>
                    <span
                      className={`font-medium ${
                        region.highlight ? "text-accent" : "text-primary-foreground"
                      }`}
                    >
                      {region.name}
                      {region.highlight && (
                        <Badge className="ml-2 text-xs bg-accent text-accent-foreground border-0 rounded-full">
                          Siège
                        </Badge>
                      )}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {region.communes.map((commune) => (
                        <span
                          key={commune}
                          className="text-sm text-primary-foreground/60"
                        >
                          {commune}
                          {region.communes.indexOf(commune) <
                            region.communes.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
