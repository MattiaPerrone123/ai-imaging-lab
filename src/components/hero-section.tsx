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
              Research Scientist - Rush University Medical Center
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI and computer vision for medical imaging and clinical text.
              Prior experience applying deep learning to time-series in biomechanics.
            </p>
          </div>
          
            <div className="flex gap-2 flex-wrap md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          <Button asChild size="default" className="bg-primary hover:bg-primary/90 px-4 lg:px-8 flex-1 md:flex-none">
            <a href="/Mattia_Perrone_Resume.pdf" download>
              <FileText className="w-4 h-4 mr-2" />
              View CV
            </a>
          </Button>

          <Button asChild size="default" className="bg-teal hover:bg-teal/90 px-4 lg:px-8 flex-1 md:flex-none">
            <a href="https://www.linkedin.com/in/mattia-perrone/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>

          <Button asChild size="default" variant="outline" className="px-4 lg:px-8 border-primary/50 text-primary hover:bg-primary/10 flex-1 md:flex-none">
            <a href="https://scholar.google.com/citations?user=kqPVfW8AAAAJ&hl=en&oi=ao">
              <GraduationCap className="w-4 h-4 mr-2" />
              Papers
            </a>
          </Button>

          <Button asChild size="default" variant="outline" className="px-4 lg:px-8 border-black text-foreground hover:bg-black hover:text-white flex-1 md:flex-none">
            <a href="https://github.com/MattiaPerrone123" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={headshotImage}
              alt="Mattia Perrone"
              className="w-[22rem] h-[26rem] object-cover rounded-3xl border border-border shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;