import React, { useState } from "react"
import { Star, ChevronDown, MessageSquareQuote, HelpCircle } from "lucide-react"
import { TESTIMONIALS, FAQS } from "@/data/dentalData"
import { Badge } from "@/components/ui/badge"

export const TestimonialsAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="teal" className="mb-3 px-3 py-1 text-xs">
            Patient Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by Smiles Across Kerala
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Read what our valued patients say about our gentle procedures, One Day Dentures, and smile transformations.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-slate-200/80 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Badge variant="gold" className="text-[10px]">
                    {item.treatment}
                  </Badge>
                </div>

                <div className="relative">
                  <MessageSquareQuote className="w-8 h-8 text-sky-200 dark:text-sky-900 absolute -top-3 -left-2 -z-0 opacity-60" />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic relative z-10">
                    "{item.text}"
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-600 to-teal-500 text-white flex items-center justify-center font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{item.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-3 px-3 py-1 text-xs">
              Got Questions?
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Clear answers to help you feel confident and prepared for your appointment.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-6 flex items-center justify-between text-left text-slate-900 dark:text-white font-bold text-base hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-600 dark:text-sky-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
