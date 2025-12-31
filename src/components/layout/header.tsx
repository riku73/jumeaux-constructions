"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks, contactInfo } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-primary/98 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      {/* Top accent line when scrolled */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity duration-500",
        isScrolled ? "opacity-100" : "opacity-0"
      )} />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <div className="relative w-11 h-11 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 overflow-hidden group-hover:scale-105 transition-transform">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30" />
                <span className="text-accent-foreground font-bold text-xl relative z-10">
                  JC
                </span>
              </div>
              <div className="ml-3 hidden sm:block">
                <span className="font-bold text-lg text-white">
                  Jumeaux
                </span>
                <span className="font-bold text-lg text-accent ml-1">
                  Constructions
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors text-white/80 hover:text-white rounded-lg",
                  "after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300",
                  "hover:after:w-6"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{contactInfo.phone}</span>
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="shadow-lg shadow-accent/20"
            >
              Demander un Devis
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-primary border-white/10 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                        <span className="text-accent-foreground font-bold text-lg">
                          JC
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-white">Jumeaux</span>
                        <span className="font-bold text-accent ml-1">
                          Constructions
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-1">
                      {navigationLinks.map((link, index) => (
                        <button
                          key={link.href}
                          onClick={() => scrollToSection(link.href)}
                          className="w-full flex items-center justify-between p-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                        </button>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile Contact & CTA */}
                  <div className="p-6 border-t border-white/10 space-y-4 bg-white/5">
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 p-4 text-white/80 hover:text-accent transition-colors bg-white/5 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{contactInfo.phone}</p>
                        <p className="text-sm text-white/50">Appelez-nous</p>
                      </div>
                    </a>
                    <Button
                      onClick={() => scrollToSection("#contact")}
                      className="w-full"
                      size="lg"
                    >
                      Demander un Devis Gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
