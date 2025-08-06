"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  LayoutGrid,
  Lightbulb,
  Tags,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Features", href: "#features", icon: LayoutGrid },
  { name: "Solutions", href: "#solutions", icon: Lightbulb },
  { name: "Pricing", href: "#pricing", icon: Tags },
  { name: "Resources", href: "#resources", icon: BookOpen },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-6 right-6 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200"
          : "bg-white/90 backdrop-blur-sm shadow-md border border-gray-100"
      } rounded-2xl`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative overflow-hidden">
              <Image
                src="/favicon.svg"
                alt="ZenoAI Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">ZenoAI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="text-gray-600 hover:text-sky-600"
              >
                <Play className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-4 px-4">
              <Link href="/dashboard" passHref>
                <Button
                  variant="outline"
                  className="justify-center bg-transparent w-full"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>

              <Link href="/dashboard" passHref>
                <Button className="bg-sky-600 hover:bg-sky-700 justify-center w-full text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
