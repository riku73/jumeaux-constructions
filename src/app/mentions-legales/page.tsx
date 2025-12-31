import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mentions Légales | Jumeaux Constructions",
  description: "Mentions légales de Jumeaux Constructions S.à r.l., entreprise de construction au Luxembourg.",
};

export default function MentionsLegales() {
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
            Mentions Légales
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Informations sur l&apos;éditeur
            </h2>
            <p className="text-muted-foreground mb-4">
              Ce site est édité par:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Raison sociale:</strong> Jumeaux Constructions S.à r.l.</li>
              <li><strong>Forme juridique:</strong> Société à responsabilité limitée</li>
              <li><strong>Siège social:</strong> 2 Rue Ueleschter, L-7481 Tuntange, Luxembourg</li>
              <li><strong>RCS Luxembourg:</strong> B 123456</li>
              <li><strong>TVA:</strong> LU 12345678</li>
              <li><strong>Capital social:</strong> 12 500 €</li>
              <li><strong>Téléphone:</strong> +352 26 61 34 23</li>
              <li><strong>Email:</strong> contact@jumeaux-constructions.lu</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Directeur de la publication
            </h2>
            <p className="text-muted-foreground">
              Le directeur de la publication est le gérant de la société Jumeaux Constructions S.à r.l.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Hébergement
            </h2>
            <p className="text-muted-foreground mb-4">
              Ce site est hébergé par:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong>Hébergeur:</strong> Vercel Inc.</li>
              <li><strong>Adresse:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><strong>Site web:</strong> https://vercel.com</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Propriété intellectuelle
            </h2>
            <p className="text-muted-foreground mb-4">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.)
              est la propriété exclusive de Jumeaux Constructions S.à r.l. ou de ses partenaires
              et est protégé par les lois relatives à la propriété intellectuelle.
            </p>
            <p className="text-muted-foreground">
              Toute reproduction, distribution, modification ou utilisation de ce contenu
              sans autorisation préalable écrite est strictement interdite.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Données personnelles
            </h2>
            <p className="text-muted-foreground">
              Pour toute information concernant le traitement de vos données personnelles,
              veuillez consulter notre{" "}
              <Link href="/politique-confidentialite" className="text-accent hover:underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Cookies
            </h2>
            <p className="text-muted-foreground">
              Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur
              et analyser le trafic. En continuant à naviguer sur ce site,
              vous acceptez l&apos;utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Limitation de responsabilité
            </h2>
            <p className="text-muted-foreground mb-4">
              Jumeaux Constructions S.à r.l. s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour
              des informations diffusées sur ce site. Toutefois, la société ne peut garantir
              l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.
            </p>
            <p className="text-muted-foreground">
              En conséquence, Jumeaux Constructions S.à r.l. décline toute responsabilité
              pour toute imprécision, inexactitude ou omission portant sur les informations
              disponibles sur ce site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Droit applicable
            </h2>
            <p className="text-muted-foreground">
              Les présentes mentions légales sont régies par le droit luxembourgeois.
              En cas de litige, les tribunaux du Grand-Duché de Luxembourg seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Contact
            </h2>
            <p className="text-muted-foreground">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à:
              <br />
              <a href="mailto:contact@jumeaux-constructions.lu" className="text-accent hover:underline">
                contact@jumeaux-constructions.lu
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
