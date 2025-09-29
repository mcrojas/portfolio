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

const Services = () => {
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
      icon: <Code className="w-12 h-12" />,
      title: "Frontend Web Development",
      description: "Creation of modern and responsive interfaces using the latest technologies like React, Next.js, and TypeScript.",
      features: [
        "Development with React.js/Next.js",
        "Clean and maintainable code",
        "API integration",
        "Testing and documentation"
      ],
      price: "Starting at $800",
      popular: true
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Creation of intuitive and engaging user experiences that convert visitors into customers.",
      features: [
        "Interactive prototyping",
        "Responsive design",
        "User research",
        "Design systems"
      ],
      price: "Starting at $600",
      popular: false
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Custom CMS Solutions",
      description: "Develop a simple, user-friendly Content Management System (CMS) so your client can easily update and manage their website content without code.",
      features: [
        "Headless CMS implementation (Contentful, WordPress, Shopify etc.)",
        "Intuitive admin dashboard",
        "Content editing and publishing workflows",
        "Performance optimization"
      ],
      price: "Starting at $500",
      popular: false
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Improving the speed and performance of your website for a better user experience and SEO.",
      features: [
        "Performance analysis",
        "Code optimization",
        "Lazy loading",
        "Core Web Vitals"
      ],
      price: "Starting at $400",
      popular: false
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Technical SEO",
      description: "Technical optimization to improve search engine rankings and increase online visibility.",
      features: [
        "On-page optimization",
        "Structured data",
        "Meta tags optimization",
        "Site speed optimization"
      ],
      price: "Starting at $300",
      popular: false
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Technical Consulting",
      description: "Specialized advice for architecture and best practices in your project's development.",
      features: [
        "Code audit",
        "Application architecture",
        "Stack technology selection",
        "Code review and mentoring"
      ],
      price: "Starting at $50/hour",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="portfolio-gradient bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional web development solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`group relative overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                  service.popular ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 portfolio-gradient text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Most Popular
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

                <CardContent className="space-y-6">
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 portfolio-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price 
                  <div className="text-center pt-4 border-t border-border">
                    <div className="text-2xl font-bold portfolio-gradient bg-clip-text text-transparent mb-4">
                      {service.price}
                    </div>
                    <Button 
                      className={`w-full group-hover:shadow-glow transition-all duration-300 ${
                        service.popular ? 'portfolio-gradient' : ''
                      }`}
                      variant={service.popular ? 'default' : 'outline'}
                    >
                      Solicitar presupuesto
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>*/}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold mb-4">
              Do you need something customized?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. If you have a specific idea or need a tailored solution,
              let's talk about how I can help you make it a reality.
            </p>
            <Button size="lg" className="portfolio-gradient hover:shadow-glow transition-all duration-300" onClick={() => scrollToSection("contact")}>
              Contact for customized project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;