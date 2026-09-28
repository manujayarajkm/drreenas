import React, { useState } from "react"
import { MapPin, Phone, Navigation, Clock, Send, CheckCircle2 } from "lucide-react"
import { BRANCHES, CLINIC_INFO } from "@/data/dentalData"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const BranchesSection: React.FC = () => {
  const [activeBranchId, setActiveBranchId] = useState<string>("vazhakkulam")

  // Quick message form states
  const [msgName, setMsgName] = useState("")
  const [msgEmail, setMsgEmail] = useState("")
  const [msgSubject, setMsgSubject] = useState("")
  const [msgContent, setMsgContent] = useState("")
  const [msgSent, setMsgSent] = useState(false)

  const activeBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!msgName.trim() || !msgEmail.trim()) {
      alert("Please provide your name and email.")
      return
    }
    setMsgSent(true)
    setTimeout(() => {
      setMsgName("")
      setMsgEmail("")
      setMsgSubject("")
      setMsgContent("")
    }, 1500)
  }

  return (
    <section id="branches" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="gold" className="mb-3 px-3 py-1 text-xs">
            2 Prime Locations In Kerala
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Visit Our Dental Centers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Conveniently situated in Vazhakkulam and Kochi (Edappally) with dedicated patient parking and state-of-the-art dental operatories.
          </p>

          {/* Branch Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800 border border-slate-700 mt-8 gap-2">
            {BRANCHES.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranchId(branch.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeBranchId === branch.id
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{branch.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Branch Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Branch Details Card */}
          <div className="lg:col-span-5 bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Selected Facility
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {activeBranch.name}
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Full Address:</div>
                    <p className="text-slate-300 leading-relaxed mt-0.5">
                      {activeBranch.address}
                    </p>
                    <div className="text-xs text-amber-300/90 mt-1 font-medium">
                      Landmark: {activeBranch.landmark}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Direct Phone Line:</div>
                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="text-white hover:text-amber-400 transition-colors font-bold text-base mt-0.5 block"
                    >
                      {activeBranch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Working Hours:</div>
                    <p className="text-slate-300 mt-0.5">{activeBranch.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row gap-3">
              <a
                href={activeBranch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>
              <a
                href={`tel:${activeBranch.phone}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Center</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-700 min-h-[350px] sm:min-h-[420px] bg-slate-800 shadow-xl relative">
            <iframe
              title={`Map of ${activeBranch.name}`}
              src={activeBranch.mapEmbedUrl}
              className="w-full h-full min-h-[350px] sm:min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Quick Contact & Message Box (Recreated from original site footer contact form) */}
        <div id="contact" className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="teal" className="text-xs">
                Direct Inquiries
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Have Any Questions? <br />
                <span className="text-amber-400">Write to Us Directly</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an inquiry regarding treatment costs, root canal consultations, or smile makeovers, our medical coordinators reply within 24 hours.
              </p>
              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <div>Email: <strong className="text-white">{CLINIC_INFO.email}</strong></div>
                <div>Emergency Helpline: <strong className="text-amber-400">{CLINIC_INFO.phoneEmergency}</strong></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {msgSent ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm text-white">Message Sent Successfully!</div>
                    <div className="text-xs text-emerald-300 mt-0.5">
                      Thank you for contacting Dr. Reena's Clinic. Our staff will get back to you shortly.
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={msgName}
                      onChange={(e) => setMsgName(e.target.value)}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
                    />
                    <Input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={msgEmail}
                      onChange={(e) => setMsgEmail(e.target.value)}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Subject (e.g., Smile Makeover, Toothache)"
                    value={msgSubject}
                    onChange={(e) => setMsgSubject(e.target.value)}
                    className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
                  />
                  <Textarea
                    placeholder="Type your message here..."
                    rows={3}
                    value={msgContent}
                    onChange={(e) => setMsgContent(e.target.value)}
                    className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
                  />
                  <Button
                    type="submit"
                    variant="dentalGold"
                    className="w-full sm:w-auto font-bold px-8 py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
