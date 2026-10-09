
import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Navbar() {
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop Events dropdown
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);

  // Mobile Events accordion
  const [eventsOpen, setEventsOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* --------------------------------
     Navbar scroll effect
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------
     Close menus on route change
  -------------------------------- */
  useEffect(() => {
    setMobileMenuOpen(false);
    setEventsDropdownOpen(false);
    setEventsOpen(false);
  }, [pathname]);

  /* --------------------------------
     Lock body scroll when mobile menu
     is open
  -------------------------------- */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* --------------------------------
     Close desktop dropdown when
     clicking outside
  -------------------------------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setEventsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isEventsActive = pathname.startsWith("/events");

  /* --------------------------------
     Desktop navigation styles
  -------------------------------- */
  const desktopLinkClasses = ({ isActive }) =>
    `relative py-1 text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
      isActive
        ? "text-white after:scale-x-100 font-semibold"
        : "text-white/80 hover:text-white after:scale-x-0"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-brand text-white ${
        scrolled ? "shadow-md py-3 sm:py-4" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* --------------------------------
            Brand
        -------------------------------- */}
      <Link
  to="/"
  className="font-serif text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase text-white hover:text-brand-light transition-colors cursor-pointer select-none"
  aria-label={`${siteData.personal.name} — Home`}
>
  {siteData.personal.name}
</Link>

        {/* --------------------------------
            Desktop Navigation
        -------------------------------- */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
        

          {/* About */}
          <NavLink
            to="/about"
            className={desktopLinkClasses}
          >
            About
          </NavLink>

          {/* Experience */}
          <NavLink
            to="/experience"
            className={desktopLinkClasses}
          >
            Experience
          </NavLink>

          {/* --------------------------------
              Desktop Events Dropdown
          -------------------------------- */}
          <div
            ref={dropdownRef}
            className="relative"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setEventsDropdownOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() =>
                setEventsDropdownOpen((prev) => !prev)
              }
              aria-haspopup="true"
              aria-expanded={eventsDropdownOpen}
              className={`inline-flex items-center gap-1.5 py-1 text-xs sm:text-sm font-medium tracking-wider uppercase cursor-pointer transition-colors duration-200 ${
                isEventsActive
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>Events</span>

              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  eventsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {eventsDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-3 w-56 rounded-sm bg-white py-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
                aria-orientation="vertical"
              >
                {/* All Events */}
                <NavLink
                  to="/events"
                  end
                  role="menuitem"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                      isActive
                        ? "bg-brand-light text-brand-dark"
                        : "text-ink hover:bg-surface-alt hover:text-brand"
                    }`
                  }
                >
                  All Events Overview
                </NavLink>

                <div className="h-[1px] bg-line my-1.5" />

                {/* Event Categories */}
                {siteData.eventCategories.map((category) => (
                  <NavLink
                    key={category.slug}
                    to={`/events/${category.slug}`}
                    role="menuitem"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-xs font-medium tracking-wide uppercase transition-colors cursor-pointer ${
                        isActive
                          ? "bg-brand-light text-brand-dark font-semibold"
                          : "text-ink-secondary hover:bg-surface-alt hover:text-ink"
                      }`
                    }
                  >
                    {category.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={desktopLinkClasses}
          >
            Contact
          </NavLink>
        </nav>

        {/* --------------------------------
            Mobile Hamburger Button
        -------------------------------- */}
        <button
          type="button"
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            setEventsOpen(false);
          }}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            mobileMenuOpen ? "Close menu" : "Open menu"
          }
          className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-white hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* --------------------------------
          Mobile Navigation
          Compact — no full-screen drawer
      -------------------------------- */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden absolute top-full inset-x-0 bg-white text-ink px-5 py-3 border-t border-line shadow-xl"
        >
          <nav className="flex flex-col gap-1">
            {/* Home */}
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-ink hover:bg-surface-alt"
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-ink hover:bg-surface-alt"
                }`
              }
            >
              About
            </NavLink>

            {/* Experience */}
            <NavLink
              to="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-ink hover:bg-surface-alt"
                }`
              }
            >
              Experience
            </NavLink>

            {/* --------------------------------
                Mobile Events Accordion
            -------------------------------- */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setEventsOpen((prev) => !prev)
                }
                aria-expanded={eventsOpen}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold uppercase tracking-wide text-ink hover:bg-surface-alt rounded-sm transition-colors"
              >
                <span>Events</span>

                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    eventsOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {eventsOpen && (
                <div className="ml-4 mt-1 pl-3 border-l border-brand/30 space-y-0.5">
                  {/* Events Overview */}
                  <NavLink
                    to="/events"
                    end
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className={({ isActive }) =>
                      `block px-3 py-1.5 text-xs uppercase tracking-wide rounded-sm transition-colors ${
                        isActive
                          ? "bg-brand-light text-brand-dark font-semibold"
                          : "text-ink-secondary hover:bg-surface-alt"
                      }`
                    }
                  >
                    All Events
                  </NavLink>

                  {/* Event Categories */}
                  {siteData.eventCategories.map((cat) => (
                    <NavLink
                      key={cat.slug}
                      to={`/events/${cat.slug}`}
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className={({ isActive }) =>
                        `block px-3 py-1.5 text-xs uppercase tracking-wide rounded-sm transition-colors ${
                          isActive
                            ? "bg-brand-light text-brand-dark font-semibold"
                            : "text-ink-secondary hover:bg-surface-alt"
                        }`
                      }
                    >
                      {cat.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-ink hover:bg-surface-alt"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
