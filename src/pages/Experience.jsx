import { siteData } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import ExperienceCard from "../components/ExperienceCard";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Experience() {
  useSEO({
    page: "Experience",
    description: "Professional journey, architectural visualization, freelance development, and leadership roles.",
  });

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
      {/* Page Header */}
      <section className="py-12 sm:py-16 bg-surface border-b border-line mb-12 sm:mb-16">
        <Container>
          <SectionHeading
            eyebrow="Career Journey"
            title="Experience & Leadership"
            text="A comprehensive overview of architectural visualization, web development, youth advocacy, and volunteer leadership."
            className="mb-0"
          />
        </Container>
      </section>

      {/* Experience Timeline / Cards */}
      <Container>
        <Reveal>
          <div className="space-y-6 sm:space-y-8">
            {siteData.experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
