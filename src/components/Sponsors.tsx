import { Card, CardContent } from "@/components/ui/card";
import JADE from "@/assets/JADE.png";
import soft from "@/assets/soft.jpg";
import suziki from "@/assets/suziki.jpg";
import esiko from "@/assets/esiko.png";

const Sponsors = () => {
  const sponsors = [
    {
      name: "JADE",
      logo: JADE,
      tier: "platinum",
      description: "Official Automotive Partner"
    },
    {
      name: "Soft",
      logo: soft, 
      tier: "gold",
      description: "Technology Solutions Partner"
    },
    {
      name: "Suziki",
      logo: suziki,
      tier: "silver", 
      description: "Performance Engineering Partner"
    },
    {
      name: "Esiko",
      logo: esiko,
      tier: "bronze",
      description: "Innovation Partner"
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "sponsor-platinum";
      case "gold":
        return "sponsor-gold";
      case "silver":
        return "sponsor-silver";
      case "bronze":
        return "sponsor-bronze";
      default:
        return "sponsor-platinum";
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      case "gold":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "silver":
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      case "bronze":
        return "bg-gradient-to-r from-amber-500 to-amber-700 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-wider">
            <span className="text-purple text-glow">OUR</span>{" "}
            <span className="text-pink text-glow">SPONSORS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proudly supported by industry leaders who share our passion for innovation and excellence.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <Card 
              key={index} 
              className={`card-racing hover-nitro group overflow-hidden ${getTierColor(sponsor.tier)} hover:scale-105 transition-transform duration-300`}
            >
              <CardContent className="p-4 sm:p-6 text-center">
                {/* Tier Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getTierBadge(sponsor.tier)}`}>
                  {sponsor.tier.toUpperCase()}
                </div>
                
                {/* Logo */}
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Sponsor Name */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {sponsor.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {sponsor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Interested in becoming a sponsor? Let's discuss partnership opportunities.
          </p>
          <button 
            className="btn-nitro hover-nitro text-lg px-8 py-4"
            onClick={() => {
              // You can customize this to open a contact form or redirect to a sponsorship page
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            BECOME A SPONSOR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
