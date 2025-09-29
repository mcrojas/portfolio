import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  const technicalSkills = [
    { name: "React.js", level: 70 },
    { name: "TypeScript", level: 65 },
    { name: "Next.js", level: 70 },
    { name: "JavaScript", level: 75 },
    { name: "HTML5/CSS3", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "WordPress", level: 80 },
    { name: "Laravel", level: 75 },
    { name: "AWS CI/CD", level: 75 }
  ];

  const tools = [
    "Git & GitHub", "VS Code", "Figma", "Adobe", "Webpack", 
    "yarn/NPM", "Vite", "Composer", "Headless CMS",
    "Docker", "Homestead", "AWS", "Material UI", "Netlify", "Firebase", "Supabase"
  ];

  const softSkills = [
    "Effective Communication", "Teamwork", "Problem Solving", 
    "Time Management", "Adaptability", "Critical Thinking",
    "Leadership", "Creativity"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars when section comes into view
            setTimeout(() => {
              const newAnimatedSkills: Record<string, number> = {};
              technicalSkills.forEach((skill) => {
                newAnimatedSkills[skill.name] = skill.level;
              });
              setAnimatedSkills(newAnimatedSkills);
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="portfolio-gradient bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I master to create exceptional web experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  <span className="portfolio-gradient bg-clip-text text-transparent">
                    Technical Skills
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-3">
                      <div 
                        className="skill-progress h-full"
                        style={{ 
                          width: `${animatedSkills[skill.name] || 0}%`,
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools & Soft Skills */}
            <div className="space-y-8">
              {/* Tools */}
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-in-right">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    <span className="portfolio-gradient bg-clip-text text-transparent">
                      Tools
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <Badge 
                        key={tool} 
                        variant="outline" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-in-right">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    <span className="portfolio-gradient bg-clip-text text-transparent">
                      Soft Skills
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {softSkills.map((skill, index) => (
                      <div 
                        key={skill}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                        style={{ animationDelay: `${index * 75}ms` }}
                      >
                        <div className="w-2 h-2 portfolio-gradient rounded-full"></div>
                        <span className="text-sm font-medium text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;