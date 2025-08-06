import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Play, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-sky-700 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
            <Users className="w-4 h-4" />
            Join 50,000+ Happy Creators
          </div>

          {/* Reduced Font Size */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Create
            <br />
            Amazing Content?
          </h2>

          <p className="text-lg text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start your creative journey today! No credit card needed - just pure
            creative power.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-sky-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Creating Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sky-100 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Free forever plan
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Instant results
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Loved by creators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
