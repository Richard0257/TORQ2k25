import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // Transparent PNG logo
import JADE from "@/assets/JADE.png";
import soft from "@/assets/soft.jpg";
import suziki from "@/assets/suziki.jpg";
import esiko from "@/assets/esiko.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6">
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

        {/* Sponsorship Showcase - Below title */}
        <div className="mt-8 md:mt-12 animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-lg p-4 md:p-8 rounded-xl md:rounded-2xl shadow-2xl max-w-4xl md:max-w-5xl mx-auto border border-gray-200 hover:bg-white transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.1)]">
            <p className="text-gray-800 text-sm md:text-base mb-4 md:mb-6 uppercase tracking-wider font-bold">Proudly Sponsored By</p>
            <div className="flex items-center justify-center space-x-6 md:space-x-12 opacity-100">
              <div className="w-16 h-16 md:w-20 md:h-20 hover:scale-125 transition-transform duration-300 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-white rounded-lg p-2 shadow-sm">
                <img src={JADE} alt="JADE" className="w-full h-full object-contain" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 hover:scale-125 transition-transform duration-300 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-white rounded-lg p-2 shadow-sm">
                <img src={soft} alt="Soft" className="w-full h-full object-contain" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 hover:scale-125 transition-transform duration-300 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-white rounded-lg p-2 shadow-sm">
                <img src={suziki} alt="Suziki" className="w-full h-full object-contain" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 hover:scale-125 transition-transform duration-300 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-white rounded-lg p-2 shadow-sm">
                <img src={esiko} alt="Esiko" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
       
      </div>
    </section>
  );
};

export default Hero;
