
import { siteData } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import CategoryCard from "../components/CategoryCard";
import SectionHeading from "../components/SectionHeading";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

export default function Events() {
  useSEO({
    page: "Events",
    description:
      "Conferences, forums, community workshops, and leadership engagements.",
  });

  const categories = [
    siteData.eventCategories.find(
      (category) => category.slug === "international"
    ),
    siteData.eventCategories.find(
      (category) => category.slug === "national"
    ),
    siteData.eventCategories.find(
      (category) => category.slug === "school-community"
    ),
    siteData.eventCategories.find(
      (category) => category.slug === "grassroot-local"
    ),
  ].filter(Boolean);

  return (
    <div className="pb-20 pt-24 sm:pb-28 sm:pt-28 lg:pt-32">
      {/* Page Header */}
      <section className="mb-10 border-b border-line bg-surface py-10 sm:mb-12 sm:py-14">
        <Container>
          <SectionHeading
           
            title="Events Overview"
            text="Explore initiatives and speaking engagements organized across four distinct spheres of impact."
            className="mb-0"
          />
        </Container>
      </section>

      {/* Events Grid */}
      <Container>
        <Reveal>
          <section className="mx-auto max-w-full px-0 pt-2 sm:px-2 lg:px-0">
             <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                {categories.map((category) => (
                <div
                  key={category.slug}
                  className="group min-w-0 h-full "
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}
