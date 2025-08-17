import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Officers from "@/components/Officers";
import Events from "@/components/Events";
import OfficeBearers from "@/components/OfficeBearers";
import Contact from "@/components/Contact";
import Rulebook from "@/components/Rulebook";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Officers />
        <Events />
        <Rulebook id="rulebook" />
        <OfficeBearers />
        <Contact id="contact" />
      </main>
    </div>
  );
};

export default Index;
