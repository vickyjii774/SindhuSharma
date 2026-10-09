import SafeImage from "./SafeImage";
import Gallery from "./Gallery";

export default function AdvocacyCard({ item }) {
  return (
    <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 lg:gap-10">
      {/* Left: Text Without Container */}
      <div className="flex min-w-0 flex-col py-1 sm:py-3">
        <h3 className="font-serif text-base font-bold leading-snug text-ink transition-colors duration-200 hover:text-brand sm:text-2xl lg:text-3xl">
          {item.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-ink-secondary sm:mt-4 sm:text-sm lg:text-base lg:leading-7">
          {item.description}
        </p>

        {item.gallery && item.gallery.length > 0 && (
          <div className="mt-4 border-t border-line pt-4 sm:mt-6 sm:pt-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand">
              Gallery
            </h4>

            <Gallery
              images={item.gallery}
              altPrefix={item.title}
            />
          </div>
        )}
      </div>

      {/* Right: Image Container */}
      <div className="min-w-0 overflow-hidden rounded-xl border border-line bg-white shadow-sm">
        <SafeImage
          src={item.image}
          alt={item.title}
          ratio="ratio-4-3"
          zoom
          className="w-full"
        />
      </div>
    </div>
  );
}