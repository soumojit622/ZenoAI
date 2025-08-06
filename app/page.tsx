import { BenefitsSection } from "@/components/landing/benefits-section";
import { BlogSection } from "@/components/landing/blog-section";
import { CTASection } from "@/components/landing/cta-section";
import { FAQSection } from "@/components/landing/faq-section";
import { FeatureSection } from "@/components/landing/feature-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { Navbar } from "@/components/landing/navbar";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import { PartnersSection } from "@/components/landing/partners-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { UseCaseSection } from "@/components/landing/use-case-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <FeatureSection />
        <UseCaseSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
        <SecuritySection />
        <PartnersSection />
        <BlogSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}
