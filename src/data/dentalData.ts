export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  icon: string
  shortDesc: string
  fullDesc: string
  benefits: string[]
  duration: string
  tag?: string
}

export interface DoctorItem {
  id: string
  name: string
  role: string
  qualification: string
  specialty: string
  bio: string
  experience: string
  image?: string
}

export interface BranchItem {
  id: string
  name: string
  area: string
  address: string
  landmark: string
  phone: string
  timing: string
  mapEmbedUrl: string
  directionsUrl: string
}

export const CLINIC_INFO = {
  name: "Dr. Reena's Dental Speciality Clinic",
  shortName: "Dr. Reena's Dental",
  tagline: "Welcome to the world of beautiful smiles.",
  heroText: "Providing compassionate, state-of-the-art dental care for patients across Kerala with an elite panel of dental specialists, German surgical chairs, and cutting-edge digital diagnostics.",
  phonePrimary: "+91 90483 19999",
  phoneSecondary: "+91 90483 29999",
  phoneEmergency: "+91 96450 96906",
  email: "mail@drreenas.com",
  hours: "Monday – Saturday: 8:00 AM – 9:00 PM (Sunday by Appointment / Emergency)",
  stats: [
    { label: "Years of Smiles", value: "15+" },
    { label: "Specialist Doctors", value: "9+" },
    { label: "Happy Patients", value: "25,000+" },
    { label: "Modern Clinics", value: "2 Centers" },
  ]
}

export const BRANCHES: BranchItem[] = [
  {
    id: "vazhakkulam",
    name: "Vazhakkulam Branch",
    area: "SH 16 Highway, Vazhakkulam",
    address: "State Highway 16, Vazhakkulam, Muvattupuzha - Perumbavoor Road, Kerala 683105",
    landmark: "Conveniently located on SH 16 with patient parking facility",
    phone: "+91 90483 19999",
    timing: "Mon - Sat: 8:00 AM - 9:00 PM | Sun: Closed",
    mapEmbedUrl: "https://maps.google.com/maps?q=Vazhakkulam%20Kerala%20683105&t=&z=14&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://maps.google.com/?q=Vazhakkulam+Kerala+683105"
  },
  {
    id: "kochi",
    name: "Kochi - Edappally Branch",
    area: "HMT Junction, Thrikkakara",
    address: "Pipeline Rd, HMT Junction, Vidya Nagar Colony, Thrikkakara, Edappally, Kochi, Kerala 682021",
    landmark: "Near Cochin University (CUSAT) & Metro Station connectivity",
    phone: "+91 90483 29999",
    timing: "Mon - Sat: 8:00 AM - 9:00 PM | Sun: Closed",
    mapEmbedUrl: "https://maps.google.com/maps?q=Pipeline+Rd+HMT+Junction+Thrikkakara+Edappally+Kochi&t=&z=14&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://maps.google.com/?q=Pipeline+Rd+HMT+Junction+Thrikkakara+Edappally+Kochi"
  }
]

