import {
  Clock,
  Award,
  Zap,
  TrendingUp,
  Sparkles,
  Shield,
  Users,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Lightning Fast",
    description:
      "Generate high-quality content in seconds, not hours. Boost your productivity instantly.",
    metric: "10x Faster",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "AI-powered content that matches professional writing standards every time.",
    metric: "99% Accuracy",
  },
  {
    icon: Zap,
    title: "Simple to Use",
    description:
      "Intuitive interface that anyone can master in minutes. No learning curve required.",
    metric: "2 Min Setup",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solution",
    description:
      "From single posts to enterprise-level content production. Grows with your needs.",
    metric: "Unlimited Scale",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your data is protected with enterprise-grade security. We never store your content.",
    metric: "100% Secure",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description:
      "Join 50,000+ creators who trust ZenoAI for their content creation needs.",
    metric: "50K+ Users",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 relative overflow-hidden">
      {/* Sky-themed Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky-500 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-sky-300 rounded-full opacity-25"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-sky-400 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Sky-themed Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/30 backdrop-blur-sm text-sky-100 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sky-400/50 shadow-lg">
            <Rocket className="w-4 h-4" />
            Why Choose Us
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose</span>{" "}
            <span className="text-sky-200">ZenoAI?</span>
          </h2>

          <p className="text-xl text-sky-100 leading-relaxed">
            Experience the perfect combination of speed, quality, and simplicity
            in content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-sky-400/30 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group"
            >
              {/* Sky-themed Icon */}
              <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <reason.icon className="w-8 h-8 text-sky-900" />
              </div>

              {/* Metric */}
              <div className="text-lg font-bold text-sky-200 mb-2">
                {reason.metric}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sky-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sky-themed Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-sky-400/20 backdrop-blur-sm text-sky-100 px-6 py-3 rounded-full border border-sky-300/50 shadow-lg">
            <Award className="w-4 h-4" />
            <span className="font-medium">
              30-day money-back guarantee on all paid plans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
