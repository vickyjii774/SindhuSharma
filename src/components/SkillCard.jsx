/**
 * Clean SkillTag / SkillCard.
 * Simple, elegant pill tag with hover transition.
 */
export default function SkillCard({ skill, small = false }) {
  return (
    <li
      className={`inline-flex items-center rounded-full border border-line bg-white font-medium text-neutral-800 transition-all duration-200 hover:border-brand hover:text-brand hover:bg-brand-light/20 select-none ${
        small
          ? "px-3 py-1 text-xs tracking-wide"
          : "px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm tracking-wide shadow-xs"
      }`}
    >
      {skill}
    </li>
  );
}
