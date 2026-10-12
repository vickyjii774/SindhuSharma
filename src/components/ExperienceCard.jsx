
import { Link, useNavigate } from "react-router-dom";
import SafeImage from "./SafeImage";

/**
 * Reusable ExperienceCard.
 * Mobile: image left, content right, button across bottom.
 * Desktop: existing horizontal image and content layout.
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
    <article className="group overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:border-brand/60 hover:shadow-md">
      {/* Image and Content */}
      <div className="flex flex-row md:flex-row">
        {/* Cover Image */}
        {image && (
          <div className="w-28 shrink-0 self-stretch overflow-hidden sm:w-48 md:w-72 lg:w-80">
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
        <div className="flex min-w-0 flex-1 flex-col p-2.5 sm:p-8">
          {/* Category, Period and Location */}
          
{/* Category, Period and Location */}
<div className="mb-2 flex flex-col items-start gap-1.5 sm:mb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
  {category && (
    <span className="rounded-full bg-brand-light px-2 py-1 text-[8px] font-semibold uppercase tracking-wide text-brand-dark sm:px-2.5 sm:py-1 sm:text-[11px] sm:tracking-widest">
      {category}
    </span>
  )}

  <div className="text-[9px] font-medium text-ink-muted sm:text-sm">
    <span>{period}</span>
    {location && <span>, {location}</span>}
  </div>
</div>


          {/* Organization */}
          <h3 className="break-words font-serif text-base font-bold leading-tight text-ink transition-colors duration-200 group-hover:text-brand sm:text-3xl">
            <Link
              to={detailUrl}
              className="cursor-pointer focus:outline-none focus-visible:underline"
            >
              {organization}
            </Link>
          </h3>

          {/* Role */}
          {role && (
            <p className="mt-1 break-words font-serif text-xs font-medium italic text-brand sm:text-xl">
              {role}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-ink-secondary sm:mt-4 sm:line-clamp-none sm:text-base">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Full-width View Details Button at Bottom */}
      <div className="border-t border-line/60 px-2.5 py-2 sm:px-8 sm:py-4 md:ml-72 lg:ml-80">
        <button
          type="button"
          onClick={() => navigate(detailUrl)}
          aria-label={`View details for ${organization}`}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:px-5 sm:py-3 sm:text-xs sm:tracking-widest"
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
    </article>
  );
}
