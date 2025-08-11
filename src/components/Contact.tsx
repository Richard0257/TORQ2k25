import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) NITRO-99",
      subInfo: "24/7 Racing Hotline",
      action: "tel:+15556487699",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "race@nitrodrive.events",
      subInfo: "Get racing info instantly",
      action: "mailto:race@nitrodrive.events",
    },
    {
      icon: MapPin,
      title: "Track Location",
      info: "Downtown Racing Circuit",
      subInfo: "123 Speed Street, Racing City",
      action: "#",
    },
    {
      icon: Clock,
      title: "Racing Hours",
      info: "Daily 8PM - 3AM",
      subInfo: "Weekend specials available",
      action: "#",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            GET IN <span className="text-neon">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join the racing family? Contact us for registration, 
            event details, or just to talk about your need for speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="card-racing hover-nitro group text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-primary font-semibold mb-2">
                    {contact.info}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {contact.subInfo}
                  </p>
                  
                  {contact.action !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(contact.action)}
                    >
                      Connect
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Join Our <span className="text-speed">Racing Family</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're a seasoned pro or just getting started, we welcome all racers 
                to our high-octane community. Get in touch to learn more about upcoming events, 
                registration requirements, and exclusive racing opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm">Professional racing instruction available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  <span className="text-sm">State-of-the-art racing facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm">24/7 technical support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  <span className="text-sm">Exclusive member benefits</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-8">
                <div className="text-6xl font-black text-neon mb-4 animate-speed-glow">
                  READY?
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  The racing community is waiting for you
                </p>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full btn-racing hover-nitro">
                  JOIN THE CREW
                </Button>
                <Button variant="outline" size="lg" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  SCHEDULE A VISIT
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t border-border/30 pt-8">
          <p className="text-muted-foreground text-sm">
            © 2024 Nitro Drive Events. All rights reserved. | 
            <span className="text-primary"> Live life a quarter mile at a time.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;