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

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
      <Footer />
    </>
  );
}
