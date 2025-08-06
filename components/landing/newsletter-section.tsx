import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Send } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sky-200 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-sky-300 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sky-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Enhanced Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            Stay Connected
            <Send className="w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Stay Updated with</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              ZenoAI
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Get the latest updates, tips, and insights delivered to your inbox.
            Join 10,000+ creators who trust our newsletter.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-12 px-4 rounded-xl border-sky-200 focus:border-sky-400 bg-white"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-6 bg-sky-700 hover:bg-sky-800"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-sm text-gray-500">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
