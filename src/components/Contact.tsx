import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("contact.info.email"),
      value: "mcrojas09@gmail.com",
      link: "mailto:mcrojas09@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("contact.info.phone"),
      value: "+58 (414) 9185500",
      link: "tel:+584149185500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("contact.info.location"),
      value: "Caracas, Venezuela",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/sajor.dev",
      color: "hover:text-gray-800"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/mcrojasp/",
      color: "hover:text-blue-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqaypwgp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: t("contact.form.success.title"),
          description: t("contact.form.success.description"),
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title").split(' ').slice(0, -1).join(' ')} <span className="text-pink-600">{t("contact.title").split(' ').slice(-1)}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{t("contact.form.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.form.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.namePlaceholder")}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.form.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.emailPlaceholder")}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.subjectPlaceholder")}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={6}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full portfolio-gradient hover:shadow-glow transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{t("contact.info.title")}</h3>
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">{t("contact.info.social")}</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-110 group ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Card 
              <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 portfolio-gradient-soft">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold mb-2">{t("contact.info.preferCall")}</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Schedule a free 30-minute video call to discuss your project
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Schedule a call
                  </Button>
                </CardContent>
              </Card>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;