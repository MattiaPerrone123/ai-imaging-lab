import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, MapPin } from "lucide-react";

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
      type: "Education", 
      title: "Postdoctoral Fellowship",
      organization: "Politecnico di Milano",
      location: "Milan, Italy",
      description: "Pioneered novel approaches to multi-modal medical image fusion for cancer diagnosis. Key achievements:",
      achievements: [
        "Published in Nature Machine Intelligence on multi-modal fusion techniques"
      ],
      icon: GraduationCap,
      color: "bg-teal"
    }
  ];

  return (
    <section id="professional-journey" className="w-full py-20">
      <div className="max-w-4xl mx-auto px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
          <p className="text-muted-foreground">Key milestones in my academic and professional career</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="relative flex items-start gap-8">
                  <div className={`${milestone.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">{milestone.type}</Badge>
                      <span className="text-sm text-muted-foreground">{milestone.year}</span>
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
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {milestone.description}
                    </p>
                    
                    {milestone.achievements && (
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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