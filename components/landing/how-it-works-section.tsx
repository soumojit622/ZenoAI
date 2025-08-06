import {
  MessageSquare,
  Zap,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us What You Need",
    description:
      "Simply describe the content you want to create in plain English",
    example: "Write a blog about healthy recipes",
  },
  {
    icon: Zap,
    title: "AI Works Its Magic",
    description: "Our advanced AI generates high-quality content in seconds",
    example: "Creating amazing content...",
  },
  {
    icon: Download,
    title: "Get Your Content",
    description:
      "Copy, edit, and publish your ready-to-use professional content",
    example: "5 Healthy Recipes for Busy People",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Sky-themed Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-sky-100 rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Sky-themed Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            <Sparkles className="w-4 h-4" />
            Simple Process
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">How It</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-xl text-sky-700">
            Create amazing content in just 3 simple steps
          </p>
        </div>

        {/* Sky-themed Cards with Perfect Arrows */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Sky-themed Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-sky-600 rounded-full shadow-lg border-2 border-sky-200 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                {/* Sky-themed Cards */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-sky-200 shadow-xl hover:shadow-2xl hover:border-sky-300 transition-all duration-300 h-full flex flex-col">
                  {/* Sky-themed Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="text-sm font-bold text-sky-600 mb-2">
                    STEP {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-sky-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sky-700 leading-relaxed mb-6 flex-grow">
                    {step.description}
                  </p>

                  {/* Sky-themed Example Box */}
                  <div className="bg-sky-50 rounded-xl p-4 border-2 border-sky-200 shadow-sm">
                    <div className="text-xs text-sky-600 mb-2 uppercase tracking-wide font-semibold">
                      Example
                    </div>
                    <div className="text-sm text-sky-800 font-medium italic">
                      &quot;{step.example}&quot;
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sky-themed CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-sky-200 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-sky-900 mb-4">
              Ready to get started?
            </h3>
            <button className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Start Creating Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-sky-600 mt-3">No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
