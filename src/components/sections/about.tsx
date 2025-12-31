"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Heart, Handshake, CheckCircle2, ArrowRight, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons la perfection dans chaque détail de nos constructions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Construire est notre passion, votre satisfaction notre mission.",
  },
  {
    icon: Handshake,
    title: "Partenariat",
    description: "Nous construisons des relations durables avec nos clients.",
  },
];

const achievements = [
  "Entreprise luxembourgeoise depuis plus de 15 ans",
  "Équipe de plus de 50 professionnels qualifiés",
  "Certifications ISO 9001 et ISO 14001",
  "Spécialistes en maisons passives",
  "Service client réactif et personnalisé",
  "Garanties étendues sur tous nos projets",
];

export function About() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="apropos" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Construction team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent/50" />
            </div>

            {/* Floating experience card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-6 rounded-xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8" />
                <span className="text-4xl font-bold">15+</span>
              </div>
              <div className="text-sm opacity-90 font-medium">Années d&apos;expertise</div>
            </motion.div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-4 bg-card border border-border px-4 py-2 rounded-lg shadow-lg hidden md:flex items-center gap-2"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Tuntange, Luxembourg</span>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-accent/20 rounded-xl hidden lg:block" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 bg-accent/10 px-4 py-2 rounded-lg"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              À Propos
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              À Propos de <span className="text-accent">Jumeaux</span> Constructions
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8 text-lg leading-relaxed">
              <p>
                Fondée au Luxembourg, <strong className="text-foreground">Jumeaux Constructions S.à r.l.</strong> est
                une entreprise familiale spécialisée dans la construction
                résidentielle, commerciale et industrielle.
              </p>
              <p>
                Notre philosophie repose sur un principe simple: construire des
                bâtiments de qualité supérieure tout en respectant les délais et
                les budgets de nos clients. Chaque projet est unique, et nous
                nous engageons à le traiter avec le plus grand soin.
              </p>
            </div>

            {/* Achievements - Two column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors"
                >
                  <div className="w-5 h-5 bg-accent/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              onClick={scrollToContact}
            >
              Discuter de Votre Projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Nos <span className="text-accent">Valeurs</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative bg-card border border-border rounded-xl p-8 text-center hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/20 group-hover:border-accent/40 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/20 group-hover:border-accent/40 transition-colors" />

                  {/* Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
                    0{index + 1}
                  </div>

                  <div className="relative">
                    <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
