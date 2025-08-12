import { Card, CardContent } from "@/components/ui/card";

const OfficeBearers = () => {
  const officeBearers = [
    {
      name: "Dr. Name",
      position: "Faculty Coordinator",
      image: "/placeholder-avatar.jpg", // Will be replaced with actual images
    },
    {
      name: "Student Name",
      position: "Student Coordinator",
      image: "/placeholder-avatar.jpg",
    },
    {
      name: "Student Name",
      position: "Technical Head",
      image: "/placeholder-avatar.jpg",
    },
    {
      name: "Student Name",
      position: "Event Coordinator",
      image: "/placeholder-avatar.jpg",
    },
    {
      name: "Student Name",
      position: "Public Relations",
      image: "/placeholder-avatar.jpg",
    },
    {
      name: "Student Name",
      position: "Treasurer",
      image: "/placeholder-avatar.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            OFFICE <span className="text-rainbow">BEARERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team behind TORQ2K25
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {officeBearers.map((bearer, index) => (
            <Card key={index} className="card-racing hover-nitro group overflow-hidden w-full max-w-sm">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300">
                    <span className="text-4xl font-bold text-primary-foreground">
                      {bearer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Position Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {bearer.position}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 tracking-wide">
                  {bearer.name}
                </h3>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                  {bearer.position}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeBearers;
