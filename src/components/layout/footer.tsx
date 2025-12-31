import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Award } from "lucide-react";
import { footerLinks, contactInfo } from "@/data/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Prêt à démarrer votre projet?
              </h3>
              <p className="text-white/60">
                Contactez-nous pour une consultation gratuite et un devis personnalisé.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="shrink-0"
            >
              <Link href="#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30" />
                <span className="text-accent-foreground font-bold text-2xl relative z-10">
                  JC
                </span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Jumeaux</span>
                <span className="font-bold text-xl text-accent ml-1">
                  Constructions
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de
              construction au Luxembourg. Résidentiel, commercial et industriel
              - de la conception à la remise des clés.
            </p>
            {/* Certifications */}
            <div className="flex gap-3">
              <div className="relative w-14 h-14 bg-white/10 rounded-xl flex flex-col items-center justify-center text-xs text-primary-foreground/60 font-medium border border-white/10 hover:border-accent/30 transition-colors">
                <Award className="h-4 w-4 mb-1 text-accent" />
                ISO
              </div>
              <div className="relative w-14 h-14 bg-white/10 rounded-xl flex flex-col items-center justify-center text-xs text-primary-foreground/60 font-medium border border-white/10 hover:border-accent/30 transition-colors">
                <Award className="h-4 w-4 mb-1 text-accent" />
                CE
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Nos Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm mt-2.5">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm mt-2.5">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div className="text-sm mt-1">
                  <p>{contactInfo.address.street}</p>
                  <p>
                    {contactInfo.address.postalCode} {contactInfo.address.city}
                  </p>
                  <p>{contactInfo.address.country}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div className="text-sm mt-1">
                  <p>{contactInfo.hours.weekdays}</p>
                  <p>{contactInfo.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm text-center md:text-left">
            &copy; {currentYear} Jumeaux Constructions S.à r.l. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-primary-foreground/40 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
