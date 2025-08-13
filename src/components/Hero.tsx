import heroBackground from "@/assets/hero-background.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToEvents = () => {
    const element = document.querySelector("#events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Racing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TORQ Logo */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-silver-400 to-silver-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <div className="text-3xl font-black text-gray-800 mb-1">TORQ</div>
              <div className="text-xl font-bold text-gray-700">2K25</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider leading-tight">
          <span className="text-fire text-glow">TORQ</span>{" "}
          <span className="text-electric text-glow">2K25</span>{" "}
          <span className="text-gold text-glow">EVENTS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the ultimate adrenaline rush with high-octane racing events.
          <span className="block mt-2 text-primary font-semibold">
            Live life a quarter mile at a time.
          </span>
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Button
            onClick={scrollToEvents}
            size="lg"
            className="btn-racing text-lg px-8 py-6 hover-nitro animate-nitro-pulse"
          >
            JOIN THE RACE
          </Button>
          
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-yellow-400 animate-pulse">
              Registration starts at 8:00 AM No on-spot registration
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;