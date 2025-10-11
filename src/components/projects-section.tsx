import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BrainNet: Automated Brain Tumor Detection",
      description: "Deep learning framework for real-time brain tumor segmentation and classification in MRI scans with 97% accuracy.",
      technologies: ["PyTorch", "3D U-Net", "DICOM", "Python"],
      features: [
        "FDA breakthrough device designation",
        "Deployed in 12+ hospitals",
        "Reduces radiologist reading time by 60%",
        "Published in Nature Medicine"
      ],
    },
    {
      title: "LungAI: CT Pneumonia Detection System",
      description: "Computer vision model for rapid pneumonia diagnosis from chest CT scans with clinical validation.",
      technologies: ["TensorFlow", "ResNet-50", "CUDA", "Docker"],
      features: [
        "94% sensitivity, 92% specificity",
        "Processes scans in under 30 seconds",
        "Integrated with 5 major hospital networks",
        "CE Mark certified for European use"
      ],
    },
    {
      title: "AlzheimerPredict: Early Detection Platform",
      description: "PET scan analysis platform using deep learning for early-stage Alzheimer's detection and progression modeling.",
      technologies: ["PyTorch", "3D CNN", "NumPy", "Flask"],
      features: [
        "Predicts progression 3-5 years in advance",
        "85% accuracy in early detection",
        "Biomarker correlation with CSF analysis",
        "Active in 3 clinical trials"
      ],
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
      <div className="space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-foreground">Research Projects</h2>
          <p className="text-muted-foreground text-lg">
            Developing AI solutions that translate cutting-edge research into clinical impact
          </p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-[1fr,1.2fr] gap-12 items-start p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-border">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-border overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground transition-transform duration-500 ease-out group-hover:scale-110">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ExternalLink className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-sm font-medium">Project Visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="tech" className="text-xs px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Key Achievements</h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Paper
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;