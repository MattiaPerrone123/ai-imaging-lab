import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered MRI Tumor Detection",
      description: "Deep learning system for automated brain tumor detection and segmentation in MRI scans",
      technologies: ["PyTorch", "U-Net", "DICOM", "Python"],
      features: [
        "99.2% accuracy in tumor detection",
        "Real-time processing capabilities",
        "Integration with hospital PACS systems",
        "FDA approval pathway initiated"
      ],
    },
    {
      title: "CT Scan Pneumonia Classifier",
      description: "Computer vision model for rapid pneumonia diagnosis from chest CT scans",
      technologies: ["TensorFlow", "ResNet", "CUDA", "Docker"],
      features: [
        "94% sensitivity for pneumonia detection",
        "Reduces diagnosis time by 70%",
        "Multi-language support",
        "Cloud-based deployment"
      ],
    },
    {
      title: "PET Scan Alzheimer's Predictor",
      description: "Early-stage Alzheimer's detection using PET scan analysis and machine learning",
      technologies: ["Scikit-learn", "OpenCV", "NumPy", "Flask"],
      features: [
        "85% accuracy in early detection",
        "5-year progression prediction",
        "Biomarker correlation analysis",
        "Clinical trial integration"
      ],
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Research Projects</h2>
          <p className="text-muted-foreground">
            Developing AI solutions that translate cutting-edge research into clinical impact
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl border border-border relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ExternalLink className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm">Project Visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title.replace("AI-Powered ", "").replace("CT Scan ", "").replace("PET Scan ", "")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Paper
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
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