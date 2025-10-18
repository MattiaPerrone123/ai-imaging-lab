import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-muted/20 py-20">
      <div className="max-w-4xl mx-auto px-6">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Contact</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.3)] cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                sarah.chen@university.edu
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.3)] cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-600" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full border-blue-600 bg-blue-100 text-blue-600 hover:bg-blue-200">
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