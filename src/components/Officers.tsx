import officer1 from "@/assets/officer-1.jpg";
import officer2 from "@/assets/officer-2.jpg";
import officer3 from "@/assets/officer-3.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Officers = () => {
  const officers = [
    {
      name: "Dominic Torreto",
      position: "Team Leader",
      image: officer1,
    },
    {
      name: "Letty Ortiz",
      position: "Chief Mechanic",
      image: officer2,
    },
    {
      name: "Roman Pearce",
      position: "Racing Director",
      image: officer3,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            MEET THE <span className="text-neon">CREW</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The adrenaline-fueled team behind Nitro Drive Events. 
            We live our lives a quarter mile at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <Card key={index} className="card-racing hover-nitro group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Officer Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 tracking-wide">
                      {officer.name}
                    </h3>
                    <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                      {officer.position}
                    </p>
                  </div>

                  {/* Racing Number Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-black text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-black text-speed mb-2">15+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-neon mb-2">300+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Races Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-speed mb-2">50+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-neon mb-2">24/7</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Racing Spirit</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officers;