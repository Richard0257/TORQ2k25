import { Button } from "@/components/ui/button";
import bgImage from "@/assets/ferrari-bg.jpg";
import logo from "@/assets/logo.png"; // 🔥 Transparent PNG logo

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl space-y-6">
        {/* Department Text */}
        <p className="text-lg md:text-2xl font-semibold text-gold tracking-widest uppercase mb-4 drop-shadow-md">
          Department of Mechanical Engineering
        </p>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="TORQ 2K25 Logo"
            className="h-40 md:h-56 object-contain mx-auto mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-primary drop-shadow-lg">
          TORQ <span className="text-gold">2K25</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-medium drop-shadow-md">
          Experience the <span className="text-primary">adrenaline</span> of
          <span className="text-gold"> high-octane racing</span> —  
          Where passion meets <span className="text-foreground">speed</span>.
        </p>

        {/* Join Button */}
        <div className="flex justify-center mt-6">
          <Button className="btn-nitro animate-pulse px-8 py-4 rounded-xl text-lg">
            Join the Race
          </Button>
        </div>
      </div>

      {/* Event Details */}
      <div className="absolute bottom-6 w-full flex justify-center px-4">
        <div className="card-racing p-4 md:p-6 max-w-lg text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gold">Event Details</h2>
          <p className="text-muted-foreground mt-2">
            <span className="text-primary">23 August 2025</span> • Loyola ICAM College of Engineering & Technology
          </p>
          <p className="text-muted-foreground">
            10:00 AM – 4:00 PM • Free Entry with Registration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
