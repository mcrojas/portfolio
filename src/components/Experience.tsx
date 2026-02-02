import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = t("experience.items", { returnObjects: true }) as any[];

  // This one still needs the technologies list which is not in JSON (to keep it clean)
  // I'll add them back based on index or just add them to JSON.
  // Actually, it's better to stay in sync. I'll add them to JSON in a follow up if needed,
  // but for now I'll just map them manually if they are small.
  // Wait, I already have them in the component. I'll keep them here and just translate the text part.

  const experienceTechs = [
    ["ReactJS", "Next.js", "Laravel", "WordPress", "Tailwind CSS"],
    ["ReactJS", "Next.js", "Laravel", "WordPress", "Tailwind CSS"],
    ["ReactJS", "JavaScript", "CSS3", "WordPress", "XCode", "Swift"],
    ["PHP", "HTML5", "CSS3", "SASS", "JavaScript", "Bootstrap", "WordPress", "Joomla"],
    ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Joomla"]
  ];

  const education = t("experience.education", { returnObjects: true }) as any[];

  const certifications = [
    {
      title: t("experience.certifications.0.title"),
      institution: "Platzi",
      period: "January 2024",
      url: "https://platzi.com/p/mcrojasp/curso/7991-arquitecturas-css/diploma/detalle/"
    },
    {
      title: t("experience.certifications.1.title"),
      institution: "Platzi",
      period: "June 2023",
      url: "https://platzi.com/p/mcrojasp/curso/7962-ia-marketing-contenido/diploma/detalle/"
    },
    {
      title: t("experience.certifications.2.title"),
      institution: "Platzi",
      period: "February 2023",
      url: "https://platzi.com/p/mcrojasp/curso/1420-sistemas-diseno/diploma/detalle/"
    },
    {
      title: t("experience.certifications.3.title"),
      institution: "Udemy",
      period: "January 2023",
      url: "https://www.udemy.com/certificate/UC-37cf17c9-00f0-4ea1-b2a9-e36f29a6007b/"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("experience.title").split(' ')[0]} <span className="text-pink-600">{t("experience.title").split(' ')[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("experience.subtitle")}
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-600 mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary" />
              {t("experience.title")}
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-primary shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-1">{exp.title}</h4>
                        <h5 className="text-lg text-gray-600 font-medium mb-2">{exp.company}</h5>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </span>
                          <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experienceTechs[index].map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-600 mb-8">
              {t("experience.labels.education")}
            </h3>

            {education.map((edu, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">{edu.title}</h4>
                      <h5 className="text-lg text-gray-600 font-medium mb-2">{edu.institution}</h5>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-8">
              {t("experience.labels.certifications")}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{cert.title}</h4>
                        <p className="text-gray-600 text-sm mb-1">{cert.institution}</p>
                        <p className="text-xs text-muted-foreground">{cert.period}</p>
                      </div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-hover transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;