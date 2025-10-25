import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Github, GraduationCap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated Report Generation from Lumbar Spine MRI",
      description: "Fine-tuning vision-language models for automated generation of structured radiology reports from lumbar spine MRI",
      technologies: ["PyTorch", "Vision-Language Model", "LoRA Fine-Tuning"],
      features: [ 
        "Multiplanar analysis: sagittal and coronal T2-weighted MRI inputs",
        "Multitask learning: classification head to improve pathology detection",
        "Clinically-aware loss optimization to improve pathology prediction",
        "Poster presentation at ORS 2026"
      ],
      abstractUrl: `${import.meta.env.BASE_URL}MRI2Rep_abstract.pdf`,
      showOnlyAbstract: true,
    },
    {
      title: "Autoencoder-Based Representation of Lumbar Disc Geometry",
      description: "Learning latent representations of lumbar disc geometry from MRI with a 3D autoencoder to enable interpretable modeling and improved pathology prediction",
      technologies: ["PyTorch", "Autoencoder", "Segmentation", "DICOM"],
      features: [
        "Swin Transformer for disc segmentation",
        "Convolutional autoencoder for unsupervised feature extraction",
        "XGBoost classifier for disc pathology prediction",
        "Published in Annals of Biomedical Engineering"
      ],
      paperUrl: `${import.meta.env.BASE_URL}Autoencoder_paper.pdf`,
      codeUrl: "https://github.com/MattiaPerrone123/CNN-autoencoder-feature-extraction",
      abstractUrl: `${import.meta.env.BASE_URL}Autoencoder_abstract.pdf`,
    },
    {
      title: "Deep Learning Prediction of Wear in Knee Implants",
      description: "Leveraging a Transformer-CNN model to predict polyethylene wear patterns in total knee replacements from time series kinematic and kinetic gait data",
      technologies: ["PyTorch", "Transformer", "CNN", "NumPy"],
      features: [
        "Transformer encoder for feature extraction from gait time series",
        "CNN decoder for spatial reconstruction of polyethylene wear maps",
        "Quantitative evaluation of spatial fidelity via SSIM and NMI metrics",
        "Published in Annals of Biomedical Engineering"
      ],
      paperUrl: `${import.meta.env.BASE_URL}TKR_paper.pdf`,
      codeUrl: "https://github.com/MattiaPerrone123/Gait-to-Contact-G2C",
      abstractUrl: `${import.meta.env.BASE_URL}TKR_abstract.pdf`,
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}mri2rep.jpg`,
    `${import.meta.env.BASE_URL}autoencoder.jpeg`,
    `${import.meta.env.BASE_URL}tkr1.png`,
  ];

  return (
    <section id="projects" className="w-full bg-muted/20 py-20">
      <div className="max-w-7xl mx-auto px-8">
      <div className="space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-foreground">Research Projects</h2>
          <p className="text-muted-foreground text-lg">
            Overview of selected research projects at the intersection of machine learning, medical imaging and biomechanics
          </p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-6 md:gap-12 items-start p-4 md:p-12 rounded-2xl border-2 border-border/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.005] hover:border-border">
              <div className="aspect-[4/3] rounded-xl md:rounded-2xl border-4 border-blue-600/30 overflow-hidden group bg-blue-50 shadow-lg shadow-blue-600/20">
                <img
                  src={images[index]}
                  alt={`${project.title} visualization`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="tech" className="text-xs px-2.5 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Project Highlights</h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-base text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 pt-4 flex-wrap">
                  {project.showOnlyAbstract ? (
                    <Button size="sm" variant="outline" className="gap-2 text-sm px-4 h-9" asChild>
                      <a href={project.abstractUrl} target="_blank" rel="noopener noreferrer">
                        <GraduationCap className="w-4 h-4" />
                        Abstract
                      </a>
                    </Button>
                  ) : (
                    <>
                      <Button size="sm" variant="outline" className="gap-2 text-sm px-4 h-9" asChild>
                        <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" />
                          Paper
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2 text-sm px-4 h-9" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2 text-sm px-4 h-9" asChild>
                        <a href={project.abstractUrl} target="_blank" rel="noopener noreferrer">
                          <GraduationCap className="w-4 h-4" />
                          Abstract
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProjectsSection;