import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import { useTranslation } from "react-i18next";

import SEO from "@/components/SEO";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <SEO />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-semibold">Sajor.dev</p>
              <p className="text-gray-300 text-sm">{t("footer.tagline")}</p>
            </div>
            <div className="text-center md:text-right text-sm text-gray-300">
              <p>&copy; {new Date().getFullYear()} Portfolio. {t("footer.rights")}</p>
              <p>{t("footer.madeWith")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
