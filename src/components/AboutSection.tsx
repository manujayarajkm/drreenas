import React from "react"
import { Award, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: "Prestigious Academic Pedigree",
      desc: "Hundreds of hours in continuing dental education from leading national & global university summits."
    },
    {
      title: "Patient-Centered Comfort",
      desc: "Zero-anxiety environment designed with warm lighting, soothing audio, and gentle anesthetic techniques."
    },
    {
      title: "German Ergonomic Dental Units",
      desc: "World-class operatories equipped with digital apex locators, intraoral cameras, and RVG digital imaging."
    },
    {
      title: "Four-Tier Autoclave Sterilization",
      desc: "Rigorous Class-B hospital sterilization protocol ensuring 100% infection control for every procedure."
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image collage with authentic archive asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-amber-300/20 dark:from-sky-500/10 dark:to-amber-500/10 rounded-3xl blur-xl -z-10" />

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900">
                <img
                  src="/images/archived_info_block.jpg"
                  alt="Dr. Reena Riyaz & Dental Clinic operatory"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center"
                />
              </div>

              {/* Floating Credential Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-slate-800 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Leadership
                    </div>
                    <div className="text-base font-bold text-white">Dr. Reena Riyaz</div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Chief Dental Surgeon dedicated to bringing advanced smile restoration to Kerala.
                </p>
              </div>

              {/* Floating Experience Pill */}
              <div className="absolute top-6 -left-4 sm:-left-6 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="text-2xl font-black text-sky-600 dark:text-sky-400 font-sans">15+</div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                  Years of Dedicated<br />Dental Practice
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <Badge variant="gold" className="mb-3 px-3 py-1 text-xs">
                Our Heritage &amp; Mission
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Catering to All of Your Dental Needs With Genuine Compassion
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Dr. Reena Riyaz</strong> is a Kerala-born dental surgeon who established a highly regarded dental practice in Kochi and Vazhakkulam. Through unwavering commitment, passion, and artistic eye for aesthetics, Dr. Reena fulfilled her vision of delivering world-standard dental care locally.
              </p>
              <p>
                To provide her patients with the newest innovations in restorative and cosmetic dentistry, Dr. Reena stays continuously up-to-date with cutting-edge dental implantology, one-day prosthetics, and digital smile designing by investing hundreds of hours in advanced continuing education courses every year.
              </p>
              <p className="italic text-slate-700 dark:text-slate-200 border-l-4 border-amber-400 pl-4 py-1 bg-amber-50/50 dark:bg-amber-950/30 rounded-r-xl">
                "Your dental needs are taken care of from the moment you step into our clinic. Our entire medical team makes sure that you leave with that very special, radiant smile."
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/80 hover:border-sky-200 dark:hover:border-sky-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                    <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
