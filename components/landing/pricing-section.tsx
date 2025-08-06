import { Button } from "@/components/ui/button";
import {
  Building,
  Check,
  Crown,
  DollarSign,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "Free",
    period: "forever",
    description: "Perfect for trying out ZenoAI",
    features: [
      "10 generations per month",
      "Basic templates",
      "Community support",
      "Standard quality output",
    ],
    cta: "Get Started Free",
    popular: false,
    badge: null,
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$29",
    period: "per month",
    description: "Best for individual creators",
    features: [
      "Unlimited generations",
      "All premium templates",
      "Priority support",
      "High-quality output",
      "Custom tone settings",
      "Export to multiple formats",
    ],
    cta: "Start Pro Trial",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "Custom",
    period: "pricing",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom AI training",
    ],
    cta: "Contact Sales",
    popular: false,
    badge: "Best Value",
  },
];

export function PricingSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky-200 rounded-full opacity-15 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            Flexible Plans
            <DollarSign className="w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Simple,</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            Choose the plan that fits your content creation needs.
          </p>

          {/* Pricing Toggle Mockup */}
          <div className="inline-flex items-center bg-sky-100 rounded-full p-1 mt-8">
            <button className="px-6 py-2 rounded-full bg-white text-sky-700 font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-sky-600 font-medium">
              Yearly
              <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg border-2 relative transition-all duration-300 hover:shadow-2xl transform `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      plan.popular
                        ? "bg-sky-700 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    plan.popular
                      ? "bg-gradient-to-br from-sky-600 to-sky-700"
                      : "bg-sky-100"
                  }`}
                >
                  <plan.icon
                    className={`w-8 h-8 ${
                      plan.popular ? "text-white" : "text-sky-700"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">
                      /{plan.period.split(" ")[1]}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full text-lg py-6 rounded-2xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-sky-700 hover:bg-sky-800 shadow-lg hover:shadow-xl"
                    : "bg-transparent border-2 border-sky-200 text-sky-700 hover:bg-sky-50"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              {/* Popular Plan Extra Features */}
              {plan.popular && (
                <div className="mt-6 p-4 bg-sky-50 rounded-2xl border border-sky-100">
                  <div className="flex items-center gap-2 text-sm text-sky-700 font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    <span>14-day free trial included</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-200">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">
              30-day money-back guarantee on all paid plans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
