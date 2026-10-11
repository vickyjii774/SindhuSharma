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
      className={`mb-5 sm:mb-7 lg:mb-8 w-full max-w-3xl ${
        center ? "mx-auto text-center items-center flex flex-col" : ""
      } ${className}`}
    >
      {eyebrow && (
        <span className="mb-2 block font-sans text-[10px] font-semibold uppercase tracking-widest text-brand sm:mb-2 sm:text-sm">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          id={id}
          className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
      )}

      {text && (
        <p className="mt-2 w-full whitespace-normal text-xs leading-5 text-ink-secondary font-sans sm:mt-3 sm:text-base sm:leading-relaxed">
          {text}
        </p>
      )}
    </div>
  );
}