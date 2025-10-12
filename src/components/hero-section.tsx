import { Button } from "@/components/ui/button";
import { FileText, Linkedin, GraduationCap, Github } from "lucide-react";
import headshotImage from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto px-8 py-12 md:py-20 mt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Mattia Perrone
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-normal">
              Advancing healthcare through AI-powered medical imaging
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Computer Vision Researcher and Biomedical Engineer specializing in MRI, CT, 
              and PET scan analysis for early disease detection and precision medicine.
            </p>
          </div>
          
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <Button size="default" className="bg-primary hover:bg-primary/90 px-4">
              <FileText className="w-4 h-4 mr-2" />
              View CV
            </Button>
            <Button size="default" className="bg-teal hover:bg-teal/90 px-4">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button size="default" variant="outline" className="px-4 border-primary/50 text-primary hover:bg-primary/10">
              <GraduationCap className="w-4 h-4 mr-2" />
              Publications
            </Button>
            <Button size="default" variant="outline" className="px-4 border-black text-foreground hover:bg-black hover:text-white">
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
              className="w-80 h-96 object-cover rounded-3xl shadow-sm border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;