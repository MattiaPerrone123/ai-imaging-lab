import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Publications = () => {
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
    {
      title: "Real-Time Pneumonia Detection in CT Scans Using Edge Computing",
      journal: "Medical Image Analysis",
      year: "2022",
      authors: "Chen, S., Davis, M., Zhang, H.",
      doi: "10.1016/j.media.2022.102345",
      type: "Journal Article",
      citations: 89,
      abstract: "This work presents a lightweight deep learning model optimized for edge computing devices to enable real-time pneumonia detection in clinical settings..."
    },
    {
      title: "Transformer Networks for Medical Image Segmentation: A Comprehensive Review",
      journal: "Computer Vision and Pattern Recognition (CVPR)",
      year: "2022",
      authors: "Chen, S., Kumar, A., Brown, S.",
      doi: "10.1109/CVPR52688.2022.01234",
      type: "Conference Paper",
      citations: 301,
      abstract: "We provide a comprehensive review of transformer-based architectures for medical image segmentation, analyzing their performance across various medical imaging tasks..."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Publications</h1>
            <div className="w-16 h-1 bg-primary rounded"></div>
            <p className="text-lg text-muted-foreground">
              Peer-reviewed research contributions to medical AI and computer vision
            </p>
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">{pub.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <p className="font-medium text-foreground">{pub.journal}</p>
                        <p>{pub.authors}</p>
                        <p>{pub.year} • {pub.citations} citations</p>
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge variant="secondary">{pub.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      DOI: {pub.doi}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <Button variant="outline" size="lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Publication List on Google Scholar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Publications;