import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-muted/20 py-20">
      <div className="max-w-4xl mx-auto px-6">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground">Contact</h2>
          <div className="w-16 h-1 bg-primary rounded"></div>
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
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;