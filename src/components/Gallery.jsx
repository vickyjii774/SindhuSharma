import { useEffect, useState } from "react";
import SafeImage from "./SafeImage";

/**
 * Responsive Gallery with keyboard-accessible lightbox modal.
 * Desktop: 2-3 columns. Mobile: 1 column.
 */
export default function Gallery({ images = [], altPrefix = "Gallery photo" }) {
  const [active, setActive] = useState(null);
  const valid = images.filter(Boolean);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  if (!valid.length) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {valid.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Open ${altPrefix} ${i + 1} in lightbox`}
            className="group block w-full text-left overflow-hidden rounded-sm border border-line bg-white cursor-pointer transition-all duration-300 hover:border-brand/60 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`${altPrefix} ${active + 1}`}
          onClick={() => setActive(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image lightbox"
            autoFocus
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Image */}
          <div
            className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={valid[active]}
              alt={`${altPrefix} ${active + 1}`}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-xs sm:text-sm font-sans flex items-center justify-between">
              <span>{`${altPrefix} (${active + 1} of ${valid.length})`}</span>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-white/80 hover:text-white cursor-pointer underline text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
