
import { useEffect, useState } from "react";
import SafeImage from "./SafeImage";

export default function Gallery({
  images = [],
  altPrefix = "Gallery photo",
  className = "",
}) {
  const [active, setActive] = useState(null);
  const valid = images.filter(Boolean);

  const showPrevious = () => {
    setActive((current) =>
      current === null
        ? null
        : (current - 1 + valid.length) % valid.length
    );
  };

  const showNext = () => {
    setActive((current) =>
      current === null
        ? null
        : (current + 1) % valid.length
    );
  };

  useEffect(() => {
    if (active === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, valid.length]);

  if (!valid.length) return null;

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${className}`}
      >
        {valid.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Open ${altPrefix} ${i + 1} in lightbox`}
            className="group block w-full cursor-pointer overflow-hidden rounded-sm border border-line bg-white text-left transition-all duration-300 hover:border-brand/60 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <SafeImage
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              ratio="ratio-4-3"
              zoom
              className="w-full"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${altPrefix} ${active + 1} of ${valid.length}`}
          onClick={() => setActive(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image lightbox"
            autoFocus
            className="absolute right-4 top-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Image */}
          {valid.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-12 sm:w-12"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Image and Counter */}
          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center overflow-hidden rounded-lg bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={valid[active]}
              alt={`${altPrefix} ${active + 1}`}
              className="max-h-[82vh] max-w-full object-contain"
            />

            <div className="flex w-full items-center justify-between gap-4 bg-black px-4 py-3 text-xs text-white sm:text-sm">
              <span className="min-w-0 truncate">
                {altPrefix} {active + 1}
              </span>
              <span className="shrink-0 font-medium text-white/75">
                {active + 1} / {valid.length}
              </span>
            </div>
          </div>

          {/* Next Image */}
          {valid.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-12 sm:w-12"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
