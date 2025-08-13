import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Gear up",
      date: "August 23, 2025",
      time: "10:00 AM to 12:00 PM",
      image: event1,
    },
    {
      id: 2,
      title: "CAD Ace",
      date: "August 23, 2025",
      time: "1:00PM - 3:00PM",
      image: event2,
    },
    {
      id: 3,
      title: "Beams to briliance",
      date: "August 23, 2025",
      time: "12:00PM - 2:00PM",
      image: event1,
    },
    {
      id: 4,
      title: "Tech Buzz",
      date: "August 23, 2025",
      time: "2:00PM - 3:30PM",
      image: event2,
    },
    {
      id: 5,
      title: "Research Drift",
      date: "August 23, 2025",
      time: "10:30AM - 12:00PM",
      image: event1,
    },
    {
      id: 6,
      title: "Battles Bot",
      date: "August 23, 2025",
      time: "10:00AM - 12:00PM",
      image: event2,
    },
    {
      id: 7,
      title: "Fluid thrust",
      date: "August 23, 2025",
      time: "12:00PM - 2:00PM",
      image: event1,
    },
    {
      id: 8,
      title: "Forensic Fury",
      date: "August 23, 2025",
      time: "1:00PM - 3:30PM",
      image: event2,
    },
    {
      id: 9,
      title: "Heist Hunt",
      date: "August 23, 2025",
      time: "12:00PM - 2:00PM",
      image: event1,
    },
    {
      id: 10,
      title: "3D slice off",
      date: "August 23, 2025",
      time: "10:30AM - 12:30PM",
      image: event2,
    },
    {
      id: 11,
      title: "Shark Tank",
      date: "August 23, 2025",
      time: "12:00PM - 2:00PM",
      image: event1,
    },
  ];

  return (
    <section
      id="events"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-wider">
            <span className="text-purple text-glow">RACING</span>{" "}
            <span className="text-pink text-glow">EVENTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            11 heart-pounding racing events that will test your limits and push your ride to the edge.
          </p>
        </div>

        {/* Common Register Button at top */}
        <div className="flex justify-center mb-12">
          <Button
            className="btn-nitro hover-nitro text-lg px-8 py-4"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/11YTYvjiK3GT47C1fOvYRLfnHW3xWjDIoF7_dUlH3POk/edit",
                "_blank"
              )
            }
          >
            REGISTER FOR EVENTS
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {events.map((event) => (
            <Card
              key={event.id}
              className="card-racing hover-speed group overflow-hidden w-full max-w-md"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-4 line-clamp-2 min-h-[3.5rem]">
                  {event.title}
                </CardTitle>

                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-secondary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
