
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEvent } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import SafeImage from "../components/SafeImage";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import NotFoundState from "../components/NotFoundState";
import Container from "../components/Container";

export default function EventDetail() {
  const { category: slug, id } = useParams();
  const navigate = useNavigate();

  const { category, event } = getEvent(slug, id);

  useSEO({
    page: event ? event.title : "Event Not Found",
    description: event?.description,
    image: event?.image,
  });

  if (!event || !category) {
    return (
      <div className="min-h-screen bg-[#F7F9F7] pt-24 sm:pt-32">
        <NotFoundState
          title="Event Not Found"
          text="The requested event could not be found."
          backTo="/events"
          backLabel="Back to Events Overview"
        />
      </div>
    );
  }

  const detailSections = [
    {
      title: "Sindhu's Role",
      content: event.role,
    },
    {
      title: "Key Contribution",
      content: event.contribution,
    },
    {
      title: "Outcomes & Impact",
      content: event.impact,
    },
  ].filter((section) => section.content);

  return (
    <article className="min-h-screen bg-[#F7F9F7] pb-12 pt-20 sm:pt-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Close Button */}
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/events")}
              aria-label="Close and return to events"
              title="Back to Events"
              className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E8ECE8] bg-white text-[#526056] shadow-sm transition-all duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <svg
                className="h-5 w-5 transition-transform duration-200 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Main Details Container */}
          <div className="overflow-hidden rounded-2xl border border-[#E8ECE8] bg-white shadow-sm">
            {/* Event Header */}
            <header className="border-b border-[#E8ECE8] p-5 sm:p-8">
             

              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E8F0EA] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3F6240] sm:text-xs">
                  {category.label}
                </span>
              </div>

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div className="min-w-0 flex-1">
                  <h1 className="break-words font-serif text-2xl font-bold leading-tight tracking-tight text-[#17251D] sm:text-3xl lg:text-4xl">
                    {event.title}
                  </h1>

                  {event.role && (
                    <p className="mt-2 font-serif text-base font-medium italic text-[#588157] sm:text-lg">
                      {event.role}
                    </p>
                  )}
                </div>

                <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-3 border-t border-[#E8ECE8] pt-4 text-xs text-[#6C746F] sm:justify-end sm:border-t-0 sm:pt-0 sm:text-sm">
                  <div>
                    <span className="mb-1 block text-[10px] uppercase tracking-wider text-[#8A938D] sm:text-xs">
                      Date
                    </span>
                    <span className="font-semibold text-[#17251D]">
                      {event.date || "Date not specified"}, {event.location}
                      </span>
                    </div>
                
                </div>
              </div>
            </header>

            {/* Main Content: Two Columns on Desktop */}
            <div className="grid grid-cols-1 items-start gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-12">
              {/* Left Column */}
              <div className="min-w-0 space-y-7 lg:col-span-7">
                {/* Cover Image */}
                {event.image && (
                  <div className="overflow-hidden rounded-xl border border-[#E8ECE8]">
                    <SafeImage
                      src={event.image}
                      alt={event.title}
                      ratio="ratio-4-3"
                      eager
                      className="w-full"
                    />
                  </div>
                )}

                {/* About Event */}
                {event.description && (
                  <section>
                    <h2 className="mb-3 font-serif text-xl font-bold text-[#17251D] sm:text-2xl">
                      About the Event
                    </h2>

                    <p className="whitespace-pre-line text-sm leading-7 text-[#526056] sm:text-base">
                      {event.description}
                    </p>
                  </section>
                )}

                {/* Event Gallery */}
                {event.gallery?.length > 0 && (
                  <section className="border-t border-[#E8ECE8] pt-6">
                    <h2 className="mb-4 font-serif text-xl font-bold text-[#17251D] sm:text-2xl">
                      Event Gallery
                    </h2>

                    <Gallery
                      images={event.gallery}
                      altPrefix={`${event.title} photograph`}
                    />
                  </section>
                )}
              </div>

              {/* Right Column */}
              <div className="min-w-0 space-y-6 lg:col-span-5">
                {/* Event Information */}
                <section className="rounded-xl border border-[#E8ECE8] bg-[#F8FAF8] p-5 sm:p-6">
                  <h2 className="mb-5 font-serif text-xl font-bold text-[#17251D]">
                    Event Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#8A938D]">
                        Category
                      </span>
                      <p className="text-sm font-semibold text-[#588157]">
                        {category.label}
                      </p>
                    </div>

                    {event.date && (
                      <div className="border-t border-[#E8ECE8] pt-4">
                        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#8A938D]">
                          Event Date & Location
                        </span>
                        <p className="text-sm font-medium text-[#17251D]">
                          {event.date} , {event.location}
                        </p>
                      </div>
                    )}

                  </div>
                </section>

                {/* Role, Contribution and Impact */}
                {detailSections.map((section) => (
                  <section
                    key={section.title}
                    className="border-t border-[#E8ECE8] pt-6 first:border-t-0 first:pt-0"
                  >
                    <h2 className="mb-3 font-serif text-xl font-bold text-[#17251D]">
                      {section.title}
                    </h2>

                    <p className="whitespace-pre-line text-sm leading-7 text-[#526056] sm:text-base">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              to={`/events/${category.slug}`}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <span aria-hidden="true">←</span>
              <span>Back to {category.label} Events</span>
            </Button>

            <Button to="/contact" className="w-full sm:w-auto">
              Connect Regarding Events
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
