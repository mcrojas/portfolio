import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Code, Rocket, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import developerPhoto from '@/assets/mary-rojas-frontend-web-developer.png';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "I write maintainable and scalable code following industry best practices."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to create unique solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "I work effectively in teams, communicating clearly and contributing valuable ideas."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "I optimize every project for the best speed and user experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="portfolio-gradient bg-clip-text text-transparent">me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let me introduce myself
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Mary, <b>Front-end Developer</b> with 10+ years of experience building high-performance, scalable, 
                and visually stunning web applications. Expert in modern JavaScript frameworks and libraries 
                (ReactJS, NextJS), advanced CSS (TailwindCSS, Bootstrap, BEM, Material UI, Grid, Flexbox), 
                and seamless integration with RESTful APIs and robust backends (Laravel, WordPress). 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm also developing expertise with headless CMS solutions, currently expanding my skills with Contentful + 
                ReactJS implementations. Adept at translating complex requirements into pixel-perfect, responsive interfaces 
                that deliver exceptional user experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="col-span-2 relative overflow-hidden w-32 h-32 mx-auto mt-6 rounded-full">
                <img 
                  src={developerPhoto} 
                  alt="Sajor - Frontend Developer" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">10+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">40+</div>
                  <p className="text-muted-foreground">Completed Projects</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">6+</div>
                  <p className="text-muted-foreground">Years Working Remotely</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-2">100%</div>
                  <p className="text-muted-foreground">Dedication</p>
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
                href="https://drive.google.com/file/d/1_Mkmia86EAF93QcZQmeZ6EuP25sELsOb/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Download CV
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