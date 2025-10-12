import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building, GraduationCap, MapPin, Calendar, Briefcase, Award } from "lucide-react";

const ProfessionalJourney = () => {
  const milestones = [
    {
      year: "2021",
      type: "Career",
      title: "Principal Research Scientist",
      organization: "Stanford Medical AI Lab",
      location: "Stanford, CA",
      description: "Leading interdisciplinary teams developing FDA-approved algorithms for automated radiology screening",
      icon: Building,
      color: "bg-primary"
    },
    {
      year: "2020",
      type: "Career", 
      title: "Senior Research Engineer",
      organization: "Google Health AI",
      location: "Mountain View, CA",
      description: "Developed deep learning models for early disease detection in medical imaging",
      icon: Briefcase,
      color: "bg-primary"
    },
    {
      year: "2018",
      type: "Education",
      title: "Postdoctoral Fellowship",
      organization: "Politecnico di Milano",
      location: "Milan, Italy",
      description: "Pioneered novel approaches to multi-modal medical image fusion for cancer diagnosis",
      icon: GraduationCap,
      color: "bg-accent"
    },
    {
      year: "2016",
      type: "Education",
      title: "Ph.D. in Biomedical Engineering",
      organization: "MIT",
      location: "Cambridge, MA",
      description: "Thesis on advanced computer vision techniques for automated diagnosis systems",
      icon: GraduationCap,
      color: "bg-accent"
    },
    {
      year: "2014",
      type: "Education",
      title: "Research Scientist",
      organization: "Johns Hopkins Medical Center",
      location: "Baltimore, MD",
      description: "Pioneered AI-driven approaches to medical image analysis and interpretation",
      icon: Award,
      color: "bg-accent"
    }
  ];

  return (
    <section id="professional-journey" className="w-full py-20">
      <div className="max-w-4xl mx-auto px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="relative flex items-start gap-8 group">
                  <div className="relative">
                    <div className={`${milestone.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-background border-2 border-border rounded-full"></div>
                    </div>
                  </div>
                  
                  <Card className="flex-1 p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.3)] cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="secondary" 
                        className={`${milestone.type === 'Career' ? 'bg-blue-500/90 text-white hover:bg-blue-600' : 'bg-accent/20 text-accent-foreground hover:bg-accent/30'} transition-colors duration-200`}
                      >
                        {milestone.type}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{milestone.year}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {milestone.organization}
                    </p>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      {milestone.location}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;