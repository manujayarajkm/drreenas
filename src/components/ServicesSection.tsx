import React, { useState } from "react"
import {
  Sparkles,
  Gem,
  Crown,
  ShieldCheck,
  Zap,
  HeartPulse,
  Crosshair,
  Smile,
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  Layers
} from "lucide-react"
import { SERVICES, type ServiceItem } from "@/data/dentalData"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-sky-600" />
      case "Gem":
        return <Gem className="w-6 h-6 text-amber-500" />
      case "Crown":
        return <Crown className="w-6 h-6 text-amber-600" />
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-teal-600" />
      case "Zap":
        return <Zap className="w-6 h-6 text-yellow-500" />
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-rose-500" />
      case "Crosshair":
        return <Crosshair className="w-6 h-6 text-indigo-600" />
      case "Smile":
        return <Smile className="w-6 h-6 text-cyan-600" />
      default:
        return <Layers className="w-6 h-6 text-sky-600" />
    }
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal" className="mb-3 px-3 py-1 text-xs">
            Comprehensive Oral Healthcare
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Dental Specialities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            From routine preventive checkups to advanced smile designing, implants, and emergency relief—our specialist doctors deliver gentle, high-precision treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              className="group hover:-translate-y-1.5 hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden"
            >
              <div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800/60 group-hover:scale-110 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/60 transition-all">
                      {getServiceIcon(service.icon)}
                    </div>
                    {service.tag && (
                      <Badge
                        variant={service.tag === "Signature Service" ? "gold" : "secondary"}
                        className="text-[11px]"
                      >
                        {service.tag}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </CardContent>
              </div>

              <CardFooter className="pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto py-3.5 bg-slate-50/50 dark:bg-slate-950/40">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 flex items-center gap-1 group/btn"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  Book Slot
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>

      {/* Service Detail Modal Dialog */}
      {selectedService && (
        <Dialog
          open={!!selectedService}
          onOpenChange={(open) => !open && setSelectedService(null)}
          title={selectedService.title}
          description={selectedService.subtitle}
          className="max-w-xl"
        >
          <div className="space-y-5 pt-2">
            
            <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 border border-sky-100 dark:border-sky-800/60 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
              <span><strong>Typical Treatment Duration:</strong> {selectedService.duration}</span>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Procedure Overview
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Key Benefits &amp; Clinical Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {selectedService.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedService(null)}
              >
                Close
              </Button>
              <Button
                variant="dentalGold"
                size="sm"
                onClick={() => {
                  const title = selectedService.title
                  setSelectedService(null)
                  onSelectServiceForBooking(title)
                }}
                className="gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </Button>
            </div>

          </div>
        </Dialog>
      )}

    </section>
  )
}