export const SERVICES: ServiceItem[] = [
  {
    id: "routine-care",
    title: "Routine Exams & Cleanings",
    subtitle: "Preventive Care & Dental Hygiene",
    icon: "Sparkles",
    shortDesc: "Comprehensive checkups, ultrasonic scaling, and tartar removal to maintain fresh breath, healthy gums, and cavity-free teeth.",
    fullDesc: "Routine dental checkups provide an essential opportunity for you to get your teeth and gums professionally cleaned, eliminating plaque build-up and preventing periodontal disease. Regular preventative hygiene gives you a brighter, cleaner smile and protects your general oral wellbeing.",
    benefits: [
      "Ultrasonic tartar & calculus removal",
      "Plaque & surface stain polishing",
      "Early cavity & oral cancer screening",
      "Tailored oral hygiene consultation"
    ],
    duration: "30 - 45 mins",
    tag: "Preventive"
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Tooth Jewellery",
    subtitle: "Smile Makeovers & Aesthetic Enhancements",
    icon: "Gem",
    shortDesc: "Porcelain veneers, cosmetic bonding, smile transformations, and crystal tooth jewellery for a dazzling, confident smile.",
    fullDesc: "If you have gapped, chipped, stained, or misaligned teeth, you can restore them for a complete 'Smile Makeover' with custom porcelain veneers. Each veneer is custom-crafted to harmonize with your facial aesthetics. We also specialize in genuine Swarovski tooth jewellery for that captivating sparkle.",
    benefits: [
      "Ultra-thin custom porcelain veneers",
      "Gap closure and enamel contouring",
      "Swarovski non-invasive crystal sparkles",
      "Digital smile preview prior to treatment"
    ],
    duration: "1 - 2 Visits",
    tag: "Popular"
  },
  {
    id: "crowns-bridges",
    title: "Crowns & Fixed Bridges",
    subtitle: "Natural Tooth Restoration & Lab Precision",
    icon: "Crown",
    shortDesc: "Custom-made metal-free porcelain and monolithic zirconia crowns to rebuild damaged teeth and seamlessly replace missing teeth.",
    fullDesc: "Tooth crowns are custom-engineered in specialized dental laboratories to cover and restore teeth weakened by large cavities, fractures, or root canal therapy. Our metal-free porcelain and zirconia crowns blend flawlessly with your natural tooth shade so your smile looks 100% authentic.",
    benefits: [
      "CAD/CAM precision-milled Zirconia crowns",
      "100% biocompatible, non-allergenic materials",
      "Natural translucency matching adjacent teeth",
      "Long-lasting chewing strength & durability"
    ],
    duration: "2 Visits",
    tag: "Restorative"
  },
  {
    id: "dentures-implants",
    title: "Dentures & Dental Implants",
    subtitle: "Permanent Tooth Replacement & One-Day Dentures",
    icon: "ShieldCheck",
    shortDesc: "Full and partial dentures, custom One-Day Dentures, and permanent titanium dental implants with lifetime durability.",
    fullDesc: "Full and partial dentures restore missing teeth with maximum comfort and anatomical precision. We take pride in our rapid-turnaround 'One-Day Dentures' engineered to fit like a puzzle piece. For permanent restoration, our dental implants provide titanium anchors that fuse into the bone just like natural roots.",
    benefits: [
      "Signature One-Day Denture service",
      "Flexible unbreakable Valplast dentures",
      "Single and full-arch dental implants",
      "Restores 100% natural biting force"
    ],
    duration: "Same day to multi-stage",
    tag: "Signature Service"
  },
  {
    id: "whitening-emergency",
    title: "Teeth Whitening & Emergency Dental Care",
    subtitle: "Rapid Brightening & 24/7 Urgency Support",
    icon: "Zap",
    shortDesc: "Medical-grade laser/LED teeth whitening for up to 8 shades brighter, plus rapid same-day emergency relief for acute toothaches.",
    fullDesc: "Choose from fast-acting in-clinic laser whitening systems proven to deliver dramatic, glistening results without harming your enamel. For emergencies—such as severe dental pain, knocked-out teeth, or fractured crowns—our team provides priority same-day scheduling to provide relief immediately.",
    benefits: [
      "Instant 6-8 shades lighter in 45 minutes",
      "Enamel-safe desensitizing formulation",
      "Same-day emergency pain intervention",
      "Trauma and emergency tooth repair"
    ],
    duration: "45 mins / Immediate",
    tag: "Fast Action"
  },
  {
    id: "gum-care",
    title: "Gum Disease Prevention & Periodontics",
    subtitle: "Healthy Foundations for Long-Term Oral Health",
    icon: "HeartPulse",
    shortDesc: "Deep periodontal pocket therapy, curettage, bleeding gums treatment, and laser-assisted periodontal care.",
    fullDesc: "Periodontal health is the foundation of your entire smile. Our gentle treatments include deep cleaning of periodontal pockets beneath the gumline, root planing to deter bacterial adherence, and regenerative therapies to halt bone loss and eliminate bleeding gums.",
    benefits: [
      "Deep scaling and root planing (SRP)",
      "Bacterial pocket reduction therapy",
      "Treatment for bleeding and receding gums",
      "Long-term periodontal maintenance programs"
    ],
    duration: "40 - 60 mins",
    tag: "Essential"
  },
  {
    id: "root-canal",
    title: "Microscopic Root Canal Therapy",
    subtitle: "Pain-Free Single Sitting Endodontics",
    icon: "Crosshair",
    shortDesc: "Save infected or deeply painful teeth with computer-guided rotary endodontics and single-visit painless root canal therapy.",
    fullDesc: "No more painful multiple visits. Our root canal specialists use digital apex locators, high-magnification optics, and flexible nickel-titanium rotary files to gently clean and seal infected root canals comfortably and painlessly in a single visit.",
    benefits: [
      "Single-visit painless procedure",
      "Digital electronic apex locators",
      "Saves your natural tooth structure",
      "Local computerized anesthesia delivery"
    ],
    duration: "45 - 60 mins",
    tag: "Specialist Care"
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Clear Aligners",
    subtitle: "Straight Teeth & Perfect Alignment",
    icon: "Smile",
    shortDesc: "Custom clear invisible aligners, ceramic braces, and pediatric habit-breaking appliances for children and adults.",
    fullDesc: "Achieve the aligned, harmonious smile you've always wanted. Dr. Reena's clinic offers transparent clear aligners for adults looking for discrete treatment, as well as ceramic tooth-colored braces and Damon self-ligating systems for swift, comfortable tooth movement.",
    benefits: [
      "Invisible, removable clear aligners",
      "Aesthetic ceramic tooth-colored brackets",
      "Correction of crowding, spacing & crossbites",
      "Flexible monthly installment options"
    ],
    duration: "6 - 18 months",
    tag: "Orthodontic"
  }
]

