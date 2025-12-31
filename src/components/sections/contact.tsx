"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/forms/quote-form";
import { contactInfo } from "@/data/navigation";

const contactMethods = [
  {
    icon: Phone,
    title: "Téléphone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    description: "Appelez-nous directement",
  },
  {
    icon: Mail,
    title: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: `${contactInfo.address.city}, ${contactInfo.address.country}`,
    href: null,
    description: contactInfo.address.street,
  },
  {
    icon: Clock,
    title: "Horaires",
    value: contactInfo.hours.weekdays,
    href: null,
    description: contactInfo.hours.saturday,
  },
];

const trustPoints = [
  "Devis détaillé et transparent",
  "Réponse garantie sous 24h",
  "Sans engagement de votre part",
  "Consultation initiale gratuite",
];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2" />

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
            Contact
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Demandez Votre <span className="text-accent">Devis Gratuit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Remplissez le formulaire ci-dessous et notre équipe vous contactera
            dans les 24 heures pour discuter de votre projet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="border border-border bg-card rounded-xl shadow-2xl overflow-hidden relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-accent/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-accent/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/30" />

              <CardContent className="p-8 md:p-10">
                {/* Form header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl">
                      Formulaire de Devis
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Gratuit et sans engagement
                    </p>
                  </div>
                </div>

                <QuoteForm />
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <method.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">{method.title}</h4>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-accent hover:underline font-medium block"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{method.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="bg-primary text-primary-foreground p-6 rounded-xl relative overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-accent/50" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-accent/50" />

                {/* Diagonal stripes */}
                <div className="absolute inset-0 stripes-accent opacity-20" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-accent" />
                    <h4 className="font-bold text-lg">Pourquoi nous faire confiance?</h4>
                  </div>
                  <ul className="space-y-3">
                    {trustPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-primary-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-between p-5 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-bold">Besoin d&apos;une réponse rapide?</p>
                    <p className="text-sm opacity-90">Appelez-nous maintenant</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
