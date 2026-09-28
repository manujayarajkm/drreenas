import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { OneDayDentureBanner } from "@/components/OneDayDentureBanner"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { DoctorsSection } from "@/components/DoctorsSection"
import { AppointmentBookingSection } from "@/components/AppointmentBookingSection"
import { BranchesSection } from "@/components/BranchesSection"
import { TestimonialsAndFAQ } from "@/components/TestimonialsAndFAQ"
import { Footer } from "@/components/Footer"
import { FloatingEmergency } from "@/components/FloatingEmergency"

export function App() {
  const [selectedService, setSelectedService] = useState<string>("")
  const [selectedDoctor, setSelectedDoctor] = useState<string>("")

  const scrollToAppointment = () => {
    const el = document.getElementById("appointment")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    scrollToAppointment()
  }

  const handleSelectDoctorForBooking = (doctorName: string) => {
    setSelectedDoctor(doctorName)
    scrollToAppointment()
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* Top Navbar */}
      <Navbar onBookClick={scrollToAppointment} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={scrollToAppointment} />

        {/* Feature Highlight: One Day Denture */}
        <OneDayDentureBanner onBookClick={scrollToAppointment} />

        {/* Core Dental Services */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* About Dr. Reena & Practice Philosophy */}
        <AboutSection />

        {/* Doctors & Specialists Team */}
        <DoctorsSection onSelectDoctorForBooking={handleSelectDoctorForBooking} />

        {/* Interactive Appointment Scheduler */}
        <AppointmentBookingSection
          selectedServicePreload={selectedService}
          selectedDoctorPreload={selectedDoctor}
        />

        {/* Branches & Directions */}
        <BranchesSection />

        {/* Patient Reviews & FAQs */}
        <TestimonialsAndFAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Emergency & WhatsApp Actions */}
      <FloatingEmergency />
    </div>
  )
}

export default App
