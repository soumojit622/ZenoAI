import { Award, Clock, Rocket, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Lightning Fast",
    description:
      "Generate content in seconds, not hours. Boost your productivity by 10x.",
    metric: "10x Faster",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "AI-powered content that matches professional writing standards.",
    metric: "99% Accuracy",
  },
  {
    icon: Zap,
    title: "Simple to Use",
    description: "Intuitive interface that anyone can master in minutes.",
    metric: "2 Min Setup",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "From single posts to enterprise-level content production.",
    metric: "Unlimited Scale",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            <Rocket className="w-4 h-4" />
            Why Choose Us
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Why Choose</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              ZenoAI?
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            Experience the perfect combination of speed, quality, and
            simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-2xl p-8 text-center border border-sky-100 hover:bg-sky-100 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-800 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xl font-bold text-sky-700 mb-2">
                {benefit.metric}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
