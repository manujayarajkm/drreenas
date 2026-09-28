import React, { useState } from "react"
import { Phone, MessageSquare, X } from "lucide-react"
import { CLINIC_INFO, BRANCHES } from "@/data/dentalData"

export const FloatingEmergency: React.FC = () => {
  const [showCallMenu, setShowCallMenu] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Popover Call Menu */}
      {showCallMenu && (
        <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700 w-64 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Direct Helplines
            </span>
            <button
              onClick={() => setShowCallMenu(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <a
              href={`tel:${BRANCHES[0].phone}`}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <div>
                <div className="font-bold text-white">Vazhakkulam</div>
                <div className="text-slate-400 text-[10px]">{BRANCHES[0].phone}</div>
              </div>
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>

            <a
              href={`tel:${BRANCHES[1].phone}`}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <div>
                <div className="font-bold text-white">Edappally, Kochi</div>
                <div className="text-slate-400 text-[10px]">{BRANCHES[1].phone}</div>
              </div>
              <Phone className="w-4 h-4 text-sky-400" />
            </a>

            <a
              href={`tel:${CLINIC_INFO.phoneEmergency}`}
              className="flex items-center justify-between p-2 rounded-xl bg-rose-950/60 border border-rose-800 hover:bg-rose-900/80 transition-colors"
            >
              <div>
                <div className="font-bold text-rose-300">24/7 Dental Emergency</div>
                <div className="text-rose-400 text-[10px]">{CLINIC_INFO.phoneEmergency}</div>
              </div>
              <Phone className="w-4 h-4 text-rose-400" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Buttons Bar */}
      <div className="flex items-center gap-2">
        {/* Call Trigger */}
        <button
          onClick={() => setShowCallMenu(!showCallMenu)}
          className="h-12 px-4 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all border border-slate-700 flex items-center gap-2 text-xs font-bold group"
          aria-label="Call Clinic"
        >
          <div className="p-1 rounded-full bg-amber-400 text-slate-950">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline">Call Us</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919048319999?text=Hello%20Dr.%20Reena's%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20dental%20appointments."
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-emerald-500/25"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

    </div>
  )
}
