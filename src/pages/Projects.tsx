import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered MRI Tumor Detection",
      description: "Deep learning system for automated brain tumor detection and segmentation in MRI scans",
      image: "/api/placeholder/400/250",
      technologies: ["PyTorch", "U-Net", "DICOM", "Python"],
      features: [
        "99.2% accuracy in tumor detection",
        "Real-time processing capabilities",
        "Integration with hospital PACS systems",
        "FDA approval pathway initiated"
      ],
      github: "https://github.com/sarahchen/mri-tumor-detection",
      demo: "https://demo.mri-ai.com"
    },
    {
      title: "CT Scan Pneumonia Classifier",
      description: "Computer vision model for rapid pneumonia diagnosis from chest CT scans",
      image: "/api/placeholder/400/250",
      technologies: ["TensorFlow", "ResNet", "CUDA", "Docker"],
      features: [
        "94% sensitivity for pneumonia detection",
        "Reduces diagnosis time by 70%",
        "Multi-language support",
        "Cloud-based deployment"
      ],
      github: "https://github.com/sarahchen/ct-pneumonia",
      demo: "https://ct-classifier.healthcare.ai"
    },
    {
      title: "PET Scan Alzheimer's Predictor",
      description: "Early-stage Alzheimer's detection using PET scan analysis and machine learning",
      image: "/api/placeholder/400/250",
      technologies: ["Scikit-learn", "OpenCV", "NumPy", "Flask"],
      features: [
        "85% accuracy in early detection",
        "5-year progression prediction",
        "Biomarker correlation analysis",
        "Clinical trial integration"
      ],
      github: "https://github.com/sarahchen/pet-alzheimers",
      demo: "https://alzheimers-predictor.med-ai.org"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Projects</h1>
            <div className="w-16 h-1 bg-primary rounded"></div>
            <p className="text-lg text-muted-foreground">
              Innovative AI solutions for medical imaging and healthcare applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Project Image
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;