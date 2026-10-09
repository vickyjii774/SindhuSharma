import { useParams, Link } from "react-router-dom";
import { getCategoryBySlug, getEventsForCategory } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import EventCard from "../components/EventCard";
import NotFoundState from "../components/NotFoundState";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

export default function EventCategory() {
  const { category: slug } = useParams();
  const category = getCategoryBySlug(slug);
  const events = getEventsForCategory(category);

  useSEO({
    page: category ? `${category.label} Events` : "Events",
    description: category?.description,
  });

  if (!category) {
    return (
      <div className="pt-24 sm:pt-32">
        <NotFoundState
          title="Category Not Found"
          text="The requested event category does not exist."
          backTo="/events"
          backLabel="Back to Events Overview"
        />
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
      {/* Category Header */}
      <section className="py-12 sm:py-16 bg-surface border-b border-line mb-12 sm:mb-16">
        <Container>
          <div className="max-w-4xl">
            
            <SectionHeading
              title={`${category.label} Events`}
              text={category.description}
              className="mb-0"
            />
          </div>
        </Container>
      </section>

      {/* Events Grid */}
      <Container>
        {events.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} categorySlug={category.slug} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-line rounded-sm p-12 text-center max-w-xl mx-auto">
            <p className="text-ink-secondary text-base mb-6">
              No events have been added to this category yet. Check back soon for updates.
            </p>
            <Button to="/events" variant="outline">
              Browse Other Categories
            </Button>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-line flex items-center justify-between">
          <Button to="/events" variant="outline">
            ← Back to Events Overview
          </Button>
          <Button to="/contact">
            Invite to Speak
          </Button>
        </div>
      </Container>
    </div>
  );
}
