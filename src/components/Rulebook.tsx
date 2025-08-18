import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RulebookProps {
  id?: string;
}

const Rulebook = ({ id }: RulebookProps) => {
  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background/50 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            RULE <span className="text-neon">BOOK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here you can find all the rules and regulations of our events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 justify-items-center max-w-5xl mx-auto">

          {/* GENERAL RULES */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>GENERAL RULES & REGULATIONS</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>All participants shall report to the campus at the designated time as per the event schedule.</li>
                <li>A valid College Identity Card is mandatory for entry into the campus and participation in events.</li>
                <li>Only candidates with confirmed registration will be permitted to participate.</li>
                <li>Participants must be in formal/smart casual attire.</li>
                <li>Misbehavior or misconduct leads to disqualification.</li>
                <li>Judges' and organizers' decisions are final.</li>
                <li>Mobile phones must remain silent during events.</li>
                <li>Photography/videography may be restricted as per organizers.</li>
                <li>Any damage to property attracts disciplinary action.</li>
                <li>Food and drinks only in designated areas.</li>
                <li>Participants responsible for belongings.</li>
                <li>Report to event venues at least 10 minutes prior.</li>
              </ul>
            </CardContent>
          </Card>

          {/* BEAMS TO BRILLIANCE */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>BEAMS TO BRILLIANCE</CardTitle></CardHeader>
            <CardContent>
              <h3 className="font-semibold">General Rules:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Team size: 3–4 members.</li>
                <li>ID card & Event card mandatory.</li>
                <li>Formal dress code required.</li>
                <li>Register at venue upon arrival.</li>
                <li>Event starts 10:30 AM, 8th Oct 2022 (25 min grace time).</li>
                <li>No registration fee.</li>
                <li>Certificates for all participants; winners get vouchers & merits.</li>
                <li>Bring own tools and materials.</li>
              </ul>
              <h3 className="font-semibold mt-4">Rounds:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Round 1 (30 min): withstand 700g dead weight.</li>
                <li>Round 2 (30 min): withstand 1200g dead weight.</li>
                <li>Round 3 (45 min): withstand 1700g dead weight.</li>
              </ul>
              <h3 className="font-semibold mt-4">Judging Criteria:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Structural integrity.</li>
                <li>Innovation & novelty.</li>
                <li>Accuracy & aesthetics.</li>
                <li>Jury’s decision is final.</li>
              </ul>
            </CardContent>
          </Card>

          {/* CAD ACE */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>CAD ACE</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Individual participation only.</li>
                <li>Unlimited entries per college allowed.</li>
                <li>No gadgets allowed during contest.</li>
                <li>Formal attire required.</li>
                <li>Judges’ decision final.</li>
              </ul>
              <h3 className="font-semibold mt-4">Rounds:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Round 1: Preliminary basics test.</li>
                <li>Round 2: SOLIDWORKS modeling challenge.</li>
              </ul>
              <h3 className="font-semibold mt-4">Judging Criteria:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Design methodology.</li>
                <li>Model detailing.</li>
                <li>Accuracy and completeness.</li>
              </ul>
            </CardContent>
          </Card>

          {/* FLUID THRUST */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>FLUID THRUST</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Teams of 2 members.</li>
                <li>Use 2L Coke plastic bottle as rocket body.</li>
                <li>Fins & design modifications allowed.</li>
                <li>Max launch pressure: 150 psi.</li>
                <li>Max horizontal distance = winning criteria.</li>
                <li>Unsafe rockets disqualified.</li>
                <li>Organizers provide launch pad.</li>
              </ul>
            </CardContent>
          </Card>

          {/* FORENSIC FURY */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>FORENSIC FURY</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Teams of 3–4 members.</li>
                <li>10 min briefing.</li>
                <li>20 min crime scene investigation.</li>
                <li>10 min report analysis.</li>
                <li>Deduce WHO, HOW, WHEN.</li>
              </ul>
              <h3 className="font-semibold mt-4">Judging:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Points for valid clues found.</li>
                <li>Accuracy in solving the case.</li>
              </ul>
            </CardContent>
          </Card>

          {/* GEAR UP */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>GEAR UP</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Teams of 2–3 members.</li>
                <li>Two rounds (prelims + final machining).</li>
                <li>Tools provided (only 1 tool & workpiece per team).</li>
                <li>Top 5 teams to final round.</li>
                <li>Judging: time, accuracy, finishing quality.</li>
              </ul>
            </CardContent>
          </Card>

          {/* HEIST HUNT */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>HEIST HUNT</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Teams of 2–3 members.</li>
                <li>No electronics allowed.</li>
                <li>Failing a clue = disqualification.</li>
                <li>Filtering may occur depending on entries.</li>
                <li>Fair play required; misconduct = disqualification.</li>
              </ul>
            </CardContent>
          </Card>

          {/* RC RACE */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>RC RACE</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Bot size: ≤ 300x300x300 mm.</li>
                <li>Max voltage: 12V.</li>
                <li>Wired or wireless allowed.</li>
                <li>Teams: up to 4 members, 2 active on track.</li>
                <li>Must complete all terrains (mud, sand, stones, potholes).</li>
                <li>2 skips allowed; more requires restart.</li>
                <li>Max 5 min repair allowed (bring tools).</li>
              </ul>
              <h3 className="font-semibold mt-4">Judging:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Points by completion time.</li>
                <li>-5 per skipped obstacle, -3 for lane violation.</li>
              </ul>
            </CardContent>
          </Card>

          {/* RESEARCH DRIFT */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>RESEARCH DRIFT</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Teams of 2 members.</li>
                <li>Paper in IEEE format preferred.</li>
                <li>15 min presentation + Q&A.</li>
                <li>No plagiarism (disqualification).</li>
                <li>Papers evaluated by jury before presentation.</li>
              </ul>
            </CardContent>
          </Card>

          {/* SHARK TANK */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>SHARK TANK</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Team size: 1–3 members.</li>
                <li>Idea/project must be original.</li>
                <li>Pitch: 5–7 min + 2–3 min Q&A.</li>
                <li>PPT, prototypes, or models may be used.</li>
                <li>Include problem, solution, audience, model, market potential.</li>
                <li>Plagiarized/offensive content = disqualification.</li>
              </ul>
            </CardContent>
          </Card>

          {/* TECH BUZZ */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader><CardTitle>TECH BUZZ</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Teams of 2 members.</li>
                <li>No gadgets/electronics allowed.</li>
                <li>Quizmaster’s decision final.</li>
                <li>Audience may not give hints.</li>
                <li>No replacements after registration.</li>
              </ul>
              <h3 className="font-semibold mt-4">Rounds:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Prelims: written quiz.</li>
                <li>Starred Qs = 2 points; normal = 1 point.</li>
                <li>Tie-break = starred Qs or tie-breaker quiz.</li>
                <li>Top 6 teams go to finals.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rulebook;
