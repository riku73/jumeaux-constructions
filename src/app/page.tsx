import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { ServiceArea } from "@/components/sections/service-area";
import { Contact } from "@/components/sections/contact";
import { ErrorBoundary } from "@/components/ui/error-boundary";

export default function Home() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg focus:outline-none"
      >
        Aller au contenu principal
      </a>
      <Header />
      <ErrorBoundary>
        <main id="main-content">
          <Hero />
          <Services />
          <WhyChooseUs />
          <Portfolio />
          <Process />
          <Testimonials />
          <About />
          <ServiceArea />
          <Contact />
        </main>
      </ErrorBoundary>
      <Footer />
    </>
  );
}
