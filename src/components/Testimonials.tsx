import { Code2, Coffee, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Paul Conroy - CTO Square1",
      description: "Mary has been an integral part of our team for over six years, bringing deep expertise in WordPress and frontend development. She has a real talent for translating designs into clean, responsive, and user-friendly web experiences. She has a great eye for detail and a strong grasp of what makes a site feel polished and intuitive. She’s also highly skilled at customising WordPress to meet complex client requirements, turning challenging briefs into systems that are both reliable and easy to manage."
    },
    {
      icon: Lightbulb,
      title: "Gerardo Romero - Dev Square1",
      description: "I had the pleasure of working alongside Mary Rojas, and I can confidently say she is an exceptional front-end engineer. Mary consistently demonstrated a deep understanding of React.js, Laravel, and WordPress, always delivering clean, scalable, and user-focused solutions. Her attention to detail and ability to turn complex requirements into intuitive user experiences made a huge impact on our projects. Beyond her technical skills, Mary is a great teammate, collaborative, proactive, and always willing to help. Any team would be lucky to have her."
    },
    {
      icon: Zap,
      title: "Veronica Silva - PM TeravisionTech",
      description: "I worked with Mary for about 5 years at Teravision Technologies, where we collaborated on various projects (Responsive Web Design, WordPress, iOS App, etc.). Thanks to Mary being part of our Front-end team, we successfully achieved the goals the company set in this area. For example, we relied on her commitment to learn and implement React Native in a significant company project. Mary was a key member of that team, and she approached the learning and execution curve for this technology during the project's progression with remarkable determination."
    },
    {
      icon: Coffee,
      title: "Alexa Casique - Graphic Designer OrugaStudio",
      description: "I worked with Mary for 2 years at Oruga Studio. Throughout this time, Mary was incredibly focused on her projects, always eager to help wherever she could. She is highly professional in her work, and the quality of her output is impeccable."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Testimonials & <span className="portfolio-gradient bg-clip-text text-transparent">Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what others are saying about working with me
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;