import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section"; 
import ProfessionalJourney from "@/components/professional-journey";
import ProjectsSection from "@/components/projects-section";
import PublicationsSection from "@/components/publications-section";
import ContactSection from "@/components/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProfessionalJourney />
        <ProjectsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
