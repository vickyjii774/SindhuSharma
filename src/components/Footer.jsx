
import { siteData } from "../data/siteData";

export default function Footer() {
  const { name, title } = siteData.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-dark/20 bg-brand text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-10 sm:text-left lg:px-12 lg:py-12">
        {/* name*/}
        <div className="min-w-0">
          <p className="font-serif text-lg font-bold uppercase tracking-widest text-white sm:text-xl lg:text-2xl">
            {name}
          </p>

          {title && (
            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed tracking-wide text-white/80 sm:mx-0 sm:text-sm">
              {title}
            </p>
          )}
        </div>

        {/* Copyright and Location */}
        <div className="text-xs leading-6 tracking-wide text-white sm:text-right sm:text-sm">
          <p>
          © {name} {currentYear} Kathmandu, Nepal.
          </p>
         
           
          
        </div>
      </div>
    </footer>
  );
}
