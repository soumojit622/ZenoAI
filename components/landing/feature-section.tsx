import {
  BookOpen,
  Code,
  FileText,
  Hash,
  Instagram,
  Lightbulb,
  PenTool,
  RefreshCw,
  Smile,
  Sparkles,
  Tag,
  Video,
  Youtube,
} from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "Blog Generator",
    description:
      "Create engaging, SEO-optimized blog posts on any topic in minutes.",
    mockup: {
      input: "Write about sustainable living",
      output: "10 Simple Ways to Live More Sustainably in 2024",
    },
  },
  {
    icon: Lightbulb,
    title: "Idea Generator",
    description:
      "Generate compelling titles and trending topic ideas that capture attention.",
    mockup: {
      input: "Tech startup ideas",
      output: "AI-Powered Personal Finance Assistant",
    },
  },
  {
    icon: Youtube,
    title: "YouTube SEO",
    description:
      "Craft optimized titles, descriptions, and tags for maximum reach.",
    mockup: {
      input: "Cooking tutorial video",
      output: "Easy 15-Min Pasta Recipe | Beginner Friendly",
    },
  },
  {
    icon: RefreshCw,
    title: "Text Improver",
    description:
      "Enhance your writing with AI-powered rewrites and improvements.",
    mockup: {
      input: "This is good content",
      output: "This content delivers exceptional value",
    },
  },
  {
    icon: Smile,
    title: "Emoji Enhancer",
    description:
      "Add perfect emojis to make your content more engaging and expressive.",
    mockup: {
      input: "Great news everyone!",
      output: "🎉 Great news everyone! 🚀",
    },
  },
  {
    icon: Instagram,
    title: "Instagram Posts",
    description:
      "Create scroll-stopping Instagram posts that drive engagement.",
    mockup: {
      input: "Morning coffee routine",
      output: "☕ Perfect morning vibes ✨ #MorningRitual",
    },
  },
  {
    icon: Video,
    title: "Reel Ideas",
    description:
      "Generate viral-worthy reel concepts and scripts for social media.",
    mockup: {
      input: "Productivity tips",
      output: "5 Productivity Hacks That Changed My Life",
    },
  },
  {
    icon: Hash,
    title: "Hashtag Generator",
    description:
      "Find the perfect hashtags to maximize your content's discoverability.",
    mockup: {
      input: "Fitness motivation",
      output: "#FitnessMotivation #HealthyLifestyle #WorkoutTips",
    },
  },
  {
    icon: Code,
    title: "Code Generator",
    description:
      "Generate clean, efficient code in multiple programming languages.",
    mockup: {
      input: "React button component",
      output: "const Button = ({ children, onClick }) => {",
    },
  },
  {
    icon: BookOpen,
    title: "Code Explainer",
    description:
      "Get clear explanations for complex code snippets and functions.",
    mockup: {
      input: "useState hook",
      output: "Manages component state in React...",
    },
  },
  {
    icon: Tag,
    title: "Tagline Creator",
    description: "Create memorable taglines that capture your brand's essence.",
    mockup: {
      input: "Eco-friendly products",
      output: "Green Today, Better Tomorrow",
    },
  },
  {
    icon: FileText,
    title: "Product Descriptions",
    description:
      "Write compelling product descriptions that convert browsers to buyers.",
    mockup: {
      input: "Wireless headphones",
      output: "Premium sound meets wireless freedom...",
    },
  },
];

export function FeatureSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky-200 rounded-full opacity-15 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            <Sparkles className="w-4 h-4" />
            Powerful AI Tools
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Everything You Need</span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              to Create Amazing Content
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            From blog posts to code, ZenoAI provides specialized tools for every
            type of content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-200 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-3 border border-sky-200">
                <div className="text-xs text-gray-500 mb-1">Input:</div>
                <div className="text-xs text-gray-700 mb-2 font-medium">
                  &quot;{feature.mockup.input}&quot;
                </div>
                <div className="text-xs text-gray-500 mb-1">Output:</div>
                <div className="text-xs text-sky-700 font-semibold">
                  &quot;{feature.mockup.output}&quot;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
