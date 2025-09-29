import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-semibold">Sajor.dev</p>
              <p className="text-gray-300 text-sm">Creating exceptional web experiences</p>
            </div>
            <div className="text-center md:text-right text-sm text-gray-300">
              <p>&copy; 2025 Portfolio. All rights reserved.</p>
              <p>Made with ❤️ and ReactJS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
