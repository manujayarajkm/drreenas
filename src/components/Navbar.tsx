import React, { useState, useEffect } from "react"
import { Phone, Clock, MapPin, Calendar, Menu, X, MessageSquare } from "lucide-react"
import { CLINIC_INFO, BRANCHES } from "@/data/dentalData"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

interface NavbarProps {
  onBookClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "One Day Denture", href: "#onedaydenture" },
    { label: "About Us", href: "#about" },
    { label: "Doctors", href: "#team" },
    { label: "Branches", href: "#branches" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Top Notification & Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Working Hours */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon - Sat: 8:00 AM - 9:00 PM</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Vazhakkulam &amp; Kochi, Kerala</span>
            </span>
          </div>

          {/* Quick Helplines */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${CLINIC_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xs:inline">{CLINIC_INFO.phonePrimary}</span>
            </a>
            <a
              href="https://wa.me/919048319999?text=Hello%20Dr.%20Reena's%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 transition-all text-[11px]"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-lg py-2.5"
            : "bg-white/95 dark:bg-slate-950/95 dark:border-b dark:border-slate-800/80 backdrop-blur-md py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/archived_logo.jpg`}
                alt="Dr. Reena's Logo"
                className="h-full w-full object-cover mix-blend-luminosity opacity-90 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-white font-serif drop-shadow">
                R
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-sans">
                  Dr. <span className="text-sky-600 dark:text-sky-400">Reena's</span>
                </span>
                <span className="bg-amber-400 text-slate-950 font-bold text-[10px] uppercase px-1.5 py-0.5 rounded-md tracking-wider">
                  Dental
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
                Speciality Clinic • Kerala
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/80 dark:hover:bg-slate-800/80 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA & Desktop Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle variant="navbar" />
            <Button
              onClick={onBookClick}
              variant="dentalGold"
              size="default"
              className="gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-1.5">
            <ThemeToggle variant="navbar" className="w-8 h-8 rounded-lg" />
            <button
              onClick={onBookClick}
              className="p-2 bg-amber-400 text-slate-900 rounded-lg font-bold text-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile theme toggle */}
              <div className="pt-2 pb-1">
                <ThemeToggle variant="expanded" />
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onBookClick()
                  }}
                  variant="dentalGold"
                  className="w-full justify-center text-slate-950 font-bold py-3"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Make an Appointment
                </Button>
              </div>

              {/* Mobile Branch Quick Dial */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center justify-between">
                  <span>{BRANCHES[0].name}:</span>
                  <a href={`tel:${BRANCHES[0].phone}`} className="font-bold text-sky-600 dark:text-sky-400">
                    {BRANCHES[0].phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>{BRANCHES[1].name}:</span>
                  <a href={`tel:${BRANCHES[1].phone}`} className="font-bold text-sky-600 dark:text-sky-400">
                    {BRANCHES[1].phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
