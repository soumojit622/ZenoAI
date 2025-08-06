import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, Clock, FileText } from "lucide-react";

const blogPosts = [
  {
    title: "10 AI Content Creation Tips That Will Transform Your Strategy",
    excerpt:
      "Discover proven strategies to maximize your content output while maintaining quality and authenticity.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["AI", "Content Strategy", "Tips"],
  },
  {
    title: "The Future of Content Marketing: AI-Powered Workflows",
    excerpt:
      "How artificial intelligence is reshaping content marketing and what it means for creators and brands.",
    date: "2024-01-12",
    readTime: "7 min read",
    tags: ["Marketing", "AI", "Future"],
  },
  {
    title: "From Blank Page to Published: A Creator's Guide to AI Writing",
    excerpt:
      "Step-by-step guide to using AI tools effectively while maintaining your unique voice and style.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Writing", "Guide", "Creators"],
  },
];

export function BlogSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            Latest Insights
            <BookOpen className="w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Latest from</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              Our Blog
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            Tips, insights, and updates from the ZenoAI team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-sky-50 rounded-2xl overflow-hidden border border-sky-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                <FileText className="w-12 h-12 text-sky-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-sky-700 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 border border-sky-300 px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-sky-100 hover:text-sky-900 hover:shadow-md"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-sky-200 text-sky-700 hover:bg-sky-50 "
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
