import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({
  onSearchInput,
}: {
  onSearchInput: (value: string) => void;
}) => {
  return (
    <section className="bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 py-16 px-6 text-white text-center rounded-b-3xl shadow-xl">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        Discover Stunning Templates
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto">
        Whether you&apos;re building a landing page, blog, or business tool —
        start with the perfect template.
      </p>

      {/* Search Box */}
      <div className="w-full max-w-2xl mx-auto">
        <div
          className="flex items-center gap-3 bg-white text-gray-800 rounded-full px-5 py-3 shadow-lg 
          focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-400 transition-all duration-200"
        >
          <Search className="text-sky-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Search templates..."
            onChange={(e) => onSearchInput(e.target.value)}
            className="w-full bg-transparent outline-none text-base placeholder:text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
