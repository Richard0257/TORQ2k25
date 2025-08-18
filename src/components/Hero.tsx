import { Button } from "@/components/ui/button";
import bgImage from "@/assets/ferrari-bg.jpg";
import logo from "@/assets/logo.png"; // Transparent PNG logo

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl space-y-6 animate-fadeIn">
        
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="TORQ 2K25 Logo"
            className="max-h-32 md:max-h-44 lg:max-h-52 w-auto object-contain mx-auto mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
          />
        </div>

        {/* Department Title */}
        <h2 className="text-xl md:text-3xl font-bold text-yellow-400 uppercase tracking-widest drop-shadow-md">
          Department of Mechanical Engineering
        </h2>

        {/* TORQ Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 drop-shadow-lg">
          TORQ <span className="text-yellow-400">2K25</span>
        </h1>

        {/* CTA Button */}
       
      </div>

      {/* Event Details (Smaller Card) */}
      <div className="absolute bottom-6 w-full flex justify-center px-4">
        <div className="bg-black/60 backdrop-blur-md p-3 md:p-4 rounded-l shadow-md max-w-md text-center">
          <h2 className="text-lg md:text-xl font-bold text-yellow-400">
            Event Details
          </h2>
          <p className="text-gray-300 mt-1 text-sm md:text-base">
            <span className="text-red-500">23 August 2025</span> • Loyola ICAM
            College of Engineering & Technology
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            10:00 AM – 4:00 PM • Free Entry with Registration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
