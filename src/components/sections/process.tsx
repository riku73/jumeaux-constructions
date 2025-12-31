"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  PenTool,
  FileText,
  HardHat,
  Key,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    subtitle: "Gratuite",
    description:
      "Nous écoutons vos besoins, analysons votre projet et vous conseillons sur les meilleures solutions.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Conception",
    subtitle: "& Planification",
    description:
      "Nos architectes et ingénieurs élaborent les plans détaillés en respectant vos souhaits et le budget.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Devis",
    subtitle: "& Validation",
    description:
      "Vous recevez un devis détaillé et transparent. Nous gérons les démarches administratives et permis.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "Construction",
    subtitle: "& Suivi",
    description:
      "Notre équipe réalise votre projet avec un suivi régulier et des rapports d'avancement.",
  },
  {
    number: "05",
    icon: Key,
    title: "Livraison",
    subtitle: "& Garantie",
    description:
      "Remise des clés, documentation complète et garanties étendues pour votre tranquillité d'esprit.",
  },
];

export function Process() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="processus" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

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
            Notre Méthode
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Notre Processus en <span className="text-accent">5 Étapes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            De la première rencontre à la remise des clés, nous vous accompagnons
            à chaque étape de votre projet avec transparence et professionnalisme.
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-[100px] left-0 right-0 h-0.5 bg-border" />
          <div className="absolute top-[100px] left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-accent/20" style={{ clipPath: 'inset(0 50% 0 0)' }} />

          {/* Steps */}
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step Content */}
                <div className="flex flex-col items-center text-center">
                  {/* Number & Icon Container */}
                  <div className="relative mb-12">
                    {/* Main circle */}
                    <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                      {/* Outer ring */}
                      <div className="absolute inset-0 bg-card rounded-xl border-2 border-border group-hover:border-accent/50 transition-colors duration-300 shadow-lg" />
                      {/* Inner content */}
                      <div className="relative z-10 flex flex-col items-center">
                        <step.icon className="h-10 w-10 text-accent mb-2" />
                        <span className="text-xs text-muted-foreground font-medium">Étape</span>
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-sm z-20 shadow-lg">
                      {step.number}
                    </div>

                    {/* Timeline connector dot */}
                    <div className="absolute -bottom-[46px] left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
                  </div>

                  {/* Text Content */}
                  <div className="pt-6">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-accent text-sm font-medium">{step.subtitle}</span>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-[180px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[92px] -right-3 w-6 h-6 flex items-center justify-center text-accent">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile & Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-border" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 group"
                >
                  {/* Icon Circle */}
                  <div className="absolute left-0 top-0 w-16 h-16 bg-card border-2 border-border group-hover:border-accent/50 rounded-lg flex items-center justify-center transition-colors shadow-lg">
                    <step.icon className="h-7 w-7 text-accent" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute left-10 -top-2 w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-xs z-10 shadow-md">
                    {step.number}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-[30px] top-7 w-3 h-3 bg-accent rounded-full border-2 border-background" />

                  {/* Content */}
                  <div className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-colors">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {step.title} <span className="text-accent font-medium">{step.subtitle}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-card border border-border rounded-xl p-8 shadow-lg">
            <p className="text-lg text-foreground font-medium">
              Prêt à démarrer votre projet?
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
            >
              Planifier une Consultation Gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
