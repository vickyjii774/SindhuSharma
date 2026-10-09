import SafeImage from "./SafeImage";

export default function MilestoneCard({ item }) {
  return (
    <li className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 last:pb-2 group">
      {/* Timeline Line */}
      <span
        className="absolute left-[11px] top-3 bottom-0 w-[2px] bg-brand/25 group-last:hidden"
        aria-hidden="true"
      />

      {/* Timeline Dot */}
      <span
        className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-brand bg-white flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-brand" />
      </span>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="max-w-2xl">
          <div className="font-serif text-2xl sm:text-3xl font-bold text-brand leading-none mb-2">
            {item.year}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-ink-secondary leading-relaxed">
            {item.description}
          </p>
        </div>

        {item.image && (
          <div className="w-full sm:w-64 shrink-0 rounded-sm overflow-hidden border border-line">
            <SafeImage
              src={item.image}
              alt={item.title}
              ratio="ratio-4-3"
              zoom
            />
          </div>
        )}
      </div>
    </li>
  );
}
