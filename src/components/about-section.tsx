const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-muted/20 py-20">
      <div className="max-w-7xl mx-auto px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-8 space-y-6 shadow-[0_8px_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.3)] cursor-pointer">
          <div className="space-y-6 text-base text-foreground leading-relaxed">
            <p>
              I am a Research Scientist with 3+ years of experience in machine learning applied to the medical field. 
              I currently work at Rush University Medical Center, where I develop machine learning models for medical 
              imaging and clinical text, particularly focused on low back pain. I approach this problem through 
              complementary AI-driven studies, including vision–language models for automated radiology report generation 
              from MRI, deep learning–based analysis of spine metabolism on PET-CT and biopsychosocial modeling of low 
              back pain from tabular data.
            </p>
            
            <p>
              Before joining Rush, I worked at Arcadia University, where I specialized in machine learning applied to hip 
              and knee biomechanics. In particular, I developed predictive deep-learning models for key time series motion
               analysis variables and designed an AI-based generative framework for producing synthetic motion analysis 
               data.
            </p>
            
            <p>
               I have a background in biomedical engineering and completed a dual Master’s Degree program in the same 
               field between the University of Illinois Chicago and Politecnico di Milano.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;