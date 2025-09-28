import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import PublicationsSection from "@/components/publications-section";
import ContactSection from "@/components/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
