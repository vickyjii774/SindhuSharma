import { siteData } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import ExperienceCard from "../components/ExperienceCard";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Experience() {
  useSEO({
    page: "Experience",
    description: "Professional journey and roles.",
  });

  return (
    <div className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16">
      {/* Page Header */}
      <section className="py-5 sm:py-7 bg-surface border-b border-line mb-5 sm:mb-6">
        <Container>
          <SectionHeading
            title="Experience & Leadership"
            text="A comprehensive overview of architectural visualization, web development, youth advocacy, and volunteer leadership."
            className="mb-0"
          />
        </Container>
      </section>

      {/* Experience Timeline / Cards */}
      <Container>
        <Reveal>
          <div className="space-y-4 sm:space-y-5">
            {siteData.experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
