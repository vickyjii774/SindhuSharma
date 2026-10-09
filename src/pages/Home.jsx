
import useSEO from "../hooks/useSEO";
import Hero from "../components/Hero";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import CategoryCard from "../components/CategoryCard";
import Reveal from "../components/Reveal";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { siteData, getCategoryImage } from "../data/siteData";

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


      {/* 4. Skills Section */}
      <SkillsSection />
       <AdvocacySection/>

<section
  className="bg-surface-alt py-20 sm:py-24 lg:py-28"
  aria-labelledby="events-h"
>
  <Container>
    <Reveal>
      <div className="mb-10 flex flex-col justify-between sm:mb-12 sm:flex-row sm:items-end">
        <SectionHeading
          title="Featured Events"
          id="events-h"
          text="Representing ideas and youth voice across local, national, and global platforms."
          className="mb-0"
        />

        <div className="mt-5 sm:mt-0">
          <Button to="/events">
            Browse All Categories →
          </Button>
        </div>
      </div>
    </Reveal>

    {/* Four Featured Event Categories */}
    <Reveal>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {siteData.eventCategories.map((category) => (
          <Link
            key={category.slug}
            to={`/events/${category.slug}`}
            className="group min-w-0 overflow-hidden rounded-xl border border-[#E0E7E0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#AFC4B0] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#588157]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#E8EFE7]">
              <img
                src={getCategoryImage(category)}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-3 sm:p-5">
              <h3 className="font-serif text-sm font-bold leading-snug text-[#17251D] transition-colors group-hover:text-[#588157] sm:text-lg">
                {category.label}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#626D65] sm:text-sm">
                {category.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#588157]">
                Explore Events
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  </Container>
</section>
    </div>
  );
}
