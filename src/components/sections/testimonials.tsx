"use client";

import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="temoignages" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2" />

      {/* Large decorative quote */}
      <div className="absolute top-20 left-10 text-accent/5 hidden lg:block">
        <Quote className="w-64 h-64" strokeWidth={1} />
      </div>

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
            Témoignages
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ce Que Nos <span className="text-accent">Clients</span> Disent
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La satisfaction de nos clients est notre plus grande fierté.
            Découvrez leurs expériences avec Jumeaux Constructions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border border-border hover:border-accent/40 transition-all duration-300 bg-card rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-accent/5">
                      <CardContent className="p-8 relative">
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-accent/20 group-hover:border-accent/40 transition-colors" />

                        {/* Quote Icon */}
                        <div className="mb-6 flex items-center justify-between">
                          <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                            <Quote className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
                          </div>

                          {/* Rating */}
                          <div className="flex gap-0.5">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-accent text-accent"
                                />
                              )
                            )}
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-foreground mb-8 leading-relaxed font-medium text-lg">
                          &ldquo;{testimonial.content}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4 pt-6 border-t border-border">
                          {/* Avatar */}
                          <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-accent-foreground font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-lg">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.projectType}
                            </p>
                            <p className="text-xs text-accent font-medium">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 border-2 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground rounded-lg" />
              <CarouselNext className="static translate-y-0 w-12 h-12 border-2 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground rounded-lg" />
            </div>
          </Carousel>
        </motion.div>

        {/* Trust Indicator & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">4.9/5</p>
                <p className="text-sm text-muted-foreground">200+ avis clients</p>
              </div>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <Button
              size="lg"
              onClick={scrollToContact}
            >
              Rejoindre Nos Clients Satisfaits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