export const DOCTORS: DoctorItem[] = [
  {
    id: "dr-reena-riyaz",
    name: "Dr. Reena Riyaz",
    role: "Chief Dental Surgeon & Founder",
    qualification: "BDS",
    specialty: "Cosmetic Dentistry & Smile Design",
    bio: "Kerala-born visionary dental practitioner with extensive experience operating successful practices in Kochi. Passionate about continuing medical education, Dr. Reena invests hundreds of hours annually at prestigious universities to bring international advancements to her patients.",
    experience: "15+ Years Experience",
  },
  {
    id: "dr-aneesa-noorudheen",
    name: "Dr. Aneesa Noorudheen",
    role: "Senior Dental Surgeon",
    qualification: "BDS",
    specialty: "General & Restorative Dentistry",
    bio: "Dedicated dental surgeon focused on gentle preventive care, patient comfort, tooth restorations, and comprehensive dental examinations.",
    experience: "8+ Years Experience",
  },
  {
    id: "dr-hareesh-mt",
    name: "Dr. Hareesh M.T.",
    role: "Consultant Prosthodontist & Implantologist",
    qualification: "MDS (Prosthodontics)",
    specialty: "Full Mouth Rehabilitation & Dental Implants",
    bio: "Master specialist in crowns, bridges, complete dentures, and titanium implant restoration, combining clinical precision with aesthetic artistry.",
    experience: "12+ Years Experience",
  },
  {
    id: "dr-shaheen-aboobacker",
    name: "Dr. Shaheen Aboobacker",
    role: "Endodontist & Root Canal Specialist",
    qualification: "MDS (Conservative Dentistry & Endodontics)",
    specialty: "Painless Single-Sitting Root Canal",
    bio: "Renowned specialist focusing on microscopic endodontics, pain management, and salvage of severely damaged natural teeth.",
    experience: "10+ Years Experience",
  },
  {
    id: "dr-renjith-k",
    name: "Dr. Renjith K",
    role: "Endodontist & Root Canal Specialist",
    qualification: "MDS (Conservative Dentistry)",
    specialty: "Rotary Endodontics & Tooth Reconstruction",
    bio: "Expert in complex root canal anatomies, re-treatments, and aesthetic core crown buildups.",
    experience: "9+ Years Experience",
  },
  {
    id: "dr-akhil-gopi",
    name: "Dr. Akhil Gopi",
    role: "Consultant Orthodontist",
    qualification: "MDS (Orthodontics & Dentofacial Orthopedics)",
    specialty: "Clear Aligners & Contemporary Braces",
    bio: "Specializes in modern clear aligner technology, lingual orthodontics, and dentofacial orthopedics for children and adults.",
    experience: "11+ Years Experience",
  },
  {
    id: "dr-krishnakumar",
    name: "Dr. Krishnakumar",
    role: "Pediatric Dentist (Pedodontist)",
    qualification: "MDS (Pedodontics & Preventive Dentistry)",
    specialty: "Child Oral Care & Habit Breaking",
    bio: "Child-friendly dental specialist skilled in behavioral management, preventive fluoride sealants, and gentle pediatric treatments.",
    experience: "10+ Years Experience",
  },
  {
    id: "dr-anooj-pb",
    name: "Dr. Anooj P.B.",
    role: "Oral & Maxillofacial Surgeon",
    qualification: "MDS (Oral & Maxillofacial Surgery)",
    specialty: "Wisdom Tooth Surgery & Facial Trauma",
    bio: "Hospital-trained surgeon specializing in surgical removal of impacted wisdom teeth, bone grafting, and dental surgical procedures.",
    experience: "13+ Years Experience",
  },
  {
    id: "dr-deepak-thomas",
    name: "Dr. Deepak Thomas",
    role: "Consultant Periodontist",
    qualification: "MDS (Periodontics)",
    specialty: "Gum Aesthetics & Laser Periodontal Therapy",
    bio: "Expert in gum tissue regeneration, crown lengthening, gummy smile corrections, and advanced periodontal therapy.",
    experience: "11+ Years Experience",
  }
]

