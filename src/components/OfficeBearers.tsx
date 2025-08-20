import { Card, CardContent } from "@/components/ui/card";
import aksayaImage from "@/assets/Akshaya.jpg";
import richardImage from "@/assets/Vice-President Richard Santhosh Jerry.jpeg";
import mamthaImage from "@/assets/mamtha.png";
import prithivImage from "@/assets/Prithiv.jpeg";
import noelImage from "@/assets/Noel.jpg";
import swathiImage from "@/assets/swathi.jpeg"; // Example


const OfficeBearers = () => {
  const officeBearers = [
    {
      name: "Akshaya S",
      position: "President",
      image: aksayaImage,
    },
    {
      name: "Richard Santhosh Jerry R",
      position: "Vice-President",
      image: richardImage,
    },
    {
      name: "Mamtha",
      position: "PRO",
      image: mamthaImage,
    },
    {
      name: "Prithiv",
      position: "Treasurer",
      image: prithivImage,
    },
    {
      name: "Noel Jhon P",
      position: "Publicity and Communication",
      image: noelImage,
    },
    {
      name: "Swathi G",
      position: "General Secretary",
      image: swathiImage,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            OFFICE <span className="text-rainbow">BEARERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Meet the dedicated team behind TORQ2K25
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start">
          {officeBearers.map((bearer, index) => (
            <Card key={index} className="card-racing hover-nitro group overflow-hidden w-full max-w-sm">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 overflow-hidden">
                    <img
                      src={bearer.image}
                      alt={bearer.name}
                      className="w-full h-full object-cover rounded-full"
                      style={{
                        objectPosition: 'center top',
                        minHeight: '100%',
                        minWidth: '100%',
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image for ${bearer.name}:`, e);
                      }}
                    />
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
