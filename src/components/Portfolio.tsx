import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, Eye, LayoutGrid, List } from "lucide-react";
import { useTranslation } from "react-i18next";
import uxdesignImg from "@/assets/portfolio/uxdesign.jpeg";
import irecruitImg from "@/assets/portfolio/recruitireland.png";
import recruitImg from "@/assets/portfolio/recruit-principal.png";
import ventureImg from "@/assets/portfolio/venture.jpeg";
import digitalImg from "@/assets/portfolio/digital.jpeg";
import arrotekImg from "@/assets/portfolio/arrotek.jpeg";
import diocesanImg from "@/assets/portfolio/diocesan.png";
import donalsImg from "@/assets/portfolio/donals.png";
import davisImg from "@/assets/portfolio/davis-events.png";
import huertaAizuImg from "@/assets/portfolio/huerta-aizu-web.png";
import businessImg from "@/assets/portfolio/business.png";
import tamImg from "@/assets/portfolio/tam.png";
import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Datos de ejemplo - reemplazar con datos reales
  const projects: Project[] = [
    {
      id: 1,
      title: t("portfolio.projects.1.title"),
      description: t("portfolio.projects.1.description"),
      fullDescription: t("portfolio.projects.1.fullDescription"),
      image: huertaAizuImg,
      technologies: ["WordPress", "Elementor", "RESTful API"],
      liveUrl: "https://huertaaizu.com/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 2,
      title: t("portfolio.projects.2.title"),
      description: t("portfolio.projects.2.description"),
      fullDescription: t("portfolio.projects.2.fullDescription"),
      image: uxdesignImg,
      technologies: ["Laravel", "Tailwind CSS", "HubSpot"],
      liveUrl: "https://www.uxdesigninstitute.com/",
      githubUrl: "#",
      category: "Laravel"
    },
    {
      id: 3,
      title: t("portfolio.projects.3.title"),
      description: t("portfolio.projects.3.description"),
      fullDescription: t("portfolio.projects.3.fullDescription"),
      image: recruitImg,
      technologies: ["Laravel", "RESTful APIs", "TailwindCSS"],
      liveUrl: "https://www.recruitireland.com/",
      githubUrl: "#",
      category: "Laravel"
    },
    {
      id: 4,
      title: t("portfolio.projects.4.title"),
      description: t("portfolio.projects.4.description"),
      fullDescription: t("portfolio.projects.4.fullDescription"),
      image: irecruitImg,
      technologies: ["WordPress", "Elementor", "RESTful APIs", "Laravel (Site)"],
      liveUrl: "https://www.recruitireland.com/advice-centre/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 5,
      title: t("portfolio.projects.5.title"),
      description: t("portfolio.projects.5.description"),
      fullDescription: t("portfolio.projects.5.fullDescription"),
      image: davisImg,
      technologies: ["WordPress", "Elementor", "TailwindCSS"],
      liveUrl: "https://davisevents.ie/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 6,
      title: t("portfolio.projects.6.title"),
      description: t("portfolio.projects.6.description"),
      fullDescription: t("portfolio.projects.6.fullDescription"),
      image: ventureImg,
      technologies: ["WordPress", "Elementor", "ACF", "TailwindCSS"],
      liveUrl: "https://venturewave.capital/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 7,
      title: t("portfolio.projects.7.title"),
      description: t("portfolio.projects.7.description"),
      fullDescription: t("portfolio.projects.7.fullDescription"),
      image: businessImg,
      technologies: ["Laravel", "TailwindCSS"],
      liveUrl: "https://businesspost.ie/",
      githubUrl: "#",
      category: "Laravel"
    },
    {
      id: 8,
      title: t("portfolio.projects.8.title"),
      description: t("portfolio.projects.8.description"),
      fullDescription: t("portfolio.projects.8.fullDescription"),
      image: tamImg,
      technologies: ["ReactJS", "Vite", "TailwindCSS"],
      liveUrl: "https://troupealmeira.com/",
      githubUrl: "#",
      category: "ReactJS"
    },
    {
      id: 9,
      title: t("portfolio.projects.9.title"),
      description: t("portfolio.projects.9.description"),
      fullDescription: t("portfolio.projects.9.fullDescription"),
      image: arrotekImg,
      technologies: ["WordPress", "Elementor", "Figma"],
      liveUrl: "https://arrotek.com/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 10,
      title: t("portfolio.projects.10.title"),
      description: t("portfolio.projects.10.description"),
      fullDescription: t("portfolio.projects.10.fullDescription"),
      image: diocesanImg,
      technologies: ["ReactJS", "Node.js", "TailwindCSS"],
      liveUrl: "https://evangelus.com/",
      githubUrl: "#",
      category: "ReactJS"
    },
    {
      id: 11,
      title: t("portfolio.projects.11.title"),
      description: t("portfolio.projects.11.description"),
      fullDescription: t("portfolio.projects.11.fullDescription"),
      image: donalsImg,
      technologies: ["WordPress", "TailwindCSS", "Stripe", "WPBakery Page Builder"],
      liveUrl: "https://donalskitchen.com/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 12,
      title: t("portfolio.projects.12.title"),
      description: t("portfolio.projects.12.description"),
      fullDescription: t("portfolio.projects.12.fullDescription"),
      image: digitalImg,
      technologies: ["Laravel", "TailwindCSS", "Livewire"],
      liveUrl: "https://www.digitallearninginstitute.com/",
      githubUrl: "#",
      category: "Laravel"
    }
  ];

  const categories = [
    { id: "All", label: t("portfolio.categories.all") },
    { id: "Laravel", label: t("portfolio.categories.laravel") },
    { id: "WordPress", label: t("portfolio.categories.wordpress") },
    { id: "ReactJS", label: t("portfolio.categories.reactjs") }
  ];

  useEffect(() => {
    setIsFiltering(true);
    const timeout = setTimeout(() => {
      const filtered = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);
      setFilteredProjects(filtered);
      setIsFiltering(false);
    }, 500); // Small delay to show skeleton and simulate processing

    return () => clearTimeout(timeout);
  }, [selectedCategory, t]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        {isVisible && (
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("portfolio.title").split(' ')[0]} <span className="text-pink-600">{t("portfolio.title").split(' ')[1]}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("portfolio.subtitle")}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-4 p-2 bg-card rounded-lg shadow-soft">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    onClick={() => handleCategoryChange(category.id)}
                    className={selectedCategory === category.id ?
                      "portfolio-gradient hover:shadow-glow transition-all duration-300" :
                      "hover:bg-secondary transition-colors duration-300"
                    }
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden md:flex justify-end mb-6">
              <div className="inline-flex gap-2 p-1 bg-secondary/50 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'portfolio-gradient' : ''}
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'portfolio-gradient' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Projects Grid/List */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-2 gap-8' : 'flex flex-col gap-6'}>
              {isFiltering ? (
                // Skeleton Loading State
                Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden shadow-soft">
                    <Skeleton className="w-full h-64" />
                    <CardContent className="p-6 space-y-4">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <div className="flex gap-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 portfolio-gradient-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="secondary" className="shadow-lg">
                                <Eye className="w-4 h-4 mr-2" />
                                {t("portfolio.viewDetails")}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-6">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-[36rem] object-cover rounded-lg"
                                />
                                <p className="text-muted-foreground leading-relaxed">
                                  {project.fullDescription}
                                </p>
                                <div className="space-y-4">
                                  <h4 className="font-semibold">{t("portfolio.technologies")}</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                      <Badge key={tech} variant="secondary">{tech}</Badge>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex gap-4 pt-4">
                                  <Button asChild className="portfolio-gradient">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      {t("portfolio.viewSite")}
                                    </a>
                                  </Button>
                                  {project.githubUrl !== "#" && (
                                    <Button variant="outline" asChild>
                                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        {t("portfolio.code")}
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="default" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t("portfolio.viewSite")}
                          </a>
                        </Button>
                        {project.githubUrl !== "#" && (
                          <Button size="sm" variant="outline" asChild className="flex-1">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              {t("portfolio.code")}
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;