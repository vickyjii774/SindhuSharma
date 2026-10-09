
import SafeImage from "./SafeImage";

export default function MilestoneCard({ item, showYear = true }) {
  return (
    <li className="group relative pb-10 pl-8 last:pb-2 sm:pb-12 sm:pl-10">
      {/* Timeline Line */}
      <span
        className="absolute bottom-0 left-[11px] top-3 w-[2px] bg-brand/25 group-last:hidden"
        aria-hidden="true"
      />

      {/* Timeline Dot */}
      <span
        className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand bg-white shadow-sm transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-brand" />
      </span>

      {/* Title and Year — Full Width */}
      <div className="min-w-0">
        {showYear && item?.year && (
          <div className="mb-2 font-serif text-xl font-bold leading-tight text-brand sm:text-3xl">
            {item.year}
          </div>
        )}

        <h3 className="break-words font-serif text-base font-bold leading-snug text-ink sm:text-2xl">
          {item?.title}
        </h3>

        {item?.location && (
          <p className="mt-1 break-words text-xs leading-5 text-ink-secondary sm:text-base">
            {item.location}
          </p>
        )}
      </div>

      {/* Description on the Left, Image on the Right */}
      {(item?.description || item?.image) && (
        <div className="mt-3 flex items-start gap-3 sm:mt-4 sm:gap-5">
          {item?.description && (
            <p className="min-w-0 flex-1 break-words text-xs leading-relaxed text-ink-secondary sm:text-base sm:leading-relaxed">
              {item.description}
            </p>
          )}

          {item?.image && (
            <div className="w-28 shrink-0 overflow-hidden rounded-xl border border-line transition-all duration-300 hover:scale-105 hover:border-brand sm:w-64">
              <SafeImage
                src={item.image}
                alt={item?.title || "Milestone"}
                ratio="ratio-4-3"
                zoom
              />
            </div>
          )}
        </div>
      )}
    </li>
  );
}
