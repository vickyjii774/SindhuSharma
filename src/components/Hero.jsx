
import { siteData } from "../data/siteData";
import Button from "./Button";
import SafeImage from "./SafeImage";
import Container from "./Container";
import { MapPin } from "lucide-react";

export default function Hero() {
  const { name, title, heroIntro, profileImage } = siteData.personal;

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <section
      aria-labelledby="hero-name"
      className="relative overflow-hidden border-b border-line bg-surface pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32"
    >
      <Container>
        <div className="grid grid-cols-12 items-center gap-4 sm:gap-8 lg:gap-16">
          {/* Text — LEFT on mobile and desktop */}
          <div className="col-span-7 order-1 flex min-w-0 flex-col items-start">
           

            <h1
              id="hero-name"
              className="font-serif text-2xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-7xl"
            >
              {name}
            </h1>

            <p className="mt-3 font-serif text-sm font-medium italic text-brand sm:mt-4 sm:text-2xl lg:text-3xl">
              {title}
            </p>

            <p className="mt-4 max-w-2xl font-sans text-xs leading-relaxed text-ink-secondary sm:mt-6 sm:text-lg">
              {heroIntro}
            </p>

            {/* Compact mobile buttons; normal desktop buttons */}
            <div className="mt-6 flex w-full flex-nowrap items-center gap-2 sm:mt-10 sm:gap-4">
              <Button
                to="/events"
                className="w-auto whitespace-nowrap px-2.5 py-2 text-[10px] sm:px-4 sm:py-2.5 sm:text-sm"
              >
                View My Work
              </Button>

              <Button
                to="/contact"
                variant="outline"
                className="w-auto whitespace-nowrap px-2.5 py-2 text-[10px] sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Image — RIGHT on mobile and desktop */}
         
{/* Hero Visual Card — RIGHT */}
<div className="col-span-5 order-2 flex justify-end">
  <div className="relative w-full max-w-[140px] sm:max-w-[320px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 group">

    <img
      src={siteData.personal.profileImage || " "}
      alt={`Portrait of ${siteData.personal.name}`}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
    />

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex flex-col justify-end p-2 sm:p-5 text-white">

      {/* Location */}
      <span className="text-[7px] sm:text-[11px] font-medium tracking-wider text-zinc-300 flex items-center gap-1 mb-1">
        <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
        <span>Based in Kathmandu, Nepal</span>
      </span>

      {/* Profession */}
      <p className="text-[7px] sm:text-sm font-light ">
      {siteData.personal.title}
      </p>
    </div>
  </div>
</div>

        </div>
      </Container>
    </section>
  );
}
