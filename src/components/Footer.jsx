import { siteData } from "../data/siteData";

export default function Footer() {
  const { name, motto } = siteData.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white border-t border-brand-dark/20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl sm:text-2xl font-bold tracking-widest uppercase text-white">
            {name}
          </p>
          {motto && (
            <p className="mt-1 text-xs sm:text-sm text-white/80 font-sans tracking-wide max-w-md">
              {motto}
            </p>
          )}
        </div>
        <div className="text-xs sm:text-sm text-white/75 font-sans tracking-wider uppercase sm:text-right">
          © {currentYear} {name},<p className="text-blue-800"> Kathmandu Nepal.</p>
        </div>
      </div>
    </footer>
  );
}
