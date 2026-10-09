import SafeImage from "./SafeImage";
import Gallery from "./Gallery";

/**
 * AdvocacyCard for causes and social impact initiatives.
 * Large visual presentation with title, description, and gallery if available.
 */
export default function AdvocacyCard({ item }) {
  return (
    <article className="group bg-white border border-line rounded-sm overflow-hidden transition-all duration-300 hover:border-brand/60 hover:shadow-md flex flex-col">
      <SafeImage
        src={item.image}
        alt={item.title}
        ratio="ratio-16-9"
        zoom
        className="w-full"
      />

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-brand transition-colors duration-200">
          {item.title}
        </h3>

        <p className="mt-4 text-sm sm:text-base text-ink-secondary leading-relaxed">
          {item.description}
        </p>

        {item.gallery && item.gallery.length > 0 && (
          <div className="mt-6 pt-6 border-t border-line">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-brand mb-3">
              Gallery
            </h4>
            <Gallery images={item.gallery} altPrefix={item.title} />
          </div>
        )}
      </div>
    </article>
  );
}
