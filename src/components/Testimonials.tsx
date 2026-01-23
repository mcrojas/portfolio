import { Code2, Coffee, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation, Trans } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialItems = t("testimonials.items", { returnObjects: true }) as any[];

  const icons = [Code2, Coffee, Zap, Lightbulb, Zap, Coffee]; // Matching indexes

  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonialItems.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <CarouselItem key={index}
                    className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                        <CardContent className="p-6 text-center h-full flex flex-col">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex' />
            <CarouselNext className='hidden md:flex' />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;