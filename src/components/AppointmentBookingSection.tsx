import { useState, useEffect } from "react"
import { Calendar, Clock, User, Phone, Mail, Stethoscope, MessageSquare, CheckCircle } from "lucide-react"
import confetti from "canvas-confetti"
import { BRANCHES, DOCTORS, SERVICES, CLINIC_INFO } from "@/data/dentalData"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog } from "@/components/ui/dialog"

interface AppointmentBookingProps {
  selectedServicePreload?: string
  selectedDoctorPreload?: string
}

export const AppointmentBookingSection: React.FC<AppointmentBookingProps> = ({
  selectedServicePreload,
  selectedDoctorPreload,
}) => {
  const [branch, setBranch] = useState<string>("vazhakkulam")
  const [fullName, setFullName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [doctor, setDoctor] = useState<string>("Any Available Specialist")
  const [service, setService] = useState<string>("General Consultation & Checkup")
  const [preferredDate, setPreferredDate] = useState<string>("")
  const [timeSlot, setTimeSlot] = useState<string>("Morning (8:30 AM - 12:00 PM)")
  const [notes, setNotes] = useState<string>("")

  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false)
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null)

  // Pre-load if passed from parent
  useEffect(() => {
    if (selectedServicePreload) {
      setService(selectedServicePreload)
    }
  }, [selectedServicePreload])

  useEffect(() => {
    if (selectedDoctorPreload) {
      setDoctor(selectedDoctorPreload)
    }
  }, [selectedDoctorPreload])

  const timeSlots = [
    "Morning (8:30 AM - 12:00 PM)",
    "Afternoon (12:30 PM - 4:00 PM)",
    "Evening (4:30 PM - 8:30 PM)",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName.trim() || !phone.trim()) {
      alert("Please provide your name and contact phone number.")
      return
    }

    setLoading(true)

    // Simulate instant secure confirmation
    setTimeout(() => {
      setLoading(false)
      const bookingData = {
        bookingId: "DR-" + Math.floor(100000 + Math.random() * 900000),
        fullName,
        phone,
        email: email || "Not provided",
        branch: branch === "vazhakkulam" ? "Vazhakkulam (SH 16)" : "Kochi (Edappally / HMT Jct)",
        doctor,
        service,
        date: preferredDate || "Next Earliest Slot",
        timeSlot,
        notes,
      }
      setConfirmedBooking(bookingData)
      setIsSuccessModalOpen(true)

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FDBE0F", "#0284c7", "#059669", "#38bdf8"],
        })
      } catch (err) {
        // Fallback gracefully
      }
    }, 800)
  }

  const handleWhatsAppConfirm = () => {
    if (!confirmedBooking) return
    const msg = `*Appointment Request - Dr. Reena's Clinic*%0A` +
      `Booking ID: ${confirmedBooking.bookingId}%0A` +
      `Name: ${confirmedBooking.fullName}%0A` +
      `Phone: ${confirmedBooking.phone}%0A` +
      `Branch: ${confirmedBooking.branch}%0A` +
      `Service: ${confirmedBooking.service}%0A` +
      `Doctor: ${confirmedBooking.doctor}%0A` +
      `Date/Time: ${confirmedBooking.date} (${confirmedBooking.timeSlot})`
    window.open(`https://wa.me/919048319999?text=${msg}`, "_blank")
  }

  return (
    <section id="appointment" className="py-20 md:py-28 bg-gradient-to-b from-white to-sky-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Appointment Container */}
        <div className="rounded-3xl bg-slate-900 text-white shadow-2xl overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Clinic Highlights & Guidance */}
            <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="space-y-6">
                <Badge variant="gold" className="px-3 py-1 text-xs">
                  Zero Waiting Time • Guaranteed Slot
                </Badge>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Book Your Dental Visit Today
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Experience world-class dental care in a soothing, stress-free environment. Choose your preferred branch in <strong className="text-amber-400">Vazhakkulam</strong> or <strong className="text-sky-400">Edappally, Kochi</strong>.
                </p>

                {/* Direct contact numbers */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-400 text-slate-950 font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-semibold">Vazhakkulam Helpline</div>
                      <a href={`tel:${CLINIC_INFO.phonePrimary}`} className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                        {CLINIC_INFO.phonePrimary}
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-500 text-white font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-semibold">Kochi - Edappally Helpline</div>
                      <a href={`tel:${CLINIC_INFO.phoneSecondary}`} className="text-sm font-bold text-white hover:text-sky-400 transition-colors">
                        {CLINIC_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours reminder */}
                <div className="flex items-center gap-2 text-xs text-amber-300/90 pt-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Monday - Saturday: 8:00 AM – 9:00 PM</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="pt-8 mt-8 border-t border-slate-800 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div className="text-xs text-slate-400">
                  <strong className="text-white block font-semibold">Instant Confirmation</strong>
                  We confirm your slot immediately via SMS and WhatsApp.
                </div>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Patient Consultation Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your details below. Our front desk coordinates with your selected specialist doctor.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Branch Selection Tabs */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    1. Select Clinic Branch *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BRANCHES.map((b) => (
                      <button
                        type="button"
                        key={b.id}
                        onClick={() => setBranch(b.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          branch === b.id
                            ? "border-sky-600 dark:border-sky-500 bg-sky-50/80 dark:bg-sky-950/60 ring-2 ring-sky-500/20"
                            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/80"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">{b.name}</span>
                          {branch === b.id && (
                            <span className="h-2 w-2 rounded-full bg-sky-600 dark:bg-sky-400" />
                          )}
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{b.area}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        type="text"
                        required
                        placeholder="e.g. John Mathew"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Doctor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Select Doctor / Specialist
                    </label>
                    <div className="relative">
                      <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <select
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className="flex h-11 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                      >
                        <option value="Any Available Specialist">Any Available Specialist</option>
                        {DOCTORS.map((doc) => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name} ({doc.qualification})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Service & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Primary Service / Procedure
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="flex h-11 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2 text-sm text-slate-900 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                    >
                      <option value="General Consultation & Checkup">General Consultation &amp; Checkup</option>
                      <option value="ONE DAY DENTURE">ONE DAY DENTURE (Signature)</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                          timeSlot === slot
                            ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                            : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60"
                        }`}
                      >
                        {slot.split(" ")[0]}
                        <span className="block text-[10px] font-normal opacity-90">
                          {slot.substring(slot.indexOf("("))}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Symptoms */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Brief Notes / Symptoms (Optional)
                  </label>
                  <Textarea
                    placeholder="Tell us if you have any toothache, broken crown, need urgent dentures, or any specific requests..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="dentalGold"
                    size="lg"
                    disabled={loading}
                    className="w-full text-base font-bold py-4 shadow-lg shadow-amber-400/20"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        Confirming Your Slot...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>BOOK APPOINTMENT NOW</span>
                      </span>
                    )}
                  </Button>
                </div>

              </form>
            </div>

          </div>
        </div>

      </div>

      {/* Booking Confirmation Dialog Modal */}
      {confirmedBooking && (
        <Dialog
          open={isSuccessModalOpen}
          onOpenChange={setIsSuccessModalOpen}
          title="Appointment Request Confirmed!"
          description="We have reserved your consultation request. A clinical coordinator is reaching out shortly."
          className="max-w-lg"
        >
          <div className="space-y-4 pt-2">
            
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm">
                  Booking Reference: <span className="font-mono text-emerald-800 dark:text-emerald-300">{confirmedBooking.bookingId}</span>
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                  Thank you, {confirmedBooking.fullName}! Your slot at {confirmedBooking.branch} has been registered.
                </div>
              </div>
            </div>

            {/* Summary details */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50">
              <div className="flex justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">Service:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{confirmedBooking.service}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">Assigned Specialist:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{confirmedBooking.doctor}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">Date &amp; Slot:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{confirmedBooking.date} • {confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Contact Phone:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{confirmedBooking.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <Button
                onClick={handleWhatsAppConfirm}
                className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 text-xs sm:text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full sm:w-auto text-xs sm:text-sm"
              >
                Done
              </Button>
            </div>

          </div>
        </Dialog>
      )}

    </section>
  )
}
