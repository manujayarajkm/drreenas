import React from "react"
import { Calendar, Clock, Sparkles, Check, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OneDayDentureProps {
  onBookClick: () => void
}

export const OneDayDentureBanner: React.FC<OneDayDentureProps> = ({ onBookClick }) => {
  const steps = [
    {
      num: "01",
      title: "Morning 3D Scan & Consultation",
      desc: "Digital 3D intraoral impressions without gooey trays. Tailored tooth shade and shape customization."
    },
    {
      num: "02",
      title: "In-House Lab Craftsmanship",
      desc: "Our master prosthodontist lab fabricates premium high-density acrylic/flexible dentures with anatomical accuracy."
    },
    {
      num: "03",
      title: "Evening Precision Fitting",
      desc: "Walk out with a comfortable, natural-looking, radiant smile—in just a single day!"
    }
  ]

  const options = [
    "Full Arch Custom Dentures",
    "Partial 'Puzzle-Fit' Dentures",
    "Unbreakable Flexible Valplast",
    "Implant-Retained Overdentures"
  ]

  return (
    <section id="onedaydenture" className="py-16 md:py-24 bg-amber-400 text-slate-950 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-300/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinic Signature Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            ONE DAY DENTURE — <br />
            <span className="text-slate-900 underline decoration-slate-950/40">Same-Day Smile Restoration</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
            At Dr. Reena’s Speciality Dentistry, our patients visit us from all across Kerala and beyond. We understand that one size never fits all. That is why we offer personalized denture choices crafted to provide natural aesthetics, high comfort, and durability—delivered in 24 hours.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/60 dark:border-amber-400/20 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-amber-500 dark:text-amber-400 font-sans">
                  {step.num}
                </span>
                <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300">
                  <Clock className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Denture Options & CTA Box */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Tailored Options For Every Budget</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to eat, speak &amp; laugh with total freedom?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-sm text-slate-300">
              {options.map((opt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <Button
              onClick={onBookClick}
              variant="dentalGold"
              size="lg"
              className="w-full sm:w-auto text-base py-3.5 px-8 font-extrabold shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Denture Consultation
            </Button>
            <a
              href="tel:9048319999"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-900 hover:text-white transition-colors text-sm font-semibold"
            >
              <Phone className="w-4 h-4 mr-2 text-amber-400" />
              Call Denture Specialist
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
