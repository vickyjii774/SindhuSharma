
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();

  // Scroll to the top whenever the page route changes.
  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });

  const handleNavigationClick = (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    const url = new URL(link.href, window.location.origin);

    if (
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname
    ) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  document.addEventListener("click", handleNavigationClick);

  return () => {
    document.removeEventListener("click", handleNavigationClick);
  };
}, [pathname]);

  // Show the floating button after scrolling down.
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll when the floating button is clicked.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed
        bottom-6 right-6
        sm:bottom-8 sm:right-8
        z-50
        w-11 h-11
        sm:w-12 sm:h-12
        rounded-full
        bg-green-600
        text-white
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        hover:bg-green-700
        hover:scale-110
        focus:outline-none
        focus:ring-2
        focus:ring-green-400
        focus:ring-offset-2
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
