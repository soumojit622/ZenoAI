import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Home,
  Search,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-sky-200 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-sky-300 rounded-full opacity-15"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* 404 Display */}
        <div className="mb-8 relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-sky-200 to-sky-300 bg-clip-text mb-4 leading-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-sky-100 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The page you&apos;re looking for seems to have vanished into the
            digital void. Don&apos;t worry, even our AI can&apos;t find
            everything!
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-sky-600" />
              </div>
              <div className="text-lg font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              <div className="text-lg font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-lg font-bold text-gray-900">10M+</div>
              <div className="text-sm text-gray-600">Generated</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sky-700 hover:bg-sky-800 shadow-lg"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-sky-200 text-sky-700 hover:bg-sky-50 bg-transparent"
            >
              <Link href="javascript:history.back()">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sky-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="#features"
              className="flex items-center gap-2 p-3 rounded-xl hover:bg-sky-50 transition-colors duration-200 group"
            >
              <Zap className="w-4 h-4 text-sky-600" />
              <span className="text-sm text-gray-700 group-hover:text-sky-700">
                Features
              </span>
            </Link>
            <Link
              href="#pricing"
              className="flex items-center gap-2 p-3 rounded-xl hover:bg-sky-50 transition-colors duration-200 group"
            >
              <Star className="w-4 h-4 text-sky-600" />
              <span className="text-sm text-gray-700 group-hover:text-sky-700">
                Pricing
              </span>
            </Link>
            <Link
              href="#blog"
              className="flex items-center gap-2 p-3 rounded-xl hover:bg-sky-50 transition-colors duration-200 group"
            >
              <Search className="w-4 h-4 text-sky-600" />
              <span className="text-sm text-gray-700 group-hover:text-sky-700">
                Blog
              </span>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 p-3 rounded-xl hover:bg-sky-50 transition-colors duration-200 group"
            >
              <Users className="w-4 h-4 text-sky-600" />
              <span className="text-sm text-gray-700 group-hover:text-sky-700">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
