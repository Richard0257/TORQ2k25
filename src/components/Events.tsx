import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Night Street Racing Championship",
      date: "March 15, 2024",
      time: "10:00 PM",
      location: "Downtown Circuit",
      participants: "50+ Racers",
      image: event1,
      price: "$150",
      category: "Street Racing",
    },
    {
      id: 2,
      title: "Drift Masters Tournament",
      date: "March 22, 2024",
      time: "8:00 PM",
      location: "Industrial Zone",
      participants: "30+ Drifters",
      image: event2,
      price: "$200",
      category: "Drift Racing",
    },
    {
      id: 3,
      title: "Quarter Mile Thunder",
      date: "March 29, 2024",
      time: "9:00 PM",
      location: "Airport Strip",
      participants: "40+ Speed Demons",
      image: event1,
      price: "$175",
      category: "Drag Racing",
    },
    {
      id: 4,
      title: "Midnight Pursuit Challenge",
      date: "April 5, 2024",
      time: "11:00 PM",
      location: "Highway Circuit",
      participants: "60+ Drivers",
      image: event2,
      price: "$180",
      category: "Pursuit Racing",
    },
    {
      id: 5,
      title: "Turbo Boost Showdown",
      date: "April 12, 2024",
      time: "9:30 PM",
      location: "Port District",
      participants: "35+ Tuners",
      image: event1,
      price: "$220",
      category: "Tuner Racing",
    },
    {
      id: 6,
      title: "Neon Rush Finals",
      date: "April 19, 2024",
      time: "10:30 PM",
      location: "City Center",
      participants: "70+ Racers",
      image: event2,
      price: "$250",
      category: "Circuit Racing",
    },
    {
      id: 7,
      title: "Nitrous Nights",
      date: "April 26, 2024",
      time: "9:00 PM",
      location: "Warehouse District",
      participants: "45+ Speed Freaks",
      image: event1,
      price: "$190",
      category: "Nitrous Racing",
    },
    {
      id: 8,
      title: "Underground Legends",
      date: "May 3, 2024",
      time: "11:30 PM",
      location: "Underground Tunnels",
      participants: "25+ Elite Racers",
      image: event2,
      price: "$300",
      category: "Underground",
    },
    {
      id: 9,
      title: "Speed Demon Classic",
      date: "May 10, 2024",
      time: "8:30 PM",
      location: "Desert Highway",
      participants: "55+ Classic Cars",
      image: event1,
      price: "$160",
      category: "Classic Racing",
    },
    {
      id: 10,
      title: "Adrenaline Rush Championship",
      date: "May 17, 2024",
      time: "10:00 PM",
      location: "Mountain Pass",
      participants: "80+ Thrill Seekers",
      image: event2,
      price: "$275",
      category: "Mountain Racing",
    },
    {
      id: 11,
      title: "Fast & Furious Grand Prix",
      date: "May 24, 2024",
      time: "9:00 PM",
      location: "Main Circuit",
      participants: "100+ Racing Legends",
      image: event1,
      price: "$350",
      category: "Grand Prix",
    },
  ];

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            RACING <span className="text-speed">EVENTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            11 heart-pounding racing events that will test your limits and push your ride to the edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="card-racing hover-speed group overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Event Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground font-semibold">
                    {event.category}
                  </Badge>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-secondary-foreground font-bold">{event.price}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-4 line-clamp-2 min-h-[3.5rem]">
                  {event.title}
                </CardTitle>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-secondary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-secondary" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                </div>
                
                <Button className="w-full btn-nitro hover-nitro">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Events Summary */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to <span className="text-neon">Race</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the most intense racing events in the city. Registration is open for all skill levels.
            </p>
            <Button size="lg" className="btn-racing hover-nitro">
              VIEW ALL EVENTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;