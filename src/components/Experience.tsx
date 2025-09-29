import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Software Engineer",
      company: "Square1",
      period: "August 2019 - Present",
      location: "Dublin, Ireland",
      type: "Remote",
      achievements: [
        "Collaborated on the development and maintenance of over 10 complex websites, leveraging ReactJS and Next.js to build scalable, high-performance web applications. Additionally, developed custom WordPress themes and Laravel applications integrated with third-party APIs, which resulted in a 15% increase in site load speed and a 10% improvement in user retention.",
        "Implemented modern Laravel ecosystems including Livewire, AlpineJS, and Inertia.js to create dynamic, responsive interfaces with minimal JavaScript overhead, enhancing user experience across devices.",
        "Improved site performance and SEO metrics through technical optimizations and content structuring. These actions increased organic traffic by 15% across several client websites, contributing to better search engine visibility.",
        "Utilized TailwindCSS to achieve consistent, responsive designs across all devices, helping reduce cross-browser compatibility issues by 20%."
      ],
      technologies: ["ReactJS", "TypeScript", "Next.js", "Laravel", "WordPress", "Tailwind CSS"]
    },
    {
      title: "Intermediate Layout Programmer",
      company: "Teravision Technologies",
      period: "August 2014 - July 2019",
      location: "Caracas, Venezuela",
      type: "Full-time",
      achievements: [
        "I developed custom, high-performance websites on CMS platforms such as WordPress, consistently aligning solutions with client requirements and business objectives.",
        "I focused on delivering exceptional accessibility, intuitive navigation, and superior user experiences by leveraging modern standards like HTML5, mobile-first design, and responsive layouts.",
        "I analyzed, architected, and built robust software solutions using PHP and ReactJS, directly supporting the technology department’s goals and ensuring all deliverables met operational guidelines and organizational standards.",
        "My role also included contributing to mobile development projects with Xcode, where I implemented Auto Layout techniques in Swift and Objective-C to create responsive, user-friendly interfaces."
      ],
      technologies: ["ReactJS", "JavaScript", "CSS3", "WordPress", "XCode", "Swift"]
    },
    {
      title: "Web Developer",
      company: "Oruga Studio",
      period: "July 2010 - July 2014",
      location: "Caracas, Venezuela",
      type: "Full-time",
      achievements: [
        "Specializing in end-to-end web development, I build robust and scalable websites on CMS platforms like Joomla and WordPress.",
        "I leverage a strong back-end foundation with PHP and MySQL to create powerful functionality, while my front-end expertise in HTML5, CSS3, JavaScript, Ajax, and jQuery ensures dynamic, responsive, and user-friendly web applications."
      ],
      technologies: ["PHP", "HTML5", "CSS3", "SASS", "JavaScript", "Bootstrap", "WordPress", "Joomla"]
    },
    {
      title: "Web Assembler",
      company: "E4GS Interactive LLC",
      period: "January 2009 - July 2010",
      location: "Caracas, Venezuela",
      type: "Full-time",
      achievements: [
        "Completed an internship as a graduation requirement for my Systems Analysis and Design degree, gaining practical expertise in web development and platform administration.",
        "My role focused on the full lifecycle of websites built on the Joomla CMS, from initial development to ongoing administration.",
        "I was responsible for ensuring high standards through quality control, security implementation, and technical support. Additionally, I managed and maintained Google Apps services."
      ],
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Joomla"]
    }
  ];

  const education = [
    {
      title: "Associate's Degree in Systems Analysis and Design",
      institution: "UNEFA",
      period: "2007-2010",
      type: "Caracas, Venezuela",
      description: "Systems Analysis and Design"
    }
  ];

  const certifications = [
    {
      title: "CSS Architectures Course",
      institution: "Platzi",
      period: "January 2024",
      url: "https://platzi.com/p/mcrojasp/curso/7991-arquitecturas-css/diploma/detalle/"
    },
    {
      title: "Artificial Intelligence for Marketing and Content Course",
      institution: "Platzi",
      period: "June 2023",
      url: "https://platzi.com/p/mcrojasp/curso/7962-ia-marketing-contenido/diploma/detalle/"
    },
    {
      title: "Design System",
      institution: "Platzi",
      period: "February 2023",
      url: "https://platzi.com/p/mcrojasp/curso/1420-sistemas-diseno/diploma/detalle/"
    },
    {
      title: "Frontend Developer Course",
      institution: "Platzi",
      period: "January 2023",
      url: "https://developers.google.com"
    },
    {
      title: "Leadership: Technology / Engineering Management",
      institution: "Noble Work Foundation",
      period: "January 2023",
      url: "https://www.udemy.com/certificate/UC-37cf17c9-00f0-4ea1-b2a9-e36f29a6007b/"
    },
    {
      title: "React Hooks",
      institution: "Platzi",
      period: "April 2021",
      url: "https://platzi.com/p/mcrojasp/curso/2118-react-hooks/diploma/detalle/"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="portfolio-gradient bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              More of my credentials and professional journey
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-600 mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary" />
              Work Experience
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
                      {exp.technologies.map((tech, techIndex) => (
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
              Education
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
              Certifications & Courses
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