import type { Metadata, Viewport } from "next";
import { Saira } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import BackToTopButton from "@/components/BackToTopButton";
import { ClerkProvider } from "@clerk/nextjs";

const font = Saira({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#171717",
};

export const metadata: Metadata = {
  title: "ZenoAI – Intelligent Content Generation for Modern Teams",
  description:
    "ZenoAI is a premium AI-powered platform that helps individuals and teams create high-quality content at scale. From blog posts to SEO copy, generate powerful results in seconds with clarity and control.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "AI content generator",
    "AI writer",
    "automated copywriting",
    "SEO content tool",
    "ZenoAI",
    "AI marketing copy",
    "AI blog writing tool",
    "content generation platform",
  ],
  authors: [
    {
      name: "Soumojit Banerjee",
      url: "https://github.com/soumojit622",
    },
  ],
  creator: "Soumojit Banerjee",
  publisher: "ZenoAI",
  metadataBase: new URL("https://zenoai.com"),
  alternates: {
    canonical: "https://zenoai.com",
  },
  openGraph: {
    title: "ZenoAI – AI Content Generation Platform",
    description:
      "Create high-quality content at scale using ZenoAI – the intelligent content creation assistant trusted by modern teams.",
    url: "https://zenoai.com",
    siteName: "ZenoAI",
    images: [
      {
        url: "https://zenoai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZenoAI: AI Content Generator Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#0284c7",
          colorText: "#0c4a6e",
        },
        elements: {
          card: "border border-sky-200 shadow-lg rounded-xl",
          headerTitle: "text-sky-700 font-semibold text-xl",
          headerSubtitle: "text-sky-500",
          buttonPrimary:
            "bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors duration-200",
          input:
            "focus:ring-sky-500 border border-sky-300 placeholder:text-sky-400 text-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:border-sky-500 transition duration-200",
          socialButtonsBlockButton:
            "bg-white text-sky-700 border border-sky-200 hover:bg-sky-50 transition-colors",
          formFieldLabel: "text-sky-700 font-medium",
          footerActionText: "text-sky-600",
          footerActionLink:
            "text-sky-700 hover:text-sky-900 font-semibold underline",
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>
          {children}
          <Toaster richColors />
          <BackToTopButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
