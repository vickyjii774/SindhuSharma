import { siteData } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";
import MilestoneCard from "./MilestoneCard";
import AdvocacyCard from "./AdvocacyCard";
import Reveal from "./Reveal";
import Container from "./Container";

/**
 * Shared, data-driven sections used across Home and About pages.
 */

export function EducationSection() {
  if (!siteData.education?.length) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-line" aria-labelledby="education-h">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Academic Foundation" title="Education" id="education-h" />
          <div className="bg-white border border-line rounded-sm p-6 sm:p-10 divide-y divide-line">
            {siteData.education.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function SkillsSection() {
  if (!siteData.skills?.length) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-alt border-b border-line" aria-labelledby="skills-h">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Competencies & Expertise"
            title="Key Skills"
            id="skills-h"
            text="Core competencies developed across architectural practice, youth advocacy, and community leadership."
          />
          <ul className="flex flex-wrap gap-2.5 sm:gap-3">
            {siteData.skills.map((s) => (
              <SkillCard key={s} skill={s} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function MilestonesSection() {
  if (!siteData.milestones?.length) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-line" aria-labelledby="milestones-h">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Key Moments"
            title="Milestones"
            id="milestones-h"
            text="Defining steps in leadership, advocacy, and professional growth."
          />
          <div className="max-w-4xl mx-auto pt-4">
            <ol className="relative list-none p-0 m-0">
              {siteData.milestones.map((m) => (
                <MilestoneCard key={m.id} item={m} />
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function AdvocacySection() {
  if (!siteData.advocacy?.length) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line" aria-labelledby="advocacy-h">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Voice & Action"
            title="Advocacy & Causes"
            id="advocacy-h"
            text="Initiatives, grassroots causes, and public speaking engagements that Sindhu champion."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {siteData.advocacy.map((a) => (
              <AdvocacyCard key={a.id} item={a} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
