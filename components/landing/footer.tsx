import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ClipboardCheck,
  FileCode,
  FileText,
  Github,
  Globe,
  Heart,
  HelpCircle,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Newspaper,
  ScrollText,
  ShieldCheck,
  Star,
  TrendingUp,
  Twitter,
  Users
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  product: [
    { name: "Features", href: "#features", icon: Star },
    { name: "Pricing", href: "#pricing", icon: ClipboardCheck },
    { name: "Roadmap", href: "#roadmap", icon: FileCode },
    { name: "Changelog", href: "#changelog", icon: ScrollText },
    { name: "API", href: "#api", icon: ShieldCheck },
  ],
  resources: [
    { name: "Documentation", href: "#docs", icon: BookOpen },
    { name: "Blog", href: "#blog", icon: Newspaper },
    { name: "Help Center", href: "#help", icon: HelpCircle },
    { name: "Community", href: "#community", icon: MessageCircleQuestion },
    { name: "Templates", href: "#templates", icon: LayoutTemplate },
  ],
  company: [
    { name: "About", href: "#about", icon: Building2 },
    { name: "Careers", href: "#careers", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
    { name: "Press Kit", href: "#press", icon: FileText },
    { name: "Partners", href: "#partners", icon: Users },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy", icon: ShieldCheck },
    { name: "Terms of Service", href: "#terms", icon: ScrollText },
    { name: "Cookie Policy", href: "#cookies", icon: FileText },
    { name: "GDPR", href: "#gdpr", icon: ShieldCheck },
    { name: "Security", href: "#security", icon: ShieldCheck },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#github", color: "hover:bg-gray-700" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#linkedin",
    color: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#twitter",
    color: "hover:bg-sky-500",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@zenoai.com",
    color: "hover:bg-green-500",
  },
];

const stats = [
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: Star, value: "4.9/5", label: "User Rating" },
  { icon: TrendingUp, value: "10M+", label: "Content Generated" },
  { icon: Award, value: "99.9%", label: "Uptime" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-400/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <div className="py-12 border-b border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Logo/Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/favicon.svg"
                    alt="ZenoAI Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  ZenoAI
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Next-generation AI content creation platform for creators who
                want to make amazing content at lightning speed.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Kolkata, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>hello@zenoai.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span>Available Worldwide</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Link Columns */}
            {Object.entries(footerLinks).map(([sectionName, links]) => (
              <div key={sectionName}>
                <h3 className="font-bold mb-6 text-sky-300 text-lg capitalize">
                  {sectionName}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline flex items-center gap-2 group"
                      >
                        <link.icon className="w-4 h-4 text-sky-400 group-hover:text-white transition duration-200" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-12 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates, tips, and insights delivered to your
              inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-sky-500"
              />
              <Button className="bg-sky-600 hover:bg-sky-700 px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ZenoAI. All rights reserved. Built
              with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> to
              empower creators around the globe.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Crafted with care by{" "}
              <span className="font-semibold text-white">
                Soumojit Banerjee
              </span>
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
