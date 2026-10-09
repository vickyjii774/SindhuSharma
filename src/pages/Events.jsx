import { siteData } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import CategoryCard from "../components/CategoryCard";
import SectionHeading from "../components/SectionHeading";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

export default function Events() {
  useSEO({
    page: "Events",
    description: "Conferences, forums, community workshops, and leadership engagements.",
  });

  const international = siteData.eventCategories.find((c) => c.slug === "international");
  const national = siteData.eventCategories.find((c) => c.slug === "national");
  const schoolCommunity = siteData.eventCategories.find((c) => c.slug === "school-community");
  const grassroot = siteData.eventCategories.find((c) => c.slug === "grassroot-local");

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
      {/* Page Header */}
      <section className="py-12 sm:py-16 bg-surface border-b border-line mb-12 sm:mb-16">
        <Container>
          <SectionHeading
            eyebrow="Participation & Engagements"
            title="Events Overview"
            text="Explore initiatives and speaking engagements organized across four distinct spheres of impact."
            className="mb-0"
          />
        </Container>
      </section>

      {/* Visual Hierarchy Layout */}
      <Container>
        <Reveal>
          <div className="space-y-8 sm:space-y-10">
            {/* 1. International - Prominent / Featured */}
            {international && (
              <CategoryCard category={international} featured={true} />
            )}

            {/* 2. Middle Grid: National & School/Community */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {national && <CategoryCard category={national} />}
              {schoolCommunity && <CategoryCard category={schoolCommunity} />}
            </div>

            {/* 3. Grassroot & Local Level - Prominent / Featured */}
            {grassroot && (
              <CategoryCard category={grassroot} featured={true} />
            )}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
