import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Eye } from "lucide-react";
import uxdesignImg from "@/assets/portfolio/uxdesign.jpeg";
import irecruitImg from "@/assets/portfolio/recruitireland.png";
import recruitImg from "@/assets/portfolio/recruit-principal.png";
import ventureImg from "@/assets/portfolio/venture.jpeg";
import digitalImg from "@/assets/portfolio/digital.jpeg";
import arrotekImg from "@/assets/portfolio/arrotek.jpeg";
import diocesanImg from "@/assets/portfolio/diocesan.png";
import donalsImg from "@/assets/portfolio/donals.png";
import davisImg from "@/assets/portfolio/davis-events.png";
import { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Datos de ejemplo - reemplazar con datos reales
  const projects: Project[] = [
    {
      id: 1,
      title: "UX Design Institute",
      description: "Educational platform built with Laravel and TailwindCSS.",
      fullDescription: "Educational platform built with Laravel and TailwindCSS. Developed responsive interfaces and optimized user experience.",
      image: uxdesignImg,
      technologies: ["Laravel", "Tailwind CSS", "HubSpot"],
      liveUrl: "https://www.uxdesigninstitute.com/",
      githubUrl: "#",
      category: "Laravel"
    },
    {
      id: 2,
      title: "Recruit Ireland",
      description: "Recruit Ireland is one of Ireland’s leading job platforms and trusted career advisory hubs.",
      fullDescription: "Recruit Ireland is one of Ireland’s leading job platforms and trusted career advisory hubs. Built with Laravel and integrated with various third-party services to enhance functionality and user engagement.",
      image: recruitImg,
      technologies: ["Laravel", "RESTful APIs", "TailwindCSS"],
      liveUrl: "https://www.recruitireland.com/",
      githubUrl: "#",
      category: "Laravel"
    },
    {
      id: 3,
      title: "Recruit Ireland Advice Centre",
      description: "Recruit Ireland is one of Ireland’s leading job platforms and trusted career advisory hubs.",
      fullDescription: "Recruit Ireland is one of Ireland’s leading job platforms and trusted career advisory hubs. Built with WordPress and integrated with various third-party services to enhance functionality and user engagement.",
      image: irecruitImg,
      technologies: ["WordPress", "Elementor", "RESTful APIs", "Laravel (Site)"],
      liveUrl: "https://www.recruitireland.com/advice-centre/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 4,
      title: "Venturewave Capital",
      description: "Corporate website using WordPress (Elementor) and Figma.",
      fullDescription: "Corporate website using WordPress (Elementor) and Figma. Led the integration of custom designs.",
      image: ventureImg,
      technologies: ["WordPress", "Elementor", "ACF", "TailwindCSS"],
      liveUrl: "https://venturewave.capital/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 5,
      title: "Digital Learning Institute",
      description: "Online learning application with Laravel (Blade), TailwindCSS, and Livewire.",
      fullDescription: "Online learning application with Laravel (Blade), TailwindCSS, and Livewire. Built interactive modules and improved user retention.",
      image: digitalImg,
      technologies: ["Laravel", "TailwindCSS", "Livewire"],
      liveUrl: "https://www.digitallearninginstitute.com/",
      githubUrl: "#",
      category: "Laravel"
    },
    {
      id: 6,
      title: "Arrotek Medical Device",
      description: "Arrotek specializes in medical device design, prototyping, and concept refinement.",
      fullDescription: "Arrotek specializes in medical device design, prototyping, and concept refinement. Corporate website using WordPress (Elementor) and Figma. Led the integration of custom designs.",
      image: arrotekImg,
      technologies: ["WordPress", "Elementor", "Figma"],
      liveUrl: "https://arrotek.com/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 7,
      title: "Diocesan | Evangelus",
      description: "Evangelus is a comprehensive online message platform in ReactJS.",
      fullDescription: "Evangelus is a comprehensive online message platform in ReactJS. Led the integration of custom designs.",
      image: diocesanImg,
      technologies: ["ReactJS", "Node.js", "TailwindCSS"],
      liveUrl: "https://evangelus.com/",
      githubUrl: "#",
      category: "ReactJS"
    },
    {
      id: 8,
      title: "Donal's Kitchen",
      description: "Delicious, doable recipes and meal plans Cook smarter with Donal's Kitchen.",
      fullDescription: "Implemented responsive and visually appealing user interfaces using TailwindCSS and modern web technologies (WordPress, Stripe)",
      image: donalsImg,
      technologies: ["WordPress", "TailwindCSS", "Stripe", "WPBakery Page Builder"],
      liveUrl: "https://donalskitchen.com/",
      githubUrl: "#",
      category: "WordPress"
    },
    {
      id: 9,
      title: "Davis Events",
      description: "Transform the events into extraordinary experiences with Davis Events Agency Dublin.",
      fullDescription: "Transform your events into extraordinary experiences with Davis Events Agency Dublin. Developed responsive interfaces and optimized user experience.",
      image: davisImg,
      technologies: ["WordPress", "Elementor", "TailwindCSS"],
      liveUrl: "https://davisevents.ie/",
      githubUrl: "#",
      category: "WordPress"
    }
  ];

  const categories = ["All", "Laravel", "WordPress", "ReactJS"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="portfolio-gradient bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my most outstanding projects that showcase my experience and creativity
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 p-2 bg-card rounded-lg shadow-soft">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
                    "portfolio-gradient hover:shadow-glow transition-all duration-300" : 
                    "hover:bg-secondary transition-colors duration-300"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 portfolio-gradient-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="shadow-lg">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
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
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-muted-foreground leading-relaxed">
                              {project.fullDescription}
                            </p>
                            <div className="space-y-4">
                              <h4 className="font-semibold">Technologies used:</h4>
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
                                  View Site
                                </a>
                              </Button>
                              {project.githubUrl !== "#" && (
                              <Button variant="outline" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Code
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
                        View Site
                      </a>
                    </Button>
                    {project.githubUrl !== "#" && (
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;