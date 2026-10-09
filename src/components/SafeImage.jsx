import { useEffect, useState } from "react";

const RATIO_MAP = {
  "ratio-4-3": "aspect-[4/3]",
  "ratio-3-2": "aspect-[3/2]",
  "ratio-16-9": "aspect-[16/9]",
  "ratio-4-5": "aspect-[4/5]",
  "ratio-1-1": "aspect-square",
  "ratio-square": "aspect-square",
};

/**
 * Image with graceful fallback: renders a clean editorial placeholder
 * when `src` is missing or fails to load.
 */
export default function SafeImage({
  src,
  alt,
  ratio = "ratio-4-3",
  className = "",
  zoom = false,
  eager = false,
  placeholderText = "",
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const showImage = Boolean(src) && !failed;
  const aspectClass = RATIO_MAP[ratio] || ratio || "aspect-[4/3]";

  return (
    <div
      className={`relative overflow-hidden bg-brand-light/40 rounded-sm ${aspectClass} ${className}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || "Image"}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            zoom ? "group-hover:scale-105 hover:scale-105" : ""
          }`}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#E8EFE7] to-[#DFE7DE] text-ink-muted/50 select-none"
          role="img"
          aria-label={alt || "Placeholder image"}
        >
          {placeholderText ? (
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-widest uppercase text-brand-dark/40">
              {placeholderText}
            </span>
          ) : (
            <svg
              className="h-10 w-10 text-brand-dark/25"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}
