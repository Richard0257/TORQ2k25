import { Card, CardContent } from "@/components/ui/card";

const Officers = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            ABOUT <span className="text-neon">TORQ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The flagship annual technical symposium of LICET's Mechanical Engineering department
          </p>
        </div>

        {/* TORQ History */}
        <div className="mb-16">
          <Card className="card-racing">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-wide">
                TORQ <span className="text-neon">History</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TORQ began as a small initiative by the Department of Mechanical Engineering at Loyola-ICAM College of Engineering and Technology (LICET) to encourage innovation beyond academics. Over the years, it has grown into a premier technical symposium, attracting participants from various institutions. Each edition introduces fresh events, industry collaborations, and emerging technologies, making TORQ a hub for creativity, learning, and teamwork.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About TORQ */}
        <div className="mb-16">
          <Card className="card-racing">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-wide">
                About <span className="text-speed">TORQ</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TORQ is the flagship annual technical symposium of LICET's Mechanical Engineering department. It brings together students, faculty, and industry experts through technical competitions, workshops, project exhibitions, and guest lectures—offering a space to exchange ideas, showcase talent, and address real-world engineering challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-racing">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-wide">
                <span className="text-neon">Vision</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To inspire young engineers to innovate, collaborate, and create solutions for a sustainable future.
              </p>
            </CardContent>
          </Card>

          <Card className="card-racing">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-wide">
                <span className="text-speed">Mission</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a platform for skill development, industry interaction, and technical innovation, while fostering teamwork, creativity, and practical problem-solving.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Officers;