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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Zone d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Nous couvrons tout le Luxembourg
            </h2>

            <p className="text-primary-foreground/70 mb-8 text-lg leading-relaxed">
              Depuis notre siège à Tuntange, nous intervenons sur l&apos;ensemble du
              Grand-Duché de Luxembourg. Notre connaissance approfondie du
              territoire et des réglementations locales nous permet de vous
              accompagner efficacement, où que se situe votre projet.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
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
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Google Maps Embed */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/50 z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-accent/50 z-10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-accent/50 z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/50 z-10" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.7538768517693!2d6.014808176822082!3d49.71543514001303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479553e90f77715d%3A0x22e681952a42b97f!2sJumeaux%20Constructions%20SARL!5e0!3m2!1sen!2slu!4v1767198347773!5m2!1sen!2slu"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Jumeaux Constructions - Location"
              />

              {/* Legend overlay */}
              <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10 z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50" />
                  <span className="text-primary-foreground font-medium">
                    Jumeaux Constructions - Tuntange
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Regions - Full width grid below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-4 rounded-xl border transition-all duration-300 hover:border-accent/40 ${
                  region.highlight
                    ? "bg-accent/10 border-accent/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin
                    className={`h-4 w-4 shrink-0 ${
                      region.highlight ? "text-accent" : "text-primary-foreground/50"
                    }`}
                  />
                  <span
                    className={`font-semibold text-sm ${
                      region.highlight ? "text-accent" : "text-primary-foreground"
                    }`}
                  >
                    {region.name}
                  </span>
                  {region.highlight && (
                    <Badge className="text-[10px] bg-accent text-accent-foreground border-0 rounded-full px-2 py-0">
                      Siège
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {region.communes.map((commune) => (
                    <span
                      key={commune}
                      className="text-xs text-primary-foreground/60 bg-white/5 px-2 py-1 rounded-md"
                    >
                      {commune}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
