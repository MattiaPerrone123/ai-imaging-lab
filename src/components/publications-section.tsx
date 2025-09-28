import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for Automated Brain Tumor Segmentation in Multi-Modal MRI",
      journal: "Nature Machine Intelligence",
      year: "2024",
      authors: "Chen, S., Rodriguez, M., Kim, J., et al.",
      doi: "10.1038/s42256-024-00123-4",
      type: "Journal Article",
      citations: 127,
      abstract: "We present a novel deep learning framework for automated brain tumor segmentation that achieves state-of-the-art performance across multiple MRI modalities..."
    },
    {
      title: "AI-Driven Early Detection of Alzheimer's Disease Using PET Imaging: A Multi-Center Study",
      journal: "The Lancet Digital Health",
      year: "2023",
      authors: "Chen, S., Thompson, A., Lee, K., et al.",
      doi: "10.1016/S2589-7500(23)00034-2",
      type: "Journal Article",
      citations: 203,
      abstract: "This large-scale multi-center study demonstrates the potential of artificial intelligence in early Alzheimer's detection using PET scan analysis..."
    },
    {
      title: "Federated Learning for Medical Image Analysis: Privacy-Preserving AI in Healthcare",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2023",
      authors: "Wang, L., Chen, S., Patel, R., et al.",
      doi: "10.1109/TMI.2023.3245678",
      type: "Journal Article",
      citations: 156,
      abstract: "We propose a federated learning approach that enables collaborative AI model training while preserving patient privacy across multiple medical institutions..."
    },
  ];

  return (
    <section id="publications" className="max-w-4xl mx-auto px-8 py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Publications</h2>
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="border-b border-border pb-8 last:border-b-0">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-3">
                    {pub.title}
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{pub.authors}</p>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-teal text-white">{pub.journal}</Badge>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pub.abstract}
                </p>
                
                <div className="text-xs text-muted-foreground">
                  DOI: {pub.doi}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Paper
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

export default PublicationsSection;