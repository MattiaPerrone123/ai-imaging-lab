import Navigation from "@/components/ui/navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">About</h1>
            <div className="w-16 h-1 bg-primary rounded"></div>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a Computer Vision Researcher and Biomedical Engineer with over 8 years of experience 
              developing AI solutions for medical imaging applications. My work focuses on creating 
              innovative algorithms that can assist healthcare professionals in early disease detection 
              and precision treatment planning.
            </p>
            
            <p>
              My research primarily involves the analysis of medical imaging data from MRI, CT, and PET 
              scans, with particular expertise in deep learning architectures for image segmentation, 
              classification, and anomaly detection. I have published extensively in top-tier conferences 
              and journals, and my work has been implemented in clinical settings.
            </p>
            
            <p>
              Currently, I lead a research team developing next-generation AI tools for radiology 
              departments, with a focus on improving diagnostic accuracy while reducing analysis time. 
              I am particularly passionate about making advanced AI accessible to healthcare providers 
              in underserved communities.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6 mt-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Education</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">Ph.D. in Biomedical Engineering</p>
                  <p className="text-muted-foreground">Stanford University, 2018</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">M.S. in Computer Science</p>
                  <p className="text-muted-foreground">MIT, 2014</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">B.S. in Electrical Engineering</p>
                  <p className="text-muted-foreground">UC Berkeley, 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;