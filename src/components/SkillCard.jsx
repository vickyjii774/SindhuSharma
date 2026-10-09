
/**
 * Clean SkillTag / SkillCard.
 * Responsive pill tags with a smooth hover transition.
 */
export default function SkillCard({ skill, small = false }) {
  return (
    <li
      className={`inline-flex select-none items-center rounded-full border border-line bg-white font-medium text-neutral-800 transition-all duration-200 hover:border-brand hover:bg-brand-light/20 hover:text-brand ${
        small
          ? "px-3 py-1 text-xs tracking-wide"
          : "px-3 py-1.5 text-[11px] tracking-wide shadow-sm sm:px-4 sm:py-2 sm:text-xs lg:px-5 lg:py-2.5 lg:text-sm"
      }`}
    >
      {skill}
    </li>
  );
}
