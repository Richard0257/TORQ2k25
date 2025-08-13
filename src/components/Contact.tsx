import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 63743 93335",
    },
    {
      icon: MapPin,
      title: "Track Location",
      info: "Loyola College Licet, Loyola Campus, Nungambakkam, Chennai, Tamil Nadu 600034",
      link: "https://www.google.com/maps?q=Loyola+College+Licet,+Loyola+Campus,+Nungambakkam,+Chennai,+Tamil+Nadu+600034",
    },
    {
      icon: Clock,
      title: "Racing Hours",
      info: "8AM - 4PM",
      subInfo: "Weekend specials available",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="card-racing hover-nitro group text-center h-full">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
              <CardTitle className="text-lg font-bold text-foreground">
                {contact.title}
              </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold mb-2 inline-block underline underline-offset-4 hover:text-primary/80"
                >
                  {contact.info}
                </a>
              ) : (
                <p className="text-primary font-semibold mb-2">
                  {contact.info}
                </p>
              )}
                  {contact.subInfo && (
                    <p className="text-sm text-muted-foreground">
                      {contact.subInfo}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t border-border/30 pt-8">
          <p className="text-muted-foreground text-sm">
            © 2025 TORQ2K25. All rights reserved. | 
            <span className="text-primary"> Live life a quarter mile at a time.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;