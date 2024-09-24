import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import StatCard from '../../../../_components/StatCard/StatCard';

export default function Summary() {
  return (
    <section className="flex flex-col pl-[15%] pr-[15%] pt-[42px] gap-10 pb-20">
      <RevealWrapper>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3>Timeline</h3>
            <p>
              6 weeks <br></br>Oct - Nov 2022
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>My Role</h3>
            <p>
              User Research <br></br>Visual Design <br></br> Prototyping
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Team</h3>
            <p>
              Erika D. <br></br> Sophia B. <br></br>Huy N. <br></br>Me :)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Tools</h3>
            <p>
              Figma<br></br>Qualtrics XM
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Overview</h3>
          <p>
            In my sophomore year of college, I was eager to apply my
            human-centered design skills from high school and jumpstart my UX
            design career. I applied to an on campus professional development
            club, Design Interactive (di), and after completing a design
            challenge and panel interview, I embarked on a 6 week bootcamp. Out
            of 5 given prompts, I was immediately drawn to the mental health
            prompt because of its complexities and impact, and was matched with
            4 other designers who were also passionate about the topic. At the
            end of the 6 weeks, we presented our project to industry judges, and
            were awarded “Most Innovative UX” and “Best UX Research.”
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>The Problem</h3>
          <p>
            In today's complex world, maintaining good mental health is a
            fundamental necessity. Students have a desire to practice self-care.
            However, they struggle to do so due to lack of resources, busy
            schedules, and difficulty staying motivated.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>The Solution</h3>
          <p>
            Sage is a mobile application that advocates for socially accessible
            mental health and provides users with personalized self-care
            practices. With the help of Sage, students set big-picture goals
            that simultaneously venerate familiarity and facilitate discovery.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>The Outcome</h3>
          <p>
            Following the conclusion of the bootcamp, I wanted to pursue things
            further, and continued with the project solo to build out additional
            features. Sage signifies my humble beginnings in UX design and my
            passion for mental health. (Psst! Since first joining in 2022, my
            unwavering belief in the potential of di has allowed me to grow from
            a member to Co-President and bring opportunities like this to other
            students and budding designers on campus. Check us out at
            davisdi.org)
          </p>
        </div>

        <StatCard
          number='Awarded "Most Innovative UX" and "Best UX Research"'
          description="by industry judges from Meta, Amazon & DocuSign"
        />
      </RevealWrapper>
    </section>
  );
}
