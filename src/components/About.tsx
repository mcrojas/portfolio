import { ArrowDown } from "lucide-react";
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

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {t("about.title").split(' ')[0]} <span className="text-pink-600">{t("about.title").split(' ')[1]}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
            {/* Text Content and Stats */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <p className="text-base text-gray-700 leading-relaxed">
                  {t("about.description1")}
                </p>
                <p className="text-bahttps://drive.google.com/file/d/1V5Z0YuPvat-22tAMX3G6-SPwS5JSsSB_/view?usp=sharingse text-gray-700 leading-relaxed">
                  {t("about.description2")}
                </p>
              </div>

              {/* Stats Grid 2x2 */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 p-6">
                  <div className="text-5xl font-bold text-pink-600 mb-2">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                    {t("about.stats.experience")}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 p-6">
                  <div className="text-5xl font-bold text-pink-600 mb-2">
                    <AnimatedCounter end={40} suffix="+" />
                  </div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                    {t("about.stats.projects")}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 p-6">
                  <div className="text-5xl font-bold text-pink-600 mb-2">
                    <AnimatedCounter end={6} suffix="+" />
                  </div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                    {t("about.stats.remote")}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 p-6">
                  <div className="text-5xl font-bold text-pink-600 mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                    {t("about.stats.dedication")}
                  </p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                {/* Pink background blob */}
                <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-gradient-to-br from-pink-200 via-pink-100 to-purple-100 rounded-full -z-10"></div>
                
                {/* Photo container */}
                <div className="relative overflow-hidden w-80 h-80 rounded-full border-8 border-white shadow-2xl group">
                  <img
                    src={developerPhoto}
                    alt="Mary Rojas - Frontend Developer"
                    className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>

                {/* Tech badges */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">⚛️</span>
                    <span className="text-sm font-medium text-gray-700">React</span>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">▲</span>
                    <span className="text-sm font-medium text-gray-700">Next.js</span>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">🎨</span>
                    <span className="text-sm font-medium text-gray-700">Tailwind</span>
                  </div>
                </div>

                {/* Download CV Button */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a
                      href="https://drive.google.com/file/d/1V5Z0YuPvat-22tAMX3G6-SPwS5JSsSB_/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {t("about.downloadCv")}
                      <ArrowDown className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;