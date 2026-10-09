import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";
import { getCategoryImage } from "../data/siteData";

/**
 * Event category card used on Home and Events overview.
 */
export default function CategoryCard({ category, featured = false }) {
  const detailUrl = `/events/${category.slug}`;
  const image = getCategoryImage(category);

  return (
    <article
      className={`group bg-white border border-line rounded-sm overflow-hidden transition-all duration-300 hover:border-brand/60 hover:shadow-md flex flex-col ${
        featured ? "md:grid md:grid-cols-12 md:items-center" : ""
      }`}
    >
      <Link
        to={detailUrl}
        className={`block overflow-hidden cursor-pointer ${
          featured ? "md:col-span-6 lg:col-span-7 h-full" : ""
        }`}
        aria-label={`Explore ${category.label} events`}
      >
        <SafeImage
          src={image}
          alt={`${category.label} events`}
          ratio={featured ? "ratio-16-9" : "ratio-4-3"}
          zoom
          className="w-full h-full object-cover"
        />
      </Link>

      <div
        className={`flex flex-col flex-1 p-6 sm:p-8 ${
          featured ? "md:col-span-6 lg:col-span-5" : ""
        }`}
      >
        <span className="font-sans text-xs font-semibold tracking-widest uppercase text-brand mb-2">
          Category
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-brand transition-colors duration-200">
          <Link to={detailUrl} className="cursor-pointer">
            {category.label}
          </Link>
        </h3>

        <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed line-clamp-3 mb-6">
          {category.description}
        </p>

        <div className="mt-auto pt-4 border-t border-line/60">
          <Link
            to={detailUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand hover:text-brand-dark transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
          >
            <span>Explore Events</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
