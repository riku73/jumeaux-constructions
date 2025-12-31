import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Jumeaux Constructions",
  description: "Politique de confidentialité et protection des données personnelles de Jumeaux Constructions S.à r.l.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-primary-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l&apos;accueil
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Politique de Confidentialité
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-muted-foreground mb-8">
            <strong>Dernière mise à jour:</strong> Décembre 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Introduction
            </h2>
            <p className="text-muted-foreground mb-4">
              Jumeaux Constructions S.à r.l. (&quot;nous&quot;, &quot;notre&quot;, &quot;la Société&quot;)
              s&apos;engage à protéger la vie privée des utilisateurs de son site web.
              Cette politique de confidentialité explique comment nous collectons,
              utilisons et protégeons vos données personnelles conformément au
              Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Responsable du traitement
            </h2>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Raison sociale:</strong> Jumeaux Constructions S.à r.l.</li>
              <li><strong>Adresse:</strong> Rue de la Construction, L-7452 Tuntange, Luxembourg</li>
              <li><strong>Email:</strong> contact@jumeaux-constructions.lu</li>
              <li><strong>Téléphone:</strong> +352 XX XX XX XX</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Données collectées
            </h2>
            <p className="text-muted-foreground mb-4">
              Nous collectons les données personnelles suivantes:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li><strong>Données d&apos;identification:</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de projet:</strong> type de projet, surface, budget estimé, localisation, délai souhaité</li>
              <li><strong>Données de navigation:</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
              <li><strong>Données de communication:</strong> contenu des messages envoyés via nos formulaires</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Finalités du traitement
            </h2>
            <p className="text-muted-foreground mb-4">
              Vos données personnelles sont traitées pour les finalités suivantes:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>Répondre à vos demandes de devis et d&apos;information</li>
              <li>Vous recontacter concernant votre projet de construction</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales</li>
              <li>Établir des statistiques de fréquentation du site</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Base légale du traitement
            </h2>
            <p className="text-muted-foreground mb-4">
              Le traitement de vos données personnelles est fondé sur:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li><strong>Votre consentement:</strong> lorsque vous remplissez nos formulaires de contact</li>
              <li><strong>L&apos;exécution d&apos;un contrat:</strong> pour la gestion de votre projet de construction</li>
              <li><strong>Notre intérêt légitime:</strong> pour améliorer nos services</li>
              <li><strong>Une obligation légale:</strong> pour respecter la réglementation en vigueur</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Durée de conservation
            </h2>
            <p className="text-muted-foreground mb-4">
              Vos données personnelles sont conservées pendant les durées suivantes:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li><strong>Données de contact:</strong> 3 ans après le dernier contact</li>
              <li><strong>Données de projet:</strong> durée du projet + 10 ans (garantie décennale)</li>
              <li><strong>Données de navigation:</strong> 13 mois maximum</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Partage des données
            </h2>
            <p className="text-muted-foreground mb-4">
              Vos données personnelles peuvent être partagées avec:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>Nos sous-traitants techniques (hébergement, email)</li>
              <li>Nos partenaires pour l&apos;exécution de votre projet</li>
              <li>Les autorités compétentes en cas d&apos;obligation légale</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Vos droits
            </h2>
            <p className="text-muted-foreground mb-4">
              Conformément au RGPD, vous disposez des droits suivants:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li><strong>Droit d&apos;accès:</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification:</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement:</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation:</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité:</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition:</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retrait du consentement:</strong> retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à:{" "}
              <a href="mailto:contact@jumeaux-constructions.lu" className="text-accent hover:underline">
                contact@jumeaux-constructions.lu
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Cookies
            </h2>
            <p className="text-muted-foreground mb-4">
              Notre site utilise des cookies pour:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li><strong>Cookies essentiels:</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques:</strong> pour comprendre comment vous utilisez notre site</li>
              <li><strong>Cookies de préférences:</strong> pour mémoriser vos choix</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Sécurité
            </h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre la destruction accidentelle
              ou illicite, la perte, l&apos;altération, la divulgation ou l&apos;accès non autorisé.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Réclamation
            </h2>
            <p className="text-muted-foreground">
              Si vous estimez que le traitement de vos données personnelles constitue
              une violation du RGPD, vous avez le droit d&apos;introduire une réclamation
              auprès de la Commission Nationale pour la Protection des Données (CNPD)
              du Luxembourg.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Modifications
            </h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier cette politique de confidentialité
              à tout moment. Les modifications entrent en vigueur dès leur publication
              sur ce site. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
