import React, { useState } from "react"
import { Stethoscope, Calendar, UserCheck } from "lucide-react"
import { DOCTORS } from "@/data/dentalData"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface DoctorsSectionProps {
  onSelectDoctorForBooking: (doctorName: string) => void
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctorForBooking }) => {
  const [filter, setFilter] = useState<string>("All")

  const categories = [
    { label: "All Specialists", value: "All" },
    { label: "Chief Surgeons", value: "Chief" },
    { label: "Root Canal (Endo)", value: "Endo" },
    { label: "Implants & Surgery", value: "Surg" },
    { label: "Braces & Kids", value: "Ortho" },
  ]

  const filteredDoctors = DOCTORS.filter((doc) => {
    if (filter === "All") return true
    if (filter === "Chief") return doc.role.includes("Chief") || doc.role.includes("Senior")
    if (filter === "Endo") return doc.specialty.includes("Root Canal")
    if (filter === "Surg") return doc.specialty.includes("Implant") || doc.specialty.includes("Surgery") || doc.specialty.includes("Periodont")
    if (filter === "Ortho") return doc.specialty.includes("Braces") || doc.specialty.includes("Aligner") || doc.specialty.includes("Child")
    return true
  })

  // Doctor avatar color generator
  const getAvatarGradient = (idx: number) => {
    const gradients = [
      "from-sky-600 to-teal-500",
      "from-teal-600 to-emerald-500",
      "from-indigo-600 to-sky-500",
      "from-blue-600 to-cyan-500",
      "from-emerald-600 to-teal-500",
      "from-amber-500 to-orange-500",
      "from-violet-600 to-indigo-500",
      "from-sky-700 to-blue-600",
      "from-cyan-600 to-teal-600",
    ]
    return gradients[idx % gradients.length]
  }

  return (
    <section id="team" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="teal" className="mb-3 px-3 py-1 text-xs">
            Distinguished Faculty &amp; Specialists
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet Our Specialist Doctors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Kerala's elite dental practitioners under one roof. Our multidisciplinary panel ensures specialized attention for every dental need.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat.value
                    ? "bg-slate-900 dark:bg-sky-600 text-white shadow-md shadow-slate-900/20 dark:shadow-sky-600/20"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDoctors.map((doc, idx) => (
            <Card
              key={doc.id}
              className="bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-500/50 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    {/* Stylized Doctor Icon Avatar */}
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-tr ${getAvatarGradient(
                        idx
                      )} flex items-center justify-center text-white shadow-md flex-shrink-0`}
                    >
                      <Stethoscope className="w-8 h-8 text-white/90" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Badge
                          variant={doc.role.includes("Chief") ? "gold" : "teal"}
                          className="text-[10px]"
                        >
                          {doc.qualification}
                        </Badge>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {doc.experience}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900 dark:text-white mt-1 truncate">
                        {doc.name}
                      </CardTitle>
                      <p className="text-xs font-semibold text-sky-700 dark:text-sky-400 mt-0.5">
                        {doc.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 pb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/80 text-xs">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Specialty: </span>
                    <span className="text-slate-600 dark:text-slate-400">{doc.specialty}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {doc.bio}
                  </p>
                </CardContent>
              </div>

              <CardFooter className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40 py-3.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-transparent dark:border-emerald-800/40">
                  <UserCheck className="w-3.5 h-3.5" />
                  Available on Consult
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSelectDoctorForBooking(doc.name)}
                  className="text-xs font-bold text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-700 dark:hover:text-sky-300"
                >
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  Select Doctor
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
