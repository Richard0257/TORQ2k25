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
        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-wider leading-tight">
          <span className="text-neon animate-speed-glow">NITRO</span>{" "}
          <span className="text-speed">DRIVE</span>{" "}
          <span className="text-foreground">EVENTS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the ultimate adrenaline rush with high-octane racing events.
          <span className="block mt-2 text-primary font-semibold">
            Live life a quarter mile at a time.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToEvents}
            size="lg"
            className="btn-racing text-lg px-8 py-6 hover-nitro animate-nitro-pulse"
          >
            JOIN THE RACE
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 hover-speed"
          >
            WATCH TRAILER
          </Button>
        </div>

        {/* Racing Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-neon mb-2">250+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">MPH TOP SPEED</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-speed mb-2">11</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">RACING EVENTS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-neon mb-2">500+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">RACERS</div>
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