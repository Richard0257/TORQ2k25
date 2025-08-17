import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RulebookProps {
  id?: string;
}

const Rulebook = ({ id }: RulebookProps) => {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-wider">
            RULE <span className="text-neon">BOOK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here you can find all the rules and regulations for our exciting events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 justify-items-center max-w-4xl mx-auto">
          {/* GEAR UP */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">GEAR UP</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="text-md font-semibold text-foreground mb-2">Rules</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>A team should consist of 2-3 members.</li>
                <li>The event consists of two rounds.</li>
                <li>Prelims (technical round) will be conducted initially to screen the teams for the next round.</li>
                <li>Requisite tools for the event shall be provided.</li>
                <li>Top 5 teams will be judged on machining skills.</li>
                <li>Evaluation will be judged on machining time, accuracy and other parameters.</li>
                <li>Participants shall be responsible for any tool breakage.</li>
                <li>Only one tool and one workpiece will be provided per team.</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Note</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Participants should come in neat formals leather shoes are must (No jeans and T-shirts are allowed).</li>
                <li>Usage of mobile phones are strictly prohibited inside the campus.</li>
                <li>Each round marks will be evaluated for final result.</li>
                <li>The decision of event coordinators / judges will be final.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Shark Tank */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">About the event : Shark Tank</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground text-sm mb-2">
                This event provides an opportunity to express and experience some of the most important expertise of being an Engineer such as Ideation, Product design, Analysis, Market Analysis and Marketing, Prototyping, Paper presentation, Sales etc. A series of events mentioned below will provide an insight of the event experience.
              </p>
              <h3 className="text-md font-semibold text-foreground mb-2">Points to remember :</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Number of members : 3 per team</li>
                <li>Number of rounds : 3 rounds
                  <ul className="list-circle list-inside ml-4">
                    <li>Round one : Quiz (MCQs of 20 questions)
                      <ul className="list-square list-inside ml-4">
                        <li>Quiz Time : 20 mins</li>
                        <li>Total Score : 40 marks</li>
                        <li>This round will be a no elimination round</li>
                      </ul>
                    </li>
                    <li>Round two : Shoot the ad (30 - 60 second advertisement)
                      <ul className="list-square list-inside ml-4">
                        <li>An hour will be provided to ideate and shoot the Ad</li>
                        <li>Ad can be recorded and edited only in the stipulated venue</li>
                        <li>Irrelevant Ads will lead to Elimination</li>
                      </ul>
                    </li>
                    <li>Round three : Design and present the product (max 10 teams)
                      <ul className="list-square list-inside ml-4">
                        <li>A period of 120 minutes will be given to ideate, design, prototype (Optional) and prepare</li>
                        <li>Supplies will be provided</li>
                        <li>A presentation will be done to the Jury in the end of the event</li>
                        <li>Will be evaluated by judge</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">GENERAL RULES :</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Decorum should be maintained throughout the event</li>
                <li>No replacement of team members will be entertained</li>
                <li>Punctuality will be added points (Timeline should be strictly followed)</li>
                <li>Jury’s decision will be final</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Contact details :</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Sneha B : 9791178161</li>
                <li>Sarah Joyce Venci : 9884621996</li>
              </ul>
            </CardContent>
          </Card>

          {/* RC RACING */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">RC RACING</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="text-md font-semibold text-foreground mb-2">Event description:</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Battery-powered model cars that can be remotely operated from a distance are known as radio controlled (or RC) cars. RC car competitions are renowned for their on-terrain sports and action. The Bots are put to the test in terms of endurance and quality. Every car is allowed to travel the circuit, which is filled with obstacles around every bend. The car that finishes the race in the shortest amount of time wins.
              </p>
              <h3 className="text-md font-semibold text-foreground mb-2">Rules and Regulation:</h3>
              <h4 className="text-sm font-semibold text-foreground mb-1">Bot Specification:</h4>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>The bot’s dimension should not exceed 300*300*300(mm). Bots that don’t match the specified dimension aren’t permitted to compete in the race.</li>
                <li>The maximum voltage that should be supplied to the bot is 12v.</li>
                <li>The bot may be wired or wireless.</li>
              </ul>
              <h4 className="text-sm font-semibold text-foreground mt-2 mb-1">Track and Team Rules:</h4>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>The team can consist of a maximum of 4 members, however during the race, only two of those individuals may be present on the racetrack.</li>
                <li>The bot should be able to endeavor through all the laid out terrains such as mud, dirt, stones, sand dunes, pot holes, etc.</li>
                <li>Each Team is permitted to skip two obstacles. After then, they must begin from the prior checkpoint.</li>
                <li>The team has a maximum repair time of five minutes if the bot is injured during the preliminary or final race. The teams should bring their own tools and necessities.</li>
              </ul>
              <h4 className="text-sm font-semibold text-foreground mt-2 mb-1">General Rules:</h4>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Prelims will be conducted depending on the number of participants.</li>
                <li>Safety is our priority. Please report to the volunteer in case of emergency.</li>
                <li>The decision of event coordinators and judges is final.</li>
                <li>Late comers won’t be entertained.</li>
              </ul>
              <h4 className="text-sm font-semibold text-foreground mt-2 mb-1">Point Allocation:</h4>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>The points will be awarded based on the time taken.</li>
                <li>For each skip of hindrance, 5 points will be deducted.</li>
                <li>If the bot crosses the lane, 3 points will be deducted.</li>
              </ul>
            </CardContent>
          </Card>

          {/* DESIGN MINDS */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">DESIGN MINDS</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="text-md font-semibold text-foreground mb-2">General rules:</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Only one participant per team is allowed.</li>
                <li>Any number of students can participate per college</li>
                <li>USE OF CELLPHONES AND GADGETS INSIDE THE CAMPUS IS PROHIBITED.</li>
                <li>Formal wear are only allowed. Wearing T-shirts, jeans and any causal wear is not allowed.</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Round 1(Prelims):</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Preliminary round will be conducted depending on the number of entries</li>
                <li>In this round, the participants will be tested on their knowledge and command over the basics of CAD</li>
                <li>Qualified teams can proceed to round two</li>
                <li>The co-ordinator (or) Judges decision are final</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Round two (CAD modeling):</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Design software provided: SOLIDWORKS</li>
                <li>Your designing ability and techniques are tested</li>
                <li>Scoring is based on the methodology and detailing of the model</li>
                <li>The co-ordinators (or) the judges decision are final</li>
              </ul>
            </CardContent>
          </Card>

          {/* Fluid Thrust */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">FLUID THRUST</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="text-md font-semibold text-foreground mb-2">Rules and regulations for fluid thrust:</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Bottle to be used- 2-litre coke bottle</li>
                <li>Design changes like addition of fins and vortex generators are allowed</li>
                <li>Ma pressure to be pumped- 150 psi (yet to be decided)</li>
                <li>Max 2 members in a team</li>
                <li>Max horizontal distance travelled will be considered for the win</li>
                <li>Measurement will be taken at the point of contact on the ground after landing</li>
                <li>Rockets considered unsafe to be launched by the event coordinators will be disqualified and malpractices are not tolerated</li>
                <li>Launch pad will be provided by the coordinators</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Event description:</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Fluid thrust is a student level comp for symposiums, where max 2 members form a team and build their own design with the bottle preferred for the event. The bottle will be placed on the pipe that is held onto the launch pad. Air will be pumped using the foot pump to the preferred pressure and the bottle will be released after the optimum pressure is attained. The bottle that covers the max horizontal distance will be considered for the top 3 spots.
              </p>
            </CardContent>
          </Card>

          {/* FORENSIC FURY */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">FORENSIC FURY</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="text-md font-semibold text-foreground mb-2">Event Description:</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Jump into a brutal story of death. Search for clues, piece it together and solve the mystery in finding the KILLER.
              </p>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Rules:</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>3-4 members per team</li>
                <li>10 mins briefing</li>
                <li>20 mins to find clues on the scene</li>
                <li>10 mins to study the reports</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Point Allocation:</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Points will be awarded based on the number of clues uncovered and the closer the team has gotten in finding ‘ Who did it ?’, ‘How ?’and ‘When did it happen ?’</li>
              </ul>
            </CardContent>
          </Card>

          {/* BEAMS TO BRILLIANCE */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">BEAMS TO BRILLIANCE</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Team must have minimum 3 to maximum 4.</li>
                <li>ID card and Event Card are mandatory to participate.</li>
                <li>Formal Dress Code should be followed.</li>
                <li>Do register yourself while entering the venue.</li>
                <li>Event Starts 10.30 AM on 8th October 2022.</li>
                <li>We will allow 25 minutes extra time for late participants.</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">Competition will be three round’s :</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Round 1: Preliminary.</li>
                <li>Round 2: Task Round.</li>
                <li>Round 3: Grand Finale.</li>
              </ul>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Time limit for first two round has 29 minutes 59 Seconds.</li>
                <li>Each round result will be analyzed by “Jury” member.</li>
                <li>Round 1: Within 30 minutes you should complete the task and it was examined by 700 grams of dead weight to check the withstand capacity.</li>
                <li>Round 2: Within 30 minutes you should complete the task and it was examined by 1200 grams of dead weight to check its capacity.</li>
                <li>Round 3: “ GRAND FINALE” Within 45 minutes you should complete the task and it was examined by 1700 grams of dead weight to check the withstand capacity.</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">NOTE:</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Novelty play’s vital role to claim high!!</li>
                <li>No fees should be collected throughout the event.</li>
                <li>All participants will receive “Participation certificate”.</li>
                <li>Winners will get exciting – Gift Voucher, Merit & Participation Certificate.</li>
              </ul>
              <p className="text-muted-foreground text-sm mt-2">Note: Participates are supposed to bring their requirements to build it.</p>
              <p className="text-muted-foreground text-sm mt-2">“Safety is our foremost priority” & “Discipline is bridge between Goal and Acknowledgement”</p>
            </CardContent>
          </Card>

          {/* PROTOCOL FOR RESEARCH DRIFT */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">PROTOCOL FOR RESEARCH DRIFT</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>2 members per team</li>
                <li>Team members should be of same college or institution</li>
                <li>Paper should be preferably in IEEE format</li>
                <li>Presentation time allotted :15 mins + Q&A session</li>
                <li>Plagiarism is strictly not allowed and will lead to disqualification</li>
                <li>An Email will be sent shortly to the registered contestants for uploading their papers.</li>
                <li>The papers will be evaluated by the jury.</li>
              </ul>
            </CardContent>
          </Card>

          {/* TECH BUZZ */}
          <Card className="card-racing hover-nitro group text-left h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-foreground">TECH BUZZ</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="text-md font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Make yourselves ever glowing by responding the world what your ability could achieve. Bring your vibes to make the event interesting, as this quiz is all about the world of science and technology. Get ready for a roller coaster ride into the intense world of techno quizzing. Now this is what you'd want to be looking forward to!!! If you think you know it all and much more, we really, really want to know if you do. Try getting yourself tested or be assured Buzz would make you know what you didn't.
              </p>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">GENERAL RULES</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Only team entries are eligible to participate.</li>
                <li>A team shall consist of two persons. The decision of the quiz-master will be final and will not be subjected to any change.</li>
                <li>The participants will not be allowed to use mobile or other electronic devices (including smart watches).</li>
                <li>Audience should not give any hints or clues to the competitors.</li>
                <li>Before start of each round the procedure & rules will be explained clearly.</li>
                <li>Replacement of any participant of a team is not allowed after registration.</li>
                <li>Participants must be available at the given venue well ahead of the time mentioned.</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">PRELIMINARY ROUND (Hand Written)</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>A set of questions has to be answered within the given time limit.</li>
                <li>Star questions, if answered correctly carry more points to boost up the score.</li>
                <li>Each right answer carries one point and star questions carry two points.</li>
                <li>Questions will be based on general knowledge and from basics of engineering.</li>
                <li>In case of score ties, selection is based on answering correctly the starred questions or tie breaker will be conducted.</li>
                <li>At the end of this round only qualified six teams will be selected for finals.</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">FINAL ROUND - TEST YOURSELF!</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Questions will be purely technical. (Mechanical engineering related)</li>
                <li>From different streams of Mechanical Engineering the questions will be asked.</li>
                <li>Different & creative rounds will be conducted.</li>
                <li>Each right answers carry marks, for some rounds negative marks will be awarded for wrong answers.</li>
                <li>In case of score ties, selection is based on tie breaker.</li>
              </ul>
              <h3 className="text-md font-semibold text-foreground mt-4 mb-2">NOTE</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Participants should come in neat Formals (No Jeans and T-Shirts are allowed).</li>
                <li>Usage of mobile phones are strictly prohibited inside the campus.</li>
                <li>ID card is must for all the participants.</li>
                <li>Each round marks will be evaluated for final result.</li>
                <li>The decision of event coordinators/quiz masters will be final.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rulebook;
