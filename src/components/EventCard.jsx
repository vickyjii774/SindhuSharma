import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

/**
 * Reusable EventCard for event category listings and previews.
 */
export default function EventCard({ event, categorySlug }) {
  const detailUrl = `/events/${categorySlug}/${event.id}`;

  return (
    <article className="group flex flex-col bg-white border border-line rounded-sm overflow-hidden transition-all duration-300 hover:border-brand/60 hover:shadow-md">
      <Link
        to={detailUrl}
        className="block overflow-hidden cursor-pointer"
        aria-label={`View details: ${event.title}`}
      >
        <SafeImage
          src={event.image}
          alt={event.title}
          ratio="ratio-3-2"
          zoom
          className="w-full"
        />
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-brand mb-2.5">
          <span>{event.date}</span>
          {event.location && (
            <>
              <span className="text-line">•</span>
              <span className="text-ink-muted">{event.location}</span>
            </>
          )}
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink group-hover:text-brand transition-colors duration-200 leading-snug">
          <Link to={detailUrl} className="cursor-pointer">
            {event.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-ink-secondary leading-relaxed line-clamp-3 mb-6">
          {event.description}
        </p>

        <div className="mt-auto pt-4 border-t border-line/60">
          <Link
            to={detailUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand hover:text-brand-dark transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
            aria-label={`View details for ${event.title}`}
          >
            <span>View Details</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
