
import { Link, useNavigate } from "react-router-dom";
import SafeImage from "./SafeImage";

/**
 * Reusable ExperienceCard.
 *
 * Visual structure:
 * IMAGE
 * CATEGORY / PERIOD / LOCATION
 * ORGANISATION
 * ROLE
 * SHORT DESCRIPTION
 * VIEW DETAILS BUTTON
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
      {/* Image */}
      {image && (
        <div className="shrink-0 md:w-72 lg:w-80">
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
      <div className="flex flex-1 flex-col p-5 sm:p-8">
        {/* Category, Period and Location */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <span className="rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-dark sm:text-[11px]">
                {category}
              </span>
            )}
          </div>

          <div className="text-xs font-medium text-ink-muted sm:text-sm">
            <span>{period}</span>
            {location && <span> , {location}</span>}
          </div>
        </div>

        {/* Organization */}
        <h3 className="font-serif text-2xl font-bold leading-tight text-ink transition-colors duration-200 group-hover:text-brand sm:text-3xl">
          <Link
            to={detailUrl}
            className="cursor-pointer focus:outline-none focus-visible:underline"
          >
            {organization}
          </Link>
        </h3>

        {/* Role */}
        {role && (
          <p className="mt-1 font-serif text-lg font-medium italic text-brand sm:text-xl">
            {role}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-secondary sm:text-base">
            {description}
          </p>
        )}

        {/* View Details Button */}
        <div className="mt-6 border-t border-line/60 pt-5">
          <button
            type="button"
            onClick={() => navigate(detailUrl)}
            aria-label={`View details for ${organization}`}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
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
