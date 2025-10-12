const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-muted/20 py-20">
      <div className="max-w-4xl mx-auto px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-8 space-y-6 shadow-[0_8px_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.3)] cursor-pointer">
          <div className="space-y-6 text-base text-foreground leading-relaxed">
            <p>
              I am a Computer Vision Researcher and Biomedical Engineer with over 8 years of experience 
              developing AI solutions for medical imaging. My work focuses on creating intelligent systems that can 
              assist clinicians in early disease detection and precision treatment planning.
            </p>
            
            <p>
              Currently serving as Principal Research Scientist at Stanford Medical AI Lab, I lead interdisciplinary 
              teams developing FDA-approved algorithms for automated radiology screening. My research has been 
              published in Nature Medicine, MICCAI, and IEEE Transactions on Medical Imaging.
            </p>
            
            <p>
              I hold a Ph.D. in Biomedical Engineering from MIT and completed my postdoctoral fellowship at Johns 
              Hopkins, where I pioneered novel approaches to multi-modal medical image fusion for cancer 
              diagnosis.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;