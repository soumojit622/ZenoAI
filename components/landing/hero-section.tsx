import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Play,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Clean Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-sky-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-50 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Clean Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-sky-600 drop-shadow-sm" />
            AI-Powered Content Creation
          </div>

          {/* Clean Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Create Amazing</span>
            <br />
            <span className="text-gray-900">Content with </span>
            <span className="bg-gradient-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              ZenoAI
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate blogs, social posts, code and more in seconds. Built for
            creators who want quality at lightning speed.
          </p>

          {/* Clean Stats */}
          <div className="flex flex-wrap gap-8 justify-center mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-sky-600" />
              <span className="font-semibold text-gray-700">50K+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-700">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700">
                10M+ Generated
              </span>
            </div>
          </div>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-sky-600 hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Creating Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Clean Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600 flex-1">
                  app.zenoai.com/dashboard
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-64"></div>
                  </div>
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="h-4 bg-sky-200 rounded w-32"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-sky-100 rounded w-full"></div>
                    <div className="h-3 bg-sky-100 rounded w-4/5"></div>
                    <div className="h-3 bg-sky-100 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="w-6 h-6 bg-purple-500 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="w-6 h-6 bg-green-500 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="w-6 h-6 bg-blue-500 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
