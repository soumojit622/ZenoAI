import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react";
import Image from "next/image";

const integrations = [
  {
    logo: "/logos/zapier.svg",
    name: "Zapier",
    description: "Automate your content workflow",
  },
  {
    logo: "/logos/notion.svg",
    name: "Notion",
    description: "Sync content to your workspace",
  },
  {
    logo: "/logos/airtable.svg",
    name: "Airtable",
    description: "Organize content in databases",
  },
  {
    logo: "/logos/slack.svg",
    name: "Slack",
    description: "Get content updates in Slack",
  },
  {
    logo: "/logos/google.svg",
    name: "Google Workspace",
    description: "Integrate with Google tools",
  },
  {
    logo: "/logos/wordpress.svg",
    name: "WordPress",
    description: "Publish directly to WordPress",
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            Seamless Integration
            <Puzzle className="w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Integrates with</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              Your Favorite Tools
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            Connect ZenoAI with the tools you already use to streamline your
            workflow.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-sky-100 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 relative">
                <Image
                  src={integration.logo}
                  alt={`${integration.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {integration.name}
              </h3>
              <p className="text-xs text-gray-600">{integration.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don&apos;t see your tool? We&apos;re constantly adding new
            integrations.
          </p>
          <Button
            variant="outline"
            className="border-sky-200 text-sky-700 hover:bg-sky-50"
          >
            Request Integration
          </Button>
        </div>
      </div>
    </section>
  );
}
