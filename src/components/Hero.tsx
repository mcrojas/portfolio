import { Button } from "@/components/ui/button";
import { ChevronsDown, Code, Instagram, Linkedin, Mail } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Code className="w-4 h-4 mr-2" />
            <span className="text-sm">{t("hero.badge")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            {t("hero.title")}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="portfolio-gradient hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection('portfolio')}
            >
              {t("hero.buttons.portfolio")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection('contact')}
            >
              {t("hero.buttons.contact")}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://www.instagram.com/sajor.dev" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-125">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mcrojasp/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-125">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mcrojas09@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-125">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute slide-in-from-bottom-1/2 mt-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronsDown size={32} />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute top-1/3 right-10 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-accent/30 backdrop-blur-sm border border-accent/40"></div>
      </div>
    </section>
  );
};

export default Hero;