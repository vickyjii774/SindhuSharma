export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  id,
  className = "",
}) {
  return (
    <div
      className={`mb-10 sm:mb-14 lg:mb-16 max-w-3xl ${
        center ? "mx-auto text-center items-center flex flex-col" : ""
      } ${className}`}
    >
      {eyebrow && (
        <span className="block font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand mb-2 sm:mb-3">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          id={id}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.15]"
        >
          {title}
        </h2>
      )}
      {text && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
          {text}
        </p>
      )}
    </div>
  );
}
