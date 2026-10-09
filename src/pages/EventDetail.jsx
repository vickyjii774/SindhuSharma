import { useParams, Link } from "react-router-dom";
import { getEvent } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import SafeImage from "../components/SafeImage";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import NotFoundState from "../components/NotFoundState";
import Container from "../components/Container";

export default function EventDetail() {
  const { category: slug, id } = useParams();
  const { category, event } = getEvent(slug, id);

  useSEO({
    page: event ? event.title : "Event Not Found",
    description: event?.description,
    image: event?.image,
  });

  if (!event || !category) {
    return (
      <div className="pt-24 sm:pt-32">
        <NotFoundState
          title="Event Not Found"
          text="The requested event could not be found."
          backTo="/events"
          backLabel="Back to Events Overview"
        />
      </div>
    );
  }

  return (
    <article className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
      {/* Event Header */}
      <section className="py-12 sm:py-16 bg-surface border-b border-line">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Link
                to={`/events/${category.slug}`}
                className="text-xs font-semibold tracking-wider uppercase text-brand hover:text-brand-dark cursor-pointer transition-colors"
              >
                ← {category.label} Events
              </Link>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
              {event.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-ink-secondary pt-4 border-t border-line/60">
              <div>
                <span className="text-ink-muted block text-xs uppercase tracking-wider">Date</span>
                <span className="text-ink font-semibold">{event.date}</span>
              </div>
              {event.location && (
                <div>
                  <span className="text-ink-muted block text-xs uppercase tracking-wider">Location</span>
                  <span className="text-ink font-semibold">{event.location}</span>
                </div>
              )}
              <div>
                <span className="text-ink-muted block text-xs uppercase tracking-wider">Category</span>
                <span className="text-brand font-semibold">{category.label}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {/* Large Cover Image */}
          {event.image && (
            <div className="rounded-sm overflow-hidden border border-line shadow-sm">
              <SafeImage
                src={event.image}
                alt={event.title}
                ratio="ratio-16-9"
                eager
                className="w-full"
              />
            </div>
          )}

          {/* About Event */}
          {event.description && (
            <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
                About the Event
              </h2>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                {event.description}
              </p>
            </section>
          )}

          {/* Sindhu's Role */}
          {event.role && (
            <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
                Sindhu's Role
              </h2>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                {event.role}
              </p>
            </section>
          )}

          {/* Contribution */}
          {event.contribution && (
            <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
                Key Contribution
              </h2>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                {event.contribution}
              </p>
            </section>
          )}

          {/* Impact */}
          {event.impact && (
            <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
                Outcomes & Impact
              </h2>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                {event.impact}
              </p>
            </section>
          )}

          {/* Event Gallery */}
          {event.gallery?.length > 0 && (
            <section className="space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Event Gallery
              </h2>
              <Gallery images={event.gallery} altPrefix={`${event.title} photograph`} />
            </section>
          )}

          {/* Back Navigation */}
          <div className="pt-8 border-t border-line flex items-center justify-between">
            <Button to={`/events/${category.slug}`} variant="outline">
              ← Back to {category.label} Events
            </Button>
            <Button to="/contact">
              Connect Regarding Events
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
