import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "portfolio", label: t("nav.portfolio") },
    { id: "services", label: t("nav.services") },
    { id: "contact", label: t("nav.contact") }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? "bg-background/95 backdrop-blur-lg shadow-soft"
      : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold portfolio-gradient bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Sajor.dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 portfolio-gradient rounded-full transition-all duration-300"></div>
                )}
              </Button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground ml-2 hover:text-primary transition-colors duration-300">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="uppercase">{i18n.language.split('-')[0]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('es')}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              className="portfolio-gradient hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              {t("nav.cta")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="text-xl font-bold portfolio-gradient bg-clip-text text-transparent mb-4">
                  Sajor.dev
                </div>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`justify-start text-base transition-all duration-300 ${activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                      }`}
                  >
                    {item.label}
                  </Button>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-4">
                  <div className="flex items-center justify-between px-4">
                    <span className="text-sm font-medium text-muted-foreground">{t("nav.language")}</span>
                    <div className="flex gap-2">
                      <Button
                        variant={i18n.language.startsWith('en') ? "default" : "outline"}
                        size="sm"
                        onClick={() => changeLanguage('en')}
                        className={i18n.language.startsWith('en') ? "portfolio-gradient" : ""}
                      >
                        EN
                      </Button>
                      <Button
                        variant={i18n.language.startsWith('es') ? "default" : "outline"}
                        size="sm"
                        onClick={() => changeLanguage('es')}
                        className={i18n.language.startsWith('es') ? "portfolio-gradient" : ""}
                      >
                        ES
                      </Button>
                    </div>
                  </div>
                  <Button
                    className="w-full portfolio-gradient hover:shadow-glow transition-all duration-300"
                    onClick={() => scrollToSection("contact")}
                  >
                    {t("nav.cta")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;