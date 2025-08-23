import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Officers from "@/components/Officers";
import Events from "@/components/Events";
import OfficeBearers from "@/components/OfficeBearers";
import Contact from "@/components/Contact";
import mclarenVideo from "@/assets/mclaren-f1.mp4";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Full Website Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={mclarenVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for entire website */}
      <div className="fixed inset-0 bg-black/30 z-[-1]" />

      <Navbar />
      <main>
        <Hero />
        <Officers />
        <Events />
        <OfficeBearers />
        <Contact id="contact" />
      </main>
    </div>
  );
};

export default Index;
