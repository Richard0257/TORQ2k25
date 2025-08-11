import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Officers from "@/components/Officers";
import Events from "@/components/Events";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Officers />
        <Events />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
