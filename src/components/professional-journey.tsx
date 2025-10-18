import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building, GraduationCap, MapPin, Calendar, Briefcase, Award } from "lucide-react";

const ProfessionalJourney = () => {
  const milestones = [
    {
      year: "2023-Now",
      type: "Career",
      title: "Research Scientist",
      organization: "Rush University Medical Center",
      location: "Chicago, IL",
      description: "Leading interdisciplinary teams developing FDA-approved algorithms for automated radiology screening. Key achievements:",
      achievements: [
        "Developed 3 FDA-approved AI algorithms for chest X-ray screening",
        "Published 15+ papers in top-tier medical imaging journals",
        "Led team of 12 researchers across multiple institutions"
      ],
      icon: Building,
      color: "bg-primary",
      bigCircleImage: `${import.meta.env.BASE_URL}icon/rush.png`
    },
    {
      year: "2022-2023",
      type: "Career", 
      title: "Research Assistant",
      organization: "Arcadia University",
      location: "Glenside, PA",
      description: "Developed deep learning models for early disease detection in medical imaging. Key achievements:",
      achievements: [
        "Created novel architectures for multi-task learning in medical imaging",
        "Achieved 95%+ accuracy in early lung cancer detection",
        "Collaborated with 50+ hospitals worldwide for data collection"
      ],
      icon: Briefcase,
      color: "bg-primary",
      bigCircleImage: `${import.meta.env.BASE_URL}icon/arcadia.png`
    },
    {
      year: "2021-2022",
      type: "Education",
      title: "MS in Biomedical Engineering",
      organization: "University Of Illinois Chicago",
      location: "Chicago, IL",
      description: "Pioneered novel approaches to multi-modal medical image fusion for cancer diagnosis. Key achievements:",
      achievements: [
        "Published in Nature Machine Intelligence on multi-modal fusion techniques",
        "Presented at MICCAI 2020 - received best poster award",
        "3 first-author publications in top-tier journals"
      ],
      icon: GraduationCap,
      color: "bg-cyan-500",
      bigCircleImage: `${import.meta.env.BASE_URL}icon/uic.png`
    },
    {
      year: "2020-2022",
      type: "Education",
      title: "MS in Biomedical Engineering",
      organization: "Politecnico di Milano",
      location: "Cambridge, MA",
      description: "Thesis on advanced computer vision techniques for automated diagnosis systems",
      icon: GraduationCap,
      color: "bg-cyan-500",
      bigCircleImage: `${import.meta.env.BASE_URL}icon/polimi.jpeg`
    },
    {
      year: "2017-2020",
      type: "Education",
      title: "BS in Biomedical Engineering",
      organization: "Politecnico di Milano",
      location: "Milan, Italy",
      description: "Pioneered AI-driven approaches to medical image analysis and interpretation",
      icon: Award,
      color: "bg-cyan-500",
      bigCircleImage: `${import.meta.env.BASE_URL}icon/polimi.jpeg`
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
                    <div className={`${milestone.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl overflow-hidden border-2 border-black`}>
                      {milestone.bigCircleImage ? (
                        <img src={milestone.bigCircleImage} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <IconComponent className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                  
                  <Card className="flex-1 p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.3)] cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="secondary" 
                        className={`${milestone.type === 'Career' ? 'bg-blue-500/90 text-white hover:bg-blue-600' : 'bg-cyan-400/90 text-white hover:bg-cyan-500'} transition-colors duration-200`}
                      >
                        {milestone.type}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{milestone.year}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <p className="text-primary font-medium">
                        {milestone.organization}
                      </p>
                      <span className="text-muted-foreground hidden sm:inline">•</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{milestone.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      {milestone.description}
                    </p>
                    
                    {milestone.achievements && (
                      <ul className="space-y-1.5 mt-3">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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