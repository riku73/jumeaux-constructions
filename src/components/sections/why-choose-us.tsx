"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Clock, Award, Users, Leaf, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const differentiators = [
  {
    icon: Shield,
    title: "Garantie Qualité",
    description:
      "Garantie décennale et biennale sur tous nos projets. Votre investissement est protégé.",
  },
  {
    icon: Clock,
    title: "Délais Respectés",
    description:
      "Engagement ferme sur les délais. Nous livrons dans les temps convenus, sans exception.",
  },
  {
    icon: Award,
    title: "Expertise Certifiée",
    description:
      "Certifications ISO 9001 et ISO 14001. Une qualité reconnue et contrôlée.",
  },
  {
    icon: Users,
    title: "Équipe Locale",
    description:
      "Une équipe luxembourgeoise expérimentée, proche de vous et de votre projet.",
  },
  {
    icon: Leaf,
    title: "Construction Durable",
    description:
      "Spécialistes en maisons passives et basse consommation. Construisez pour l'avenir.",
  },
  {
    icon: Wrench,
    title: "Clé en Main",
    description:
      "De la conception à la livraison, nous gérons tout. Un seul interlocuteur.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projets Réalisés" },
  { value: 15, suffix: "+", label: "Années d'Expérience" },
  { value: 98, suffix: "%", label: "Clients Satisfaits" },
  { value: 50, suffix: "+", label: "Experts Dédiés" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />

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
            Pourquoi Nous
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pourquoi Choisir <span className="text-accent">Jumeaux</span> Constructions?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une entreprise locale avec des valeurs fortes et un engagement total
            envers la qualité et la satisfaction client.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 h-full overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="shrink-0 relative">
                  <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent on hover */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-primary rounded-xl p-10 md:p-16 overflow-hidden relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent/50" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-accent/50" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-accent/50" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent/50" />

            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

            {/* Diagonal stripes pattern */}
            <div className="absolute inset-0 stripes-accent opacity-30" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative inline-block">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 tabular-nums">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    {/* Underline accent */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent/30 group-hover:w-full group-hover:bg-accent/50 transition-all duration-300" />
                  </div>
                  <div className="text-primary-foreground/70 text-sm uppercase tracking-wider mt-4">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative mt-12 text-center"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Rejoignez nos Clients Satisfaits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
