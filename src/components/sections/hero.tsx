"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronDown, Award, Users, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/navigation";

const stats = [
  { icon: Award, value: "15+", label: "Années d'expérience" },
  { icon: Users, value: "500+", label: "Projets réalisés" },
  { icon: Calendar, value: "100%", label: "Délais respectés" },
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Construction site with crane"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        {/* Diagonal accent stripe */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-accent/20 via-transparent to-transparent" />
      </div>

      {/* Industrial grid pattern overlay */}
      <div className="absolute inset-0 z-[1] grid-pattern opacity-30" />

      {/* Decorative geometric elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[2]">
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-accent/40" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-accent/40" />
        {/* Vertical accent lines */}
        <div className="absolute top-20 right-20 w-px h-60 bg-gradient-to-b from-accent/60 via-accent/30 to-transparent hidden lg:block" />
        <div className="absolute top-20 right-20 w-24 h-px bg-gradient-to-l from-accent/60 to-transparent hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-px h-40 bg-gradient-to-t from-accent/40 to-transparent hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-20 h-px bg-gradient-to-r from-accent/40 to-transparent hidden lg:block" />
        {/* Diagonal stripes */}
        <div className="absolute top-0 right-1/4 w-px h-screen bg-white/5 rotate-12 origin-top hidden xl:block" />
        <div className="absolute top-0 right-1/3 w-px h-screen bg-white/5 rotate-12 origin-top hidden xl:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-lg">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium tracking-wide">
                Entreprise luxembourgeoise certifiée ISO 9001
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Construisons Ensemble
            <br />
            <span className="relative">
              <span className="text-accent">Votre Avenir</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/50 origin-left"
              />
            </span>
            {" "}au Luxembourg
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Maisons clé en main, bâtiments commerciaux et industriels.
            <br className="hidden md:block" />
            Votre projet, notre expertise depuis plus de 15 ans.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="glow-bordeaux"
            >
              Demander un Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <Button
                size="lg"
                variant="outline-light"
              >
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous
              </Button>
            </a>
          </motion.div>

          {/* Trust Strip - Stats with industrial styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Stats container with border */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-accent" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 group-hover:border-accent/50 transition-all duration-300">
                      <stat.icon className="h-7 w-7 text-accent" />
                    </div>
                    <span className="text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </span>
                    <span className="text-white/50 text-sm tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection("#services")}
          className="flex flex-col items-center text-white/40 hover:text-accent transition-colors duration-300 group"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Découvrir</span>
          <ChevronDown className="h-5 w-5 animate-bounce group-hover:text-accent" />
        </button>
      </motion.div>
    </section>
  );
}
