
import { siteData } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import Hero from "../components/Hero";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import CategoryCard from "../components/CategoryCard";
import Reveal from "../components/Reveal";
import Container from "../components/Container";
import {
  EducationSection,
  SkillsSection,
  MilestonesSection,
  AdvocacySection,
} from "../components/Sections";

const PREVIEW_COUNT = 3;

export default function Home() {
  useSEO({ page: "Portfolio" });

  const { name, shortBio } = siteData.personal;
  const firstName = name.split(" ")[0];
  const experiencePreview = siteData.experiences.slice(0, PREVIEW_COUNT);

  // Group categories for editorial visual hierarchy
  const international = siteData.eventCategories.find(
    (c) => c.slug === "international"
  );
  const national = siteData.eventCategories.find(
    (c) => c.slug === "national"
  );
  const schoolCommunity = siteData.eventCategories.find(
    (c) => c.slug === "school-community"
  );
  const grassroot = siteData.eventCategories.find(
    (c) => c.slug === "grassroot-local"
  );

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Preview */}
      <section
        className="py-20 sm:py-24 lg:py-28 bg-white border-b border-line"
        aria-labelledby="intro-h"
      >
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="col-span-4">
                <span className="block font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand mb-2">
                  About
                </span>

                <h2
                  id="intro-h"
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight"
                >
                  About {firstName}
                </h2>
              </div>

              <div className="col-span-8 flex flex-col items-start">
                <p className="font-serif text-xl sm:text-2xl text-ink leading-relaxed mb-8">
                  {shortBio}
                </p>

                <Button to="/about" variant="outline">
                  Learn More About {firstName} →
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. Education Section */}
      <EducationSection />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. Experience Preview */}
      <section
        className="py-20 sm:py-24 lg:py-28 bg-white border-b border-line"
        aria-labelledby="exp-h"
      >
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
              <SectionHeading
                eyebrow="Career & Impact"
                title="Selected Experience"
                id="exp-h"
                text="Highlights of professional positions, architectural visualization, and leadership."
                className="mb-0"
              />

              <div className="mt-6 sm:mt-0">
                <Button to="/experience" variant="outline">
                  All Experience →
                </Button>
              </div>
            </div>

        
          </Reveal>
        </Container>
      </section>


      <section
        className="py-20 sm:py-24 lg:py-28 bg-surface-alt"
        aria-labelledby="events-h"
      >
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
              <SectionHeading
                eyebrow="Engagement & Stages"
                title="Featured Events"
                id="events-h"
                text="Representing ideas and youth voice across local, national, and global platforms."
                className="mb-0"
              />

              <div className="mt-6 sm:mt-0">
                <Button to="/events">
                  Browse All Categories →
                </Button>
              </div>
            </div>

         
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
