import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

/**
 * Reusable ExperienceCard.
 * Visual structure:
 * IMAGE (if provided or editorial placeholder)
 * DATE / PERIOD
 * ORGANISATION
 * ROLE
 * SHORT DESCRIPTION
 * VIEW DETAILS →
 */
export default function ExperienceCard({ experience }) {
  const { id, organization, role, period, location, category, description, image } = experience;
  const detailUrl = `/experience/${id}`;

  return (
    <article className="group bg-white border border-line rounded-sm overflow-hidden transition-all duration-300 hover:border-brand/60 hover:shadow-md flex flex-col md:flex-row">
      {/* Optional image column or decorative badge */}
      {image ? (
        <div className="md:w-72 lg:w-80 shrink-0">
          <Link to={detailUrl} className="block h-full cursor-pointer overflow-hidden">
            <SafeImage
              src={image}
              alt={organization}
              ratio="ratio-16-9"
              zoom
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      ) : null}

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {category && (
              <span className="text-[11px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-brand-light text-brand-dark">
                {category}
              </span>
            )}
          </div>
          <div className="text-xs sm:text-sm font-medium text-ink-muted">
            <span>{period}</span>
            {location && <span> • {location}</span>}
          </div>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-brand transition-colors duration-200">
          <Link to={detailUrl} className="cursor-pointer">
            {organization}
          </Link>
        </h3>

        <p className="mt-1 font-serif text-lg sm:text-xl text-brand font-medium italic">
          {role}
        </p>

        <p className="mt-4 text-sm sm:text-base text-ink-secondary leading-relaxed max-w-3xl">
          {description}
        </p>

        <div className="mt-6 pt-5 border-t border-line/60 flex items-center justify-between">
          <Link
            to={detailUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand hover:text-brand-dark transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
            aria-label={`View details for ${organization}`}
          >
            <span>View Details</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
