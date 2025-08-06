"use client";

import { Heart, Pause, Play, Quote, Star, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Content Marketing Lead",
    company: "ContentVerse",
    content:
      "ZenoAI has revolutionized our blog workflow. We're publishing 5x more content effortlessly.",
    rating: 5,
    metric: "5x More Content",
    avatar: "AM",
  },
  {
    name: "Priya Singh",
    role: "Senior Software Engineer",
    company: "TechBharat",
    content:
      "The code generation tools are a game-changer. I save hours every week writing boilerplate and comments.",
    rating: 5,
    metric: "10hrs Saved/Week",
    avatar: "PS",
  },
  {
    name: "Ritika Sharma",
    role: "Digital Influencer",
    company: "Freelance",
    content:
      "Using ZenoAI’s post and hashtag generator, my Instagram engagement jumped by over 200%.",
    rating: 5,
    metric: "200% More Engagement",
    avatar: "RS",
  },
  {
    name: "Kabir Nair",
    role: "Startup Founder",
    company: "IdeaForge",
    content:
      "ZenoAI powers all our content—from landing pages to product copy. It’s like having a full writing team.",
    rating: 5,
    metric: "100% Content Covered",
    avatar: "KN",
  },
  {
    name: "Ananya Iyer",
    role: "YouTube Creator",
    company: "TechTadka",
    content:
      "Thanks to the YouTube SEO tools in ZenoAI, I crossed 100K subscribers way faster than I expected.",
    rating: 5,
    metric: "100K Subscribers",
    avatar: "AI",
  },
  {
    name: "Rohan Kapoor",
    role: "Marketing Head",
    company: "GrowSphere",
    content:
      "ZenoAI replaced multiple content tools for us and cut our content budget by 80%. It’s incredibly efficient.",
    rating: 5,
    metric: "80% Cost Reduction",
    avatar: "RK",
  },
];

export function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [translateX, setTranslateX] = useState(0);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const cardWidth = 400;
        const newTranslateX = prev - 1;

        if (Math.abs(newTranslateX) >= cardWidth * testimonials.length) {
          return 0;
        }

        return newTranslateX;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isPlaying]); // ✅ Fixed

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Sky-themed Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            Customer Love
            <Heart className="w-4 h-4 text-sky-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sky-900">Loved by</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              Creators Worldwide
            </span>
          </h2>

          <p className="text-xl text-sky-700">
            Join thousands of creators who trust ZenoAI for their content needs
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Sky-themed Play/Pause Control */}
          <div className="flex justify-center mb-8">
            <button
              onClick={togglePlayPause}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-sky-200 hover:shadow-xl hover:border-sky-300 transition-all duration-300"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-medium text-sky-700">
                    Pause
                  </span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-medium text-sky-700">Play</span>
                </>
              )}
            </button>
          </div>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform ease-linear"
              style={{
                transform: `translateX(${translateX}px)`,
                width: `${duplicatedTestimonials.length * 400}px`,
              }}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-sky-200 hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
                >
                  {/* Sky-themed Quote Icon */}
                  <div className="flex justify-end mb-4">
                    <Quote className="w-8 h-8 text-sky-300" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sky-800 leading-relaxed mb-6 font-medium">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Sky-themed Metric Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-6 shadow-lg">
                    <TrendingUp className="w-3 h-3" />
                    {testimonial.metric}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sky-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-sky-700">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sky-themed Gradient Overlays for Smooth Edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-sky-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-sky-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Sky-themed Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-sky-200 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
            <div className="text-3xl font-bold text-sky-900 mb-2">4.9/5</div>
            <div className="text-sky-700">Average Rating</div>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-sky-200 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div className="text-3xl font-bold text-sky-900 mb-2">50K+</div>
            <div className="text-sky-700">Happy Users</div>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-sky-200 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-sky-900 mb-2">10M+</div>
            <div className="text-sky-700">Content Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
