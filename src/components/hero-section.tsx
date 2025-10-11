import { Button } from "@/components/ui/button";
import { FileText, Linkedin, GraduationCap, Github } from "lucide-react";
import headshotImage from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto px-8 py-20 md:py-32 mt-16">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Mattia Perrone
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-normal">
              Advancing healthcare through AI-powered medical imaging
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Computer Vision Researcher & Biomedical Engineer specializing in MRI, CT, 
              and PET scan analysis for early disease detection and precision medicine.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-6">
              <FileText className="w-4 h-4 mr-2" />
              View CV
            </Button>
            <Button size="lg" className="bg-teal hover:bg-teal/90 px-6">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="px-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Google Scholar
            </Button>
            <Button size="lg" variant="outline" className="px-6">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={headshotImage}
              alt="Mattia Perrone"
              className="w-72 h-80 object-cover rounded-3xl shadow-sm border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;