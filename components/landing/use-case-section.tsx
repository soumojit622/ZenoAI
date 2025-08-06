import { Code2, Target, TrendingUp, Users } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Marketing Teams",
    description:
      "Scale content production with AI-generated blog posts, social media content, and ad copy that converts.",
    features: [
      "Blog articles",
      "Social media posts",
      "Ad copy",
      "Email campaigns",
    ],
  },
  {
    icon: Code2,
    title: "Developers",
    description:
      "Generate clean code, documentation, and explanations to accelerate development workflows.",
    features: [
      "Code generation",
      "Documentation",
      "Code explanations",
      "API docs",
    ],
  },
  {
    icon: Users,
    title: "Content Creators",
    description:
      "Create engaging content for YouTube, Instagram, and blogs with optimized titles and descriptions.",
    features: [
      "YouTube content",
      "Instagram posts",
      "Blog writing",
      "SEO optimization",
    ],
  },
];

export function UseCaseSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sky-200 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-sky-300 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sky-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            <Target className="w-4 h-4" />
            Perfect for Everyone
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Built for</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              Every Creator
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            Whether you&apos;re a marketer, developer, or content creator,
            ZenoAI adapts to your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6">
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
