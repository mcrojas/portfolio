import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Search,
  Settings,
  ArrowRight
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: t("services.items.uiux.title"),
      description: t("services.items.uiux.description"),
      features: t("services.items.uiux.features", { returnObjects: true }) as string[],
      price: "Starting at $600",
      popular: false
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: t("services.items.frontend.title"),
      description: t("services.items.frontend.description"),
      features: t("services.items.frontend.features", { returnObjects: true }) as string[],
      price: "Starting at $800",
      popular: true
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: t("services.items.cms.title"),
      description: t("services.items.cms.description"),
      features: t("services.items.cms.features", { returnObjects: true }) as string[],
      price: "Starting at $500",
      popular: false
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: t("services.items.performance.title"),
      description: t("services.items.performance.description"),
      features: t("services.items.performance.features", { returnObjects: true }) as string[],
      price: "Starting at $400",
      popular: false
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: t("services.items.seo.title"),
      description: t("services.items.seo.description"),
      features: t("services.items.seo.features", { returnObjects: true }) as string[],
      price: "Starting at $300",
      popular: false
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: t("services.items.consulting.title"),
      description: t("services.items.consulting.description"),
      features: t("services.items.consulting.features", { returnObjects: true }) as string[],
      price: "Starting at $50/hour",
      popular: false
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {isVisible && (
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("services.title").split(' ')[0]} <span className="portfolio-gradient bg-clip-text text-transparent">{t("services.title").split(' ')[1]}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("services.subtitle")}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className={`group relative flex flex-col overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in-up ${service.popular ? 'ring-2 ring-primary shadow-glow' : ''
                    }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 portfolio-gradient text-white text-xs px-2 py-1 rounded-full font-semibold z-10">
                      {t("services.popular")}
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="text-primary group-hover:text-primary/80 transition-colors duration-300 mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-grow flex flex-col justify-between">
                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 portfolio-gradient rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Individual CTA */}
                    <div className="pt-6 border-t border-border mt-auto">
                      <Button
                        className={`w-full group-hover:shadow-glow transition-all duration-300 ${service.popular ? 'portfolio-gradient' : ''
                          }`}
                        variant={service.popular ? 'default' : 'outline'}
                        onClick={() => scrollToSection("contact")}
                      >
                        {t("services.custom.button")}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 p-8 bg-card rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4">
                {t("services.custom.title")}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t("services.custom.subtitle")}
              </p>
              <Button size="lg" className="w-full portfolio-gradient hover:shadow-glow transition-all duration-300" onClick={() => scrollToSection("contact")}>
                {t("services.custom.button")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;