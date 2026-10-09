
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import SafeImage from "./SafeImage";

export default function EventCard({ event, categorySlug }) {
  const detailUrl = `/events/${categorySlug}/${event.id}`;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#E0E7E0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#AFC4B0] hover:shadow-lg">
      {/* Event Image */}
      <Link
        to={detailUrl}
        className="relative block overflow-hidden"
        aria-label={`View details: ${event.title}`}
      >
        <SafeImage
          src={event.image}
          alt={event.title}
          ratio="ratio-3-2"
          zoom
          className="w-full"
        />

        {/* Category-style date badge */}
        {event.date && (
          <span className="absolute bottom-3 left-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-lg border border-white/60 bg-white/95 px-3 py-2 text-xs font-semibold text-[#3F6240] shadow-sm backdrop-blur-sm">
            <CalendarDays size={14} className="shrink-0" />
            <span className="truncate">{event.date}</span>
          </span>
        )}
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        {/* Location */}
        {event.location && (
          <div className="mb-3 flex min-w-0 items-center gap-1.5 text-xs font-medium text-[#727C74]">
            <MapPin
              size={14}
              className="shrink-0 text-[#588157]"
              aria-hidden="true"
            />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        )}

        {/* Event Title */}
        <h3 className="font-serif text-lg font-bold leading-snug text-[#17251D] transition-colors duration-200 group-hover:text-[#588157] sm:text-xl">
          <Link
            to={detailUrl}
            className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#588157] focus-visible:ring-offset-2"
          >
            {event.title}
          </Link>
        </h3>

        {/* Event Description */}
        {event.description && (
          <p className="mt-3 mb-5 line-clamp-3 text-sm leading-6 text-[#626D65]">
            {event.description}
          </p>
        )}

        {/* View Details Button */}
        <div className="mt-auto border-t border-[#E8ECE8] pt-4">
          <Link
            to={detailUrl}
            aria-label={`View details for ${event.title}`}
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#588157] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3F6240] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#588157] focus-visible:ring-offset-2 sm:w-auto"
          >
            <span>View Details</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
