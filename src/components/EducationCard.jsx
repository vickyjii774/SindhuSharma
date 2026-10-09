/**
 * Clean, editorial education item.
 * Displays Qualification, Institution, Location, Period, and Description.
 */
export default function EducationCard({ item }) {
  return (
    <article className="py-6 sm:py-8 border-b border-line last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
      <div className="md:col-span-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand">
        {item.period}
      </div>

      <div className="md:col-span-9">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
          {item.qualification}
        </h3>
        <p className="mt-1 text-sm sm:text-base font-medium text-ink-secondary">
          {item.institution}
          {item.location ? ` — ${item.location}` : ""}
        </p>
        {item.description && (
          <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}
