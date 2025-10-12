import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for Automated Brain Tumor Segmentation in Multi-Modal MRI",
      journal: "Nature Machine Intelligence",
      year: "2024",
      authors: "Chen, S., Rodriguez, M., Kim, J., et al.",
      keywords: ["Deep Learning", "Medical Imaging", "Brain Tumor", "MRI Segmentation"],
      type: "Journal Article",
      citations: 127,
      abstract: "We present a novel deep learning framework for automated brain tumor segmentation that achieves state-of-the-art performance across multiple MRI modalities..."
    },
    {
      title: "AI-Driven Early Detection of Alzheimer's Disease Using PET Imaging: A Multi-Center Study",
      journal: "The Lancet Digital Health",
      year: "2023",
      authors: "Chen, S., Thompson, A., Lee, K., et al.",
      keywords: ["Artificial Intelligence", "Alzheimer's Disease", "PET Imaging", "Early Detection"],
      type: "Journal Article",
      citations: 203,
      abstract: "This large-scale multi-center study demonstrates the potential of artificial intelligence in early Alzheimer's detection using PET scan analysis..."
    },
    {
      title: "Federated Learning for Medical Image Analysis: Privacy-Preserving AI in Healthcare",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2023",
      authors: "Wang, L., Chen, S., Patel, R., et al.",
      keywords: ["Federated Learning", "Privacy", "Medical AI", "Healthcare"],
      type: "Journal Article",
      citations: 156,
      abstract: "We propose a federated learning approach that enables collaborative AI model training while preserving patient privacy across multiple medical institutions..."
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
                      <Button size="sm" variant="outline" className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Paper
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default PublicationsSection;