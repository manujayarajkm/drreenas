import React from "react"
import { Calendar, PhoneCall, CheckCircle2, Star, ShieldCheck, Sparkles, Clock, ArrowRight } from "lucide-react"
import { CLINIC_INFO } from "@/data/dentalData"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroProps {
  onBookClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Decorative ambient gradients */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-sky-200/40 via-amber-100/30 to-teal-100/30 dark:from-sky-900/20 dark:via-amber-900/10 dark:to-teal-900/15 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-300/20 dark:bg-sky-800/20 blur-2xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-sky-200/80 dark:border-sky-500/30 shadow-sm text-sky-800 dark:text-sky-300 text-xs sm:text-sm font-semibold animate-pulse-subtle">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Welcoming New Patients Across Kerala</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Welcome to the world of{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-cyan-600 dark:from-sky-400 dark:via-teal-400 dark:to-cyan-400">
                beautiful smiles.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-amber-400"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 190 3 247 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Historic Mission Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-slate-900 dark:text-white font-semibold">Dr. Reena’s Dental Speciality Clinic</strong> provides high quality, gentle dental care for our patients. Equipped with state-of-the-art treatment and surgical facilities, guided by a dedicated panel of specialist dental doctors.
            </p>

            {/* Value checklist pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Panel of 9+ MDS Specialists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Signature One-Day Dentures</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Zero-Pain Anesthesia Delivery</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                onClick={onBookClick}
                variant="dentalGold"
                size="lg"
                className="w-full sm:w-auto text-base shadow-lg shadow-amber-400/25 gap-2 px-8 py-3.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Make an Appointment</span>
              </Button>
              <a
                href="#services"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2"
                >
                  <span>Our Specialties</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 py-2 transition-colors"
              >
                <div className="p-2 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Direct Helpline</div>
                  <div className="font-bold text-slate-900 dark:text-white">{CLINIC_INFO.phonePrimary}</div>
                </div>
              </a>
            </div>

            {/* Operating Times Tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Open Monday to Saturday: 8:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Right Column: Hero Visuals & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-slate-800 bg-slate-900">
                <img
                  src="/images/archived_info_block.jpg"
                  alt="Dr. Reena's Dental Surgery Clinic"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/archived_slider_bg.jpg";
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                        Chief Dental Surgeon
                      </div>
                      <div className="text-lg font-bold text-white">Dr. Reena Riyaz</div>
                      <div className="text-xs text-slate-300">BDS • 15+ Years Clinical Excellence</div>
                    </div>
                    <Badge variant="gold" className="text-[11px]">
                      Kochi &amp; Vazhakkulam
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Floating Highlight 1: One Day Denture Tag */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 animate-float">
                <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-black">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    Signature Care
                  </div>
                  <div className="text-sm font-extrabold text-sky-700 dark:text-sky-400">
                    ONE DAY DENTURE
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Same-Day Precision Fitting</div>
                </div>
              </div>

              {/* Floating Highlight 2: Trust & Rating Badge */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                    4.9 / 5.0 Rating
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">From 1,200+ Kerala Patients</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Numbers / Credibility Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {CLINIC_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-sky-700 dark:text-sky-400 font-sans tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
