import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Contact</h1>
            <div className="w-16 h-1 bg-primary rounded"></div>
            <p className="text-lg text-muted-foreground">
              Let's collaborate on advancing AI in healthcare
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For research collaborations, speaking engagements, or general inquiries
                </p>
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  sarah.chen@university.edu
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-teal" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Connect with me for professional networking and industry insights
                </p>
                <Button variant="teal" className="w-full">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stanford University<br />
                  Department of Biomedical Engineering<br />
                  Stanford, CA 94305
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tuesdays & Thursdays<br />
                  2:00 PM - 4:00 PM PST<br />
                  By appointment only
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Research Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Current Focus Areas</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• AI-powered medical imaging analysis</li>
                    <li>• Early disease detection algorithms</li>
                    <li>• Federated learning in healthcare</li>
                    <li>• Clinical AI implementation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Collaboration Opportunities</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Joint research projects</li>
                    <li>• Industry partnerships</li>
                    <li>• Graduate student mentoring</li>
                    <li>• Conference speaking</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;