export const FAQS = [
  {
    q: "What makes the 'One Day Denture' at Dr. Reena's unique?",
    a: "Our in-house clinical coordination and state-of-the-art laboratory workflows allow us to fabricate, customize, and deliver durable, natural-looking dentures within a single day for qualifying patients, saving you multiple tedious appointments."
  },
  {
    q: "How can I book an appointment at your Vazhakkulam or Kochi clinic?",
    a: "You can book directly using our online booking form on this website, call our central appointment lines (+91 90483 19999 / +91 90483 29999), or message us via WhatsApp. Walk-ins are also welcome, although appointments ensure zero waiting time."
  },
  {
    q: "Are root canal treatments painful at Dr. Reena's Clinic?",
    a: "No! With modern computerized local anesthesia, precision digital apex locators, and rotary endodontic instruments handled by our MDS Endodontists, root canal procedures are virtually painless and typically completed in a single comfortable sitting."
  },
  {
    q: "Do you offer emergency dental appointments?",
    a: "Yes. We reserve dedicated emergency slots every day for patients experiencing acute toothaches, dental trauma, swelling, or knocked-out teeth. Call our emergency helpline at +91 96450 96906 for immediate guidance."
  },
  {
    q: "What safety and sterilization standards do you follow?",
    a: "We adhere to rigorous 4-step European Class B autoclave sterilization standards. All surgical handpieces, instruments, and materials are sterilized in sealed pouches, with disposable barriers used for each patient to guarantee total safety."
  }
]

export const TESTIMONIALS = [
  {
    name: "Anjali Menon",
    location: "Kochi, Kerala",
    rating: 5,
    text: "Dr. Reena and her team gave me the exact smile makeover I dreamed of with porcelain veneers. The clinic in Edappally is immaculate, hygienic, and very reassuring. Highly recommended!",
    treatment: "Cosmetic Veneers"
  },
  {
    name: "Mathew Varghese",
    location: "Muvattupuzha / Vazhakkulam",
    rating: 5,
    text: "I was visiting from abroad and needed a fast denture replacement. The One Day Denture service at Dr. Reena's was a lifesaver. The fit is perfect, and I can eat and smile with total confidence.",
    treatment: "One Day Denture"
  },
  {
    name: "Dr. Sujatha Nair",
    location: "Thrikkakara, Kochi",
    rating: 5,
    text: "Pain-free root canal treatment completed in a single sitting by Dr. Shaheen. The doctors take time to explain everything thoroughly. Extremely professional medical standards.",
    treatment: "Single-Sitting RCT"
  }
]
