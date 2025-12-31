"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

const projectTypes = [
  {
    value: "residentiel",
    label: "Résidentiel",
    icon: Home,
    description: "Maison, appartement, extension",
  },
  {
    value: "commercial",
    label: "Commercial",
    icon: Building2,
    description: "Bureau, commerce, local",
  },
  {
    value: "industriel",
    label: "Industriel",
    icon: Factory,
    description: "Entrepôt, usine, atelier",
  },
];

const budgetRanges = [
  { value: "moins-250k", label: "Moins de 250 000 €" },
  { value: "250k-500k", label: "250 000 € - 500 000 €" },
  { value: "500k-1m", label: "500 000 € - 1 000 000 €" },
  { value: "1m-2m", label: "1 000 000 € - 2 000 000 €" },
  { value: "plus-2m", label: "Plus de 2 000 000 €" },
];

const timelineOptions = [
  { value: "urgent", label: "Dès que possible" },
  { value: "3-mois", label: "Dans les 3 mois" },
  { value: "6-mois", label: "Dans les 6 mois" },
  { value: "1-an", label: "Dans l'année" },
  { value: "planification", label: "En phase de planification" },
];

const communes = [
  "Luxembourg-Ville",
  "Esch-sur-Alzette",
  "Differdange",
  "Dudelange",
  "Ettelbruck",
  "Diekirch",
  "Strassen",
  "Bertrange",
  "Bettembourg",
  "Tuntange",
  "Mersch",
  "Autre",
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      gdprConsent: false,
    },
  });

  const projectType = watch("projectType");
  const budget = watch("budget");
  const timeline = watch("timeline");
  const location = watch("location");

  const nextStep = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await trigger(["projectType"]);
    } else if (step === 2) {
      isValid = await trigger(["surface", "budget", "timeline", "location"]);
    }

    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setSubmitError(result.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setSubmitError("Erreur de connexion. Veuillez vérifier votre connexion internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Demande Envoyée!
        </h3>
        <p className="text-muted-foreground mb-6">
          Merci pour votre demande. Notre équipe vous contactera dans les 24
          heures.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
          }}
        >
          Nouvelle Demande
        </Button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-6 sm:mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                "flex items-center gap-1.5 sm:gap-2",
                s <= step ? "text-accent" : "text-muted-foreground"
              )}
            >
              <div
                className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium",
                  s < step
                    ? "bg-accent text-accent-foreground"
                    : s === step
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {s < step ? <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" /> : s}
              </div>
              <span className="text-[10px] sm:text-sm">
                {s === 1 ? "Type" : s === 2 ? "Détails" : "Contact"}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Project Type */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quel type de projet avez-vous?
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() =>
                        setValue(
                          "projectType",
                          type.value as "residentiel" | "commercial" | "industriel"
                        )
                      }
                      className={cn(
                        "p-3 sm:p-6 rounded-xl border-2 text-left transition-all",
                        projectType === type.value
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      )}
                    >
                      <type.icon
                        className={cn(
                          "h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3",
                          projectType === type.value
                            ? "text-accent"
                            : "text-muted-foreground"
                        )}
                      />
                      <div className="font-medium text-foreground text-xs sm:text-base">
                        {type.label}
                      </div>
                      <div className="text-[10px] sm:text-sm text-muted-foreground hidden sm:block">
                        {type.description}
                      </div>
                    </button>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-destructive text-sm mt-2">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              <Button
                type="button"
                onClick={nextStep}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Continuer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                Détails du projet
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="surface">Surface approximative (m²)</Label>
                  <Input
                    id="surface"
                    placeholder="Ex: 200"
                    {...register("surface")}
                    className={errors.surface ? "border-destructive" : ""}
                  />
                  {errors.surface && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.surface.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Budget estimé</Label>
                  <Select
                    value={budget}
                    onValueChange={(value) => setValue("budget", value)}
                  >
                    <SelectTrigger
                      className={errors.budget ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Délai souhaité</Label>
                  <Select
                    value={timeline}
                    onValueChange={(value) => setValue("timeline", value)}
                  >
                    <SelectTrigger
                      className={errors.timeline ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.timeline && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.timeline.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Commune / Localisation</Label>
                  <Select
                    value={location}
                    onValueChange={(value) => setValue("location", value)}
                  >
                    <SelectTrigger
                      className={errors.location ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {communes.map((commune) => (
                        <SelectItem key={commune} value={commune}>
                          {commune}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.location && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Continuer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                Vos coordonnées
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+352"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet en quelques mots..."
                  rows={3}
                  {...register("message")}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  {...register("gdprConsent")}
                  className="mt-1"
                />
                <Label htmlFor="gdprConsent" className="text-sm font-normal">
                  J&apos;accepte que mes données soient traitées conformément à la{" "}
                  <a
                    href="/politique-confidentialite"
                    className="text-accent hover:underline"
                  >
                    politique de confidentialité
                  </a>
                  .
                </Label>
              </div>
              {errors.gdprConsent && (
                <p className="text-destructive text-sm">
                  {errors.gdprConsent.message}
                </p>
              )}

              {submitError && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-destructive text-sm">
                  {submitError}
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    "Envoyer ma Demande"
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
