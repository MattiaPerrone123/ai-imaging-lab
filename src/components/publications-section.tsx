import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Github, Calendar, GraduationCap } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "A CNN Autoencoder for Learning Latent Disc Geometry from Segmented Lumbar Spine MRI",
      journal: "Annals of Biomedical Engineering",
      year: "2025",
      authors: "Perrone M., Moore D., Ukeba D., Martin J.",
      keywords: ["Convolutional neural networks", "Autoencoder", "Latent feature extraction", "MRI segmentation"],
      type: "Journal Article",
      citations: 127,
      abstract: "We present a novel deep learning framework for automated brain tumor segmentation that achieves state-of-the-art performance across multiple MRI modalities...",
      paperUrl: `${import.meta.env.BASE_URL}Autoencoder_paper.pdf`,
      codeUrl: "https://github.com/MattiaPerrone123/CNN-autoencoder-feature-extraction"
    },
    {
      title: "Gait-to-Contact (G2C): A Novel Deep Learning Framework to Predict Total Knee Replacement Wear from Gait Patterns",
      journal: "Annals of Biomedical Engineering",
      year: "2025",
      authors: "Perrone M., Simmons S., Malloy P., Karas V., Yuh C., Martin J., Mell S.",
      keywords: ["Deep learning", "Transformers", "Total knee replacement", "Wear prediction", "Finite element analysis"],
      type: "Journal Article",
      citations: 203,
      abstract: "This large-scale multi-center study demonstrates the potential of artificial intelligence in early Alzheimer's detection using PET scan analysis...",
      paperUrl: `${import.meta.env.BASE_URL}TKR_paper.pdf`,
      codeUrl: "https://github.com/MattiaPerrone123/Gait-to-Contact-G2C"
    },
    {
      title: "Synthetic data generation in motion analysis: A generative deep learning framework",
      journal: "Journal of Engineering in Medicine",
      year: "2025",
      authors: "Perrone M., Mell S., Martin J., Nho S., Simmons S., Malloy P.",
      keywords: ["Generative deep learning", "Variational autoencoder", "Motion analysis", "Musculoskeletal modeling"],
      type: "Journal Article",
      citations: 156,
      abstract: "We propose a federated learning approach that enables collaborative AI model training while preserving patient privacy across multiple medical institutions...",
      paperUrl: `${import.meta.env.BASE_URL}Synthetic_paper.pdf`
    },
    {
      title: "Machine learning-based prediction of hip joint moment in healthy subjects, patients and post-operative subjects",
      journal: "Computer Methods in Biomechanics and Biomedical Engineering",
      year: "2024",
      authors: "Perrone M., Mell S., Martin J., Nho S., Malloy P.",
      keywords: ["Machine learning", "Hip joint moment", "Long short-term memory model", "Motion analysis"],
      type: "Journal Article",
      citations: 89,
      abstract: "This work explores the application of convolutional neural networks for classifying various medical imaging modalities with high accuracy...",
      paperUrl: `${import.meta.env.BASE_URL}HJM_paper.pdf`,
      codeUrl: "https://github.com/MattiaPerrone123/Deep_Learning_For_HJM_Prediction"
    },
  ];

  return (
    <section id="publications" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Publications</h2>
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => {
            const firstAuthor = pub.authors.split(',')[0];
            const restAuthors = pub.authors.substring(firstAuthor.length);
            
            return (
              <div key={index} className="p-6 md:p-8 rounded-2xl border-2 border-border/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.005] hover:border-border">
                <div className="space-y-4 relative">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground leading-tight mb-3">
                      {pub.title}
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>
                        <span className="underline">{firstAuthor}</span>{restAuthors}
                      </p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="tech" className="text-xs px-2.5 py-0.5">{pub.journal}</Badge>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="text-base text-muted-foreground">
                      <span className="font-semibold">Keywords:</span> {pub.keywords.join(', ')}
                    </div>
                    
                    <div className="flex gap-3">
                      {pub.codeUrl && (
                        <Button size="sm" variant="outline" className="gap-2" asChild>
                          <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {pub.paperUrl && (
                        <Button size="sm" variant="outline" className="gap-2" asChild>
                          <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="w-4 h-4" />
                            Paper
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            size="lg" 
            className="bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 hover:shadow-[0_8px_20px_-4px_rgba(59,130,246,0.5)] transition-all duration-300 gap-2"
            asChild
          >
            <a href="https://scholar.google.com/citations?user=kqPVfW8AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
              <GraduationCap className="w-5 h-5" />
              View all publications on Google Scholar
            </a>
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PublicationsSection;