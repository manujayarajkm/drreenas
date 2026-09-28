# Dr. Reena's Dental Speciality Clinic — Modern Web Redesign

A recreation and modern redesign of [drreenas.com](https://web.archive.org/web/20180805110133/http://drreenas.com/) built with **React 19**, **Vite 8**, **Tailwind CSS**, and **shadcn/ui-inspired primitives**, engineered for blazing performance, accessibility, and high visual conversion.

---

## 🌟 Highlights of the Redesign

### 1. Preserved Heritage & Archived Content
- **Original Brand Identity:** Restored Dr. Reena Riyaz's authentic clinical messaging (*"Welcome to the world of beautiful smiles"*, *15+ years experience*, continuing dental education).
- **Historic Assets:** Preserved original photography (`archived_info_block.jpg`, `archived_logo.jpg`, `archived_slider_bg.jpg`) in `/public/images/`.
- **Signature Service Highlight:** Re-engineered the **ONE DAY DENTURE** hallmark feature with a 3-step timeline and customized denture options.
- **Multidisciplinary Specialist Panel:** Full showcase of all 9 specialist doctors and surgeons from the archive:
  - **Dr. Reena Riyaz** (Chief Dental Surgeon & Founder - BDS)
  - **Dr. Aneesa Noorudheen** (Senior Dental Surgeon - BDS)
  - **Dr. Hareesh M.T.** (Prosthodontist & Implantologist - MDS)
  - **Dr. Shaheen Aboobacker** (Root Canal Specialist - MDS)
  - **Dr. Renjith K** (Root Canal Specialist - MDS)
  - **Dr. Akhil Gopi** (Orthodontist - MDS)
  - **Dr. Krishnakumar** (Pedodontist - MDS)
  - **Dr. Anooj P.B.** (Oral & Maxillofacial Surgeon - MDS)
  - **Dr. Deepak Thomas** (Periodontist - MDS)
- **Both Clinical Branches:** Complete location details, timings, and interactive Google Maps for both centers:
  1. **Vazhakkulam Branch:** State Highway 16, Vazhakkulam, Kerala 683105
  2. **Kochi - Edappally Branch:** Pipeline Rd, HMT Junction, Thrikkakara, Edappally, Kochi, Kerala 682021

---

## 🚀 Modern Upgrades & New Features

1. **Performance-First Architecture:**
   - Sub-second first contentful paint (FCP) powered by Vite 8 and React 19.
   - Clean tree-shaken Lucide icons and pure CSS utilities (Gzipped JS: ~107 KB, Gzipped CSS: ~8 KB).
2. **Interactive Appointment Engine:**
   - Branch switcher (Vazhakkulam vs. Kochi).
   - Real-time specialist doctor & procedure picker.
   - Date picker and time-slot selector (Morning, Afternoon, Evening).
   - Celebration confetti feedback and booking confirmation modal with direct 1-click WhatsApp appointment forwarding.
3. **Interactive Service Modals:**
   - In-depth modal dialogs for each of the 8 dental specialties with procedure details, estimated duration, and bulleted clinical benefits.
4. **Doctor Directory with Specialty Filters:**
   - Filter by specialty (*Chief Surgeons*, *Root Canal / Endodontics*, *Implants & Surgery*, *Braces & Kids*).
   - Direct *"Select Doctor"* button that pre-populates the booking form.
5. **Interactive Branch Switcher & Maps:**
   - Dynamic tab toggle with embed map and 1-click Google Maps directions.
   - Re-architected contact inquiry form.
6. **Mobile-Responsive Sticky Nav & Floating Emergency Bar:**
   - Top emergency bar with live operational hours.
   - Floating WhatsApp chat and instant call menu with direct branch dials.
7. **Patient Social Proof & FAQ:**
   - Verified patient reviews.
   - Expandable FAQ accordion addressing common queries (same-day dentures, pain-free root canals, sterilizations, and emergency slots).

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS + Custom CSS Design Tokens (HSL color model)
- **UI Architecture:** shadcn/ui component patterns (`Button`, `Card`, `Badge`, `Dialog`, `Input`, `Textarea`)
- **Icons:** `lucide-react`
- **Effects:** `canvas-confetti`
- **Typography:** Google Fonts (*Outfit* for headings, *Plus Jakarta Sans* for UI body)

---

## 💻 Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
The app will be running at [http://localhost:5173/](http://localhost:5173/).

### 3. Build for production
```bash
npm run build
```
Creates an optimized production bundle inside `dist/`.
