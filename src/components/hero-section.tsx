import { Button } from "@/components/ui/button";
import { FileText, Linkedin, GraduationCap, Github } from "lucide-react";
import headshotImage from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Dr. Sarah Chen
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-medium">
              Advancing healthcare through AI-powered medical imaging
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Computer Vision Researcher & Biomedical Engineer specializing in MRI, CT,
              and PET scan analysis for early disease detection and precision medicine.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <FileText className="w-4 h-4 mr-2" />
              View CV
            </Button>
            <Button size="lg" variant="teal" className="bg-teal hover:bg-teal/90">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <GraduationCap className="w-4 h-4 mr-2" />
              Google Scholar
            </Button>
            <Button size="lg" variant="outline">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={headshotImage}
              alt="Dr. Sarah Chen"
              className="w-80 h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;