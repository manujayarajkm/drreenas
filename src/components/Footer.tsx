import React from "react"
import { Phone, Mail, MapPin, Clock, ArrowUp, Shield } from "lucide-react"
import { CLINIC_INFO, BRANCHES } from "@/data/dentalData"

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white font-bold text-lg font-serif">
                R
              </div>
              <div>
                <span className="text-xl font-black text-white">
                  Dr. <span className="text-sky-400">Reena's</span>
                </span>
                <span className="block text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  Dental Speciality Clinic
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Kerala's trusted multi-speciality dental surgery center offering advanced cosmetic dentistry, one-day dentures, and comprehensive implantology across Vazhakkulam and Kochi.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon - Sat: 8:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore Clinic
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Specialist Dental Services
                </a>
              </li>
              <li>
                <a href="#onedaydenture" className="hover:text-amber-400 transition-colors">
                  One Day Denture Service
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Dr. Reena Riyaz
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-400 transition-colors">
                  Specialist Dental Surgeons
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-amber-400 transition-colors">
                  Clinic Locations &amp; Directions
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-amber-400 transition-colors">
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Vazhakkulam Center */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Vazhakkulam Branch
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{BRANCHES[0].address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${BRANCHES[0].phone}`} className="text-white hover:text-amber-400 font-semibold">
                  {BRANCHES[0].phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Kochi Edappally Center */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kochi - Edappally Branch
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{BRANCHES[1].address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${BRANCHES[1].phone}`} className="text-white hover:text-amber-400 font-semibold">
                  {BRANCHES[1].phone}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-slate-300 hover:text-white">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Dr. Reena's Dental Speciality Clinic. All Rights Reserved. (Originally founded &amp; archived in 2018).
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span>Certified Healthcare Protocols</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
