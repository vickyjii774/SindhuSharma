
import { siteData } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import SafeImage from "../components/SafeImage";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import Container from "../components/Container";
import {
  EducationSection,
  SkillsSection,
  MilestonesSection,
  AdvocacySection,
} from "../components/Sections";

export default function About() {
  const { name, title, profileImage, fullBio, interests, philosophy } =
    siteData.personal;

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  useSEO({
    page: "About",
    description: siteData.personal.shortBio,
  });

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      {/* Editorial Hero / Biography */}




{/* Editorial Hero / Biography */}
<section
  className="bg-surface border-b border-line py-10 sm:py-16 lg:py-20"
  aria-labelledby="about-heading"
>
  <Container>
    {/* Top section: Biography introduction + profile image */}
    <div className="grid grid-cols-12 items-start gap-4 sm:gap-8 lg:gap-12">

      {/* Left: Biography introduction */}
      <div className="col-span-7 flex min-w-0 flex-col items-start">
        <span className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-widest text-brand sm:text-sm">
          Biography
        </span>

        <h1
          id="about-heading"
          className="mb-2 font-serif text-2xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-6xl"
        >
          {name}
        </h1>

        <p className="mb-4 font-serif text-xs font-medium italic text-brand sm:mb-6 sm:text-xl lg:text-2xl">
          {title}
        </p>

        {/* First paragraph beside the image */}
        {fullBio?.length > 0 && (
          <div className="font-sans text-xs leading-relaxed text-ink-secondary sm:text-base sm:leading-7 lg:text-lg">
            <p>{fullBio[0]}</p>
          </div>
        )}
      </div>

      {/* Right: Profile image */}
      <div className="col-span-5 min-w-0">
        <div className="relative mx-auto w-full max-w-md rounded-sm border border-line bg-white p-1.5 shadow-sm sm:p-3">
          <SafeImage
            src={profileImage}
            alt={`Portrait of ${name}`}
            ratio="ratio-4-5"
            eager
            placeholderText={initials}
            className="rounded-sm"
          />
        </div>
      </div>
    </div>

    {/* Remaining biography: Full width below the image */}
    {fullBio?.length > 1 && (
      <div className="mt-8 space-y-5 font-sans text-sm leading-7 text-ink-secondary sm:mt-12 sm:space-y-6 sm:text-base sm:leading-8 lg:mt-16 lg:text-lg">
        {fullBio.slice(1).map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    )}

    {/* Buttons: Below the entire biography */}
    <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
      <Button to="/contact">
        Get in Touch
      </Button>

      <Button to="/experience" variant="outline">
        View Experience
      </Button>
    </div>
  </Container>
</section>


      {/* Education */}
      <EducationSection />

      {/* Skills */}
      <SkillsSection />

      {/* Areas of Interest */}
      {interests && interests.length > 0 && (
        <section
          className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line"
          aria-labelledby="interests-h"
        >
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Fields of Focus"
                title="Areas of Interest"
                id="interests-h"
                text="Domains of study, creative practice, and community development that drive my daily focus."
              />

              <ul className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <SkillCard key={interest} skill={interest} />
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Milestones */}
      <MilestonesSection />

      {/* Advocacy */}
      <AdvocacySection />

      {/* Personal / Professional Philosophy */}
      {philosophy && (
        <section
          className="py-20 sm:py-28 bg-surface-alt border-b border-line"
          aria-labelledby="philosophy-h"
        >
          <Container className="text-center flex flex-col items-center">
            <Reveal className="max-w-3xl">
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand mb-4 block">
                Guiding Principle
              </span>

              <h2 id="philosophy-h" className="sr-only">
                Philosophy
              </h2>

              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-medium italic leading-relaxed">
                “{philosophy}”
              </blockquote>

              <div className="w-12 h-0.5 bg-brand mx-auto mt-6" />
            </Reveal>
          </Container>
        </section>
      )}
    </div>
  );
}
