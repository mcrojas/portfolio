import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Code, Rocket, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import developerPhoto from '@/assets/mary-rojas-frontend-web-developer.png';
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const About = () => {
  const { t } = useTranslation();
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t("about.highlights.cleanCode.title"),
      description: t("about.highlights.cleanCode.description")
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t("about.highlights.innovation.title"),
      description: t("about.highlights.innovation.description")
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("about.highlights.collaboration.title"),
      description: t("about.highlights.collaboration.description")
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("about.highlights.performance.title"),
      description: t("about.highlights.performance.description")
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("about.title").split(' ')[0]} <span className="portfolio-gradient bg-clip-text text-transparent">{t("about.title").split(' ')[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-md text-muted-foreground leading-relaxed">
                {t("about.description1")}
              </p>
              <p className="text-md text-muted-foreground leading-relaxed">
                {t("about.description2")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="col-span-2 relative overflow-hidden w-48 h-48 mx-auto mt-6 rounded-full group">
                <img
                  src={developerPhoto}
                  alt="Sajor - Frontend Developer"
                  className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">{t("about.stats.experience")}</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={40} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">{t("about.stats.projects")}</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={6} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">{t("about.stats.remote")}</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">{t("about.stats.dedication")}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <CardContent className="pt-6">
                  <div className="text-primary group-hover:text-primary/80 transition-colors duration-300 mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center mt-12 animate-fade-in-up">
            <Button size="lg" className="portfolio-gradient hover:shadow-glow transition-all duration-300">
              <a
                href="https://drive.google.com/file/d/1EdVRZw_mKpkN2NLYwDWFDDvbXVt4T1QB/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {t("about.downloadCv")}
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;