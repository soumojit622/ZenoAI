import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does ZenoAI generate content?",
    answer:
      "ZenoAI uses advanced AI models trained on high-quality content to generate text, code, and creative content. Our AI understands context, tone, and style to produce content that matches your specific needs.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes! We offer a free Starter plan that includes 10 generations per month, basic templates, and community support. It's perfect for trying out ZenoAI and seeing how it fits your workflow.",
  },
  {
    question: "Can I customize the tone and style of generated content?",
    answer:
      "ZenoAI allows you to specify tone, style, target audience, and other parameters to ensure the generated content matches your brand voice and requirements.",
  },
  {
    question: "What types of content can ZenoAI create?",
    answer:
      "ZenoAI can generate blog articles, social media posts, YouTube content, code snippets, product descriptions, taglines, and much more. We support over 50 different content types.",
  },
  {
    question: "Is my data secure with ZenoAI?",
    answer:
      "Yes, we take data security seriously. All data is encrypted in transit and at rest, we don't store your generated content permanently, and we're fully GDPR compliant.",
  },
  {
    question: "Can I integrate ZenoAI with other tools?",
    answer:
      "Yes! We offer integrations with popular platforms like WordPress, Notion, Zapier, and more. Our API also allows for custom integrations with your existing workflow.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-sky-200 bg-gradient-to-r from-sky-50 to-white text-sky-800 shadow-sm backdrop-blur-sm hover:shadow-md hover:bg-sky-100 transition-all duration-300">
            Got Questions?
            <HelpCircle className="w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Frequently Asked</span>{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">Everything you need to know about ZenoAI and how it works.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-sky-100 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
