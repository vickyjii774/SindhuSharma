
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import SafeImage from "./SafeImage";
import { getCategoryImage } from "../data/siteData";

/**
 * Reusable event category card for the Home page
 * and Events overview page.
 */
export default function CategoryCard({ category }) {
  if (!category) return null;

  const detailUrl = `/events/${category.slug}`;
  const image = getCategoryImage(category);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#E0E7E0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#AFC4B0] hover:shadow-lg">
      {/* Category Image */}
      <Link
        to={detailUrl}
        aria-label={`Explore ${category.label} events`}
        className="block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#588157]"
      >
        <SafeImage
          src={image}
          alt={`${category.label} events`}
          ratio="ratio-4-3"
          zoom
          className="w-full"
        />
      </Link>

      {/* Category Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        {/* Eyebrow */}
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E8F0EA] text-[#588157] transition-colors duration-300 group-hover:bg-[#588157] group-hover:text-white">
            <CalendarDays size={15} aria-hidden="true" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#588157] sm:text-xs">
            Event Category
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold leading-snug text-[#17251D] transition-colors duration-200 group-hover:text-[#588157] sm:text-xl lg:text-2xl">
          <Link
            to={detailUrl}
            className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#588157]"
          >
            {category.label}
          </Link>
        </h3>

        {/* Description */}
        {category.description && (
          <p className="mt-2 mb-5 line-clamp-3 text-sm leading-6 text-[#626D65]">
            {category.description}
          </p>
        )}

        {/* Explore Button */}
        <div className="mt-auto border-t border-[#E8ECE8] pt-4">
          <Link
            to={detailUrl}
            aria-label={`Explore ${category.label} events`}
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#588157] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3F6240] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#588157] focus-visible:ring-offset-2 sm:w-auto"
          >
            <span>Explore Events</span>
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
