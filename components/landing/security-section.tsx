import {
  Eye,
  FileCheck,
  Lock,
  Shield,
  ShieldCheck
} from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security protocols protect your data at all times.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description:
      "Your content and data are never stored permanently or used to train our models.",
  },
  {
    icon: Eye,
    title: "GDPR Compliant",
    description:
      "Fully compliant with GDPR, CCPA, and other international privacy regulations.",
  },
  {
    icon: FileCheck,
    title: "SOC 2 Certified",
    description:
      "Independently audited and certified for security, availability, and confidentiality.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-20 lg:py-32  relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            Security First
            <ShieldCheck className="w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Your Security is</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              Our Priority
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            Enterprise-grade security and privacy protection for your content
            and data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-2xl p-6 text-center border border-sky-100 hover:bg-sky-100 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-800 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
