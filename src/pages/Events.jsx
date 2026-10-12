
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
    <div className="pb-12 pt-20 sm:pb-16 sm:pt-14 lg:pt-20">
      {/* Page Header */}
      <section className="mb-5 border-b border-line bg-surface py-5 sm:mb-6 sm:py-7">
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
          <section className="mx-auto max-w-full px-0 pt-0 sm:px-2 lg:px-0">
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
