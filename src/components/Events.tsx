import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CAD from "@/assets/CAD.jpg";
import Truss from "@/assets/Truss.jpg";
import Gearup from "@/assets/Gearup.jpg";
import buzz from "@/assets/buzz.jpg";
import dprinting from "@/assets/dprinting.jpg";
import Forsenicfury from "@/assets/Forsenicfury.jpg";
import Heist from "@/assets/Heist.jpg";
import fluid from "@/assets/fluid.png";
import RC from "@/assets/RC.jpg";
import research from "@/assets/research.jpg";
import Sharktank from "@/assets/Sharktank.jpg";
import rocket from "@/assets/rocket.jpeg";

const Events = () => {
  type EventDetails = {
    rules: string[];
    rounds?: string[];
    judging?: string[];
  };

  const eventDetailsByTitle: Record<string, EventDetails> = {
    "Gear up": {
      rules: [
        "Teams of 2–3 members.",
        "Tools provided (only 1 tool & workpiece per team).",
        "Top 5 teams to final round."
      ],
      rounds: [
        "Prelims",
        "Final machining"
      ],
      judging: [
        "Time taken",
        "Accuracy",
        "Finishing quality"
      ]
    },
    "CAD Ace": {
      rules: [
        "Individual participation only.",
        "Unlimited entries per college allowed.",
        "No gadgets allowed during contest.",
        "Formal attire required.",
        "Judges’ decision final."
      ],
      rounds: [
        "Round 1: Preliminary basics test",
        "Round 2: SOLIDWORKS modeling challenge"
      ],
      judging: [
        "Design methodology",
        "Model detailing",
        "Accuracy and completeness"
      ]
    },
    "Beams to briliance": {
      rules: [
        "Team size: 3–4 members.",
        "ID card & Event card mandatory.",
        "Formal dress code required.",
        "Register at venue upon arrival.",
        "Certificates for all participants; winners get vouchers & merits."
      ],
      rounds: [
        "Round 1 (30 min): withstand 700g dead weight",
        "Round 2 (30 min): withstand 1200g dead weight",
        "Round 3 (45 min): withstand 1700g dead weight"
      ],
      judging: [
        "Structural integrity",
        "Innovation & novelty",
        "Accuracy & aesthetics",
        "Jury’s decision is final"
      ]
    },
    "Tech Buzz": {
      rules: [
        "Teams of 2 members.",
        "No gadgets/electronics allowed.",
        "Quizmaster’s decision final.",
        "No replacements after registration."
      ],
      rounds: [
        "Prelims: written quiz",
        "Starred questions = 2 points; normal = 1 point",
        "Tie-break: starred questions or tie-breaker quiz",
        "Top 6 teams go to finals"
      ]
    },
    "Research Drift": {
      rules: [
        "Teams of 2 members.",
        "Paper in IEEE format preferred.",
        "15 min presentation + Q&A.",
        "No plagiarism (disqualification).",
        "Papers evaluated by jury before presentation."
      ]
    },
    "RC Race": {
      rules: [
        "Bot size: ≤ 300x300x300 mm.",
        "Max voltage: 12V.",
        "Wired or wireless allowed.",
        "Teams: up to 4 members, 2 active on track.",
        "Must complete all terrains; penalties for skips and lane violations."
      ],
      judging: [
        "Points by completion time",
        "-5 per skipped obstacle",
        "-3 for lane violation"
      ]
    },
    "Fluid thrust": {
      rules: [
        "Teams of 2 members.",
        "Use 2L Coke plastic bottle as rocket body.",
        "Fins & design modifications allowed.",
        "Max launch pressure: 150 psi.",
        "Max horizontal distance = winning criteria.",
        "Unsafe rockets are subject to disqualification",
        "Organizers provide launch pad"
      ]
    },
    "Forensic Fury": {
      rules: [
        "Teams of 3–4 members.",
        "10 min briefing + 20 min investigation + 10 min report.",
        "Deduce WHO, HOW, WHEN."
      ],
      judging: [
        "Points for valid clues found",
        "Accuracy in solving the case"
      ]
    },
    "Heist Hunt": {
      rules: [
        "Teams of 2–3 members.",
        "No electronics allowed.",
        "Failing a clue = disqualification.",
        "Filtering may occur depending on entries.",
        "Fair play required; misconduct = disqualification."
      ]
    },
    "Shark Tank": {
      rules: [
        "Team size: 1–3 members.",
        "Idea/project must be original.",
        "Pitch: 5–7 min + 2–3 min Q&A.",
        "PPT, prototypes, or models may be used.",
        "Include problem, solution, audience, model, market potential.",
        "Plagiarized/offensive content = disqualification."
      ]
    }
  };

  const [flippedId, setFlippedId] = useState<number | null>(null);
  const events = [
    { id: 1, title: "Gear up", date: "August 23, 2025", time: "10:00 AM to 12:00 PM", description: "Lathe machine shaping challenge", image: Gearup },
    { id: 2, title: "CAD Ace", date: "August 23, 2025", time: "1:00PM - 3:00PM", description: "Create CAD designs", image: CAD },
    { id: 3, title: "Beams to briliance", date: "August 23, 2025", time: "12:00PM - 2:00PM", description: "Build stable truss structure", image: Truss },
    { id: 4, title: "Tech Buzz", date: "August 23, 2025", time: "2:00PM - 3:30PM", description: "Fast-paced quiz game", image: buzz },
    { id: 5, title: "Research Drift", date: "August 23, 2025", time: "10:30AM - 12:00PM", description: "Present research to judges", image: research },
    { id: 6, title: "RC Race", date: "August 23, 2025", time: "10:00AM - 12:00PM", description: "Build and race mini cars", image: RC },
    { id: 7, title: "Fluid thrust", date: "August 23, 2025", time: "12:00PM - 2:00PM", description: "Design water-air launcher", image: fluid },
    { id: 8, title: "Forensic Fury", date: "August 23, 2025", time: "1:00PM - 3:30PM", description: "Solve mystery as detective", image: Forsenicfury },
    { id: 9, title: "Heist Hunt", date: "August 23, 2025", time: "12:00PM - 2:00PM", description: "Treasure hunt puzzle game", image: Heist },
    { id: 10, title: "3D slice off", date: "August 23, 2025", time: "10:30AM - 12:30PM", description: "3D model and print", image: dprinting },
    { id: 11, title: "Shark Tank", date: "August 23, 2025", time: "12:00PM - 2:00PM", description: "Pitch business ideas", image: Sharktank },
    { id: 12, title: "Rocketry Workshop", date: "August 23, 2025", time: "2:00PM - 4:00PM", description: "Learn to design and build rockets", image: rocket },
  ];

  return (
    <section
      id="events"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-wider">
            <span className="text-purple text-glow">RACING</span>{" "}
            <span className="text-pink text-glow">EVENTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            11 heart-pounding racing events that will test your limits and push your ride to the edge.
          </p>
        </div>

        {/* Register Button */}
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {events.map((event) => {
            const isFlipped = flippedId === event.id;
            const details = eventDetailsByTitle[event.title];
            const rules = details?.rules || [
              "Rules & regulations will be announced at the venue.",
              "For more details, contact the organizers."
            ];
            const rounds = details?.rounds || [];
            const judging = details?.judging || [];

            return (
              <div key={event.id} className="w-full max-w-md [perspective:1000px]">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setFlippedId(isFlipped ? null : event.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setFlippedId(isFlipped ? null : event.id);
                    }
                  }}
                  className={`relative h-[26rem] cursor-pointer transition-transform duration-500 transform-gpu [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Card className="card-racing hover-speed group overflow-hidden w-full h-full">
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
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            <span className="text-sm text-orange-500">{event.description}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2 text-secondary" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                        </div>
                        <div className="mt-4 text-xs text-muted-foreground">Tap to view rules</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Card className="card-racing hover-nitro w-full h-full overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{event.title} — Details</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 h-[calc(100%-3.5rem)]">
                        <div className="text-sm text-muted-foreground max-h-[17rem] overflow-y-auto pr-1">
                          <div>
                            <h4 className="font-semibold">Rules & Regulations</h4>
                            <ul className="list-disc list-inside space-y-1 mt-1">
                              {rules.map((rule, idx) => (
                                <li key={idx}>{rule}</li>
                              ))}
                            </ul>
                          </div>
                          {rounds.length > 0 && (
                            <div className="mt-3">
                              <h4 className="font-semibold">Rounds</h4>
                              <ul className="list-disc list-inside space-y-1 mt-1">
                                {rounds.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {judging.length > 0 && (
                            <div className="mt-3">
                              <h4 className="font-semibold">Judging Criteria</h4>
                              <ul className="list-disc list-inside space-y-1 mt-1">
                                {judging.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="mt-4 text-xs text-muted-foreground">Tap to flip back</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
