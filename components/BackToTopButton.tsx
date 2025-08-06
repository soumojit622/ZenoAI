"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import clsx from "clsx";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={clsx(
        "fixed bottom-6 right-6 z-50 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="group relative">
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 text-white shadow-lg hover:shadow-sky-400/60 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 p-3 rounded-full cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <span className="absolute -top-10 right-1/2 translate-x-1/2 text-xs bg-sky-900/90 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Back to Top
        </span>
      </div>
    </div>
  );
}
