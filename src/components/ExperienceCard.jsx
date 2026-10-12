
import { Link, useNavigate } from "react-router-dom";
import SafeImage from "./SafeImage";

/**
 * Reusable ExperienceCard.
 * Compact mobile layout with larger desktop styling.
 */
export default function ExperienceCard({ experience }) {
  const navigate = useNavigate();

  const {
    id,
    organization,
    role,
    period,
    location,
    category,
    description,
    image,
  } = experience;

  const detailUrl = `/experience/${id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:border-brand/60 hover:shadow-md md:flex-row">
      {/* Cover Image */}
      {image && (
        <div className="h-28 shrink-0 overflow-hidden sm:h-48 md:h-auto md:w-72 lg:w-80">
          <Link
            to={detailUrl}
            aria-label={`View experience details for ${organization}`}
            className="block h-full cursor-pointer overflow-hidden"
          >
            <SafeImage
              src={image}
              alt={organization}
              ratio="ratio-4-3"
              zoom
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-8">
        {/* Category, Period and Location */}
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 sm:mb-3 sm:gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <span className="rounded-full bg-brand-light px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-brand-dark sm:px-2.5 sm:py-1 sm:text-[11px] sm:tracking-widest">
                {category}
              </span>
            )}
          </div>

          <div className="text-[10px] font-medium text-ink-muted sm:text-sm">
            <span>{period}</span>
            {location && <span>, {location}</span>}
          </div>
        </div>

        {/* Organization */}
        <h3 className="font-serif text-lg font-bold leading-tight text-ink transition-colors duration-200 group-hover:text-brand sm:text-3xl">
          <Link
            to={detailUrl}
            className="cursor-pointer focus:outline-none focus-visible:underline"
          >
            {organization}
          </Link>
        </h3>

        {/* Role */}
        {role && (
          <p className="mt-1 font-serif text-sm font-medium italic text-brand sm:text-xl">
            {role}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-ink-secondary sm:mt-4 sm:text-base">
            {description}
          </p>
        )}

        {/* View Details Button */}
        <div className="mt-4 border-t border-line/60 pt-3 sm:mt-6 sm:pt-5">
          <button
            type="button"
            onClick={() => navigate(detailUrl)}
            aria-label={`View details for ${organization}`}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:px-5 sm:py-3 sm:text-xs"
          >
            <span>View Details</span>
            <span
              aria-hidden="true"
              className="text-base transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
