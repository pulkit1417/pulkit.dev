# pulkit.dev — Personal Portfolio

> A high-performance, glassmorphic developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **GSAP**.

Live → **[pulkit.dev](https://pulkit.dev)** &nbsp;·&nbsp; Author → **[Pulkit Gupta](https://github.com/pulkit1417)**

---

## ✨ Features

- **Glassmorphism design system** — cohesive glass panels, cards, and section backgrounds using `backdrop-filter`
- **GSAP animation suite** — 15 scroll-triggered animations: parallax orbs, staggered reveals, magnetic buttons, timeline dot pulses, skill bar counters
- **Three.js particle background** — interactive star-field canvas rendered behind all content
- **Typewriter hero** — character-by-character role cycling with a blinking golden cursor
- **Animated stat counters** — rAF-based ease-out cubic counters for LeetCode & projects stats
- **Responsive navbar** — morphing glass pill on scroll (desktop) + hamburger drawer (mobile)
- **"Currently" status board** — live developer context: building, learning, goal, and open-to
- **Daily stack badges** — tinted icon+label chips with real SVG logos (MongoDB, Next.js)
- **Projects section** — featured 3-up grid + expandable "View More" with 3D tilt on hover
- **Modular architecture** — each section is an isolated component; data and types are decoupled
- **Fully responsive** — fluid layout from 320 px mobile to 4K desktop

---

## 🗂 Project Structure

```
pulkit.dev/
├── public/
│   └── assets/
│       ├── pulkit_gupta_resume.pdf
│       └── images/                    # Project screenshots
│           ├── BloggingByte.png
│           ├── Encrypto.png
│           └── KickVault.png
│
└── src/
    ├── types/
    │   └── index.ts                   # Shared TypeScript interfaces
    │
    ├── data/
    │   └── index.ts                   # All portfolio data (single source of truth)
    │
    ├── components/
    │   ├── CustomCursor.tsx           # Golden magnetic custom cursor
    │   ├── FormField.tsx              # Reusable input field
    │   ├── LoadingScreen.tsx          # Three.js + GSAP loading screen
    │   ├── Navbar.tsx                 # Scroll-morph pill nav + mobile hamburger
    │   ├── ProjectCard.tsx            # 3D-tilt project card
    │   ├── ThreeBackground.tsx        # Three.js star-field canvas
    │   │
    │   └── sections/
    │       ├── HeroSection.tsx        # Typewriter, stat counters, orbs
    │       ├── AboutSection.tsx       # Bio, Currently board, Daily Stack
    │       ├── ExperienceSection.tsx  # Animated timeline
    │       ├── SkillsSection.tsx      # Categorised skill tags
    │       ├── ProjectsSection.tsx    # Featured grid + expandable extras
    │       ├── CertificationsSection.tsx
    │       ├── ContactSection.tsx     # Form with own state
    │       └── FooterSection.tsx
    │
    └── app/
        ├── favicon.ico
        ├── globals.css                # Design tokens, glass utilities, typewriter cursor
        ├── layout.tsx                 # Root layout, font loading, metadata
        └── page.tsx                   # GSAP master suite + section orchestrator (~180 lines)
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Vanilla CSS |
| Animations | GSAP (ScrollTrigger, TextPlugin, CustomEase) |
| 3D / Canvas | Three.js |
| Icons | Lucide React + Font Awesome 6 |
| Deployment | Vercel |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Type-check without emitting
npx tsc --noEmit

# Production build
npm run build
```

---

## 📄 Sections

| # | Section | Highlights |
|---|---|---|
| 1 | **Hero** | Typewriter role cycling · rAF stat counters · parallax orbs |
| 2 | **About** | Bio · "Currently" status board · Daily Stack badges |
| 3 | **Experience** | Animated timeline — WriteCream & Grootz internships |
| 4 | **Skills** | 4 categories · 20+ colour-coded skill tags |
| 5 | **Projects** | 3 featured + 5 extras (expandable) · 3D tilt on hover |
| 6 | **Certifications** | AWS Cloud Practitioner · LeetCode, GSSoC, Connect-SRM |
| 7 | **Contact** | Two-panel glassmorphic form with send success state |

---

## 🏗 Architecture Notes

- **`src/data/index.ts`** is the single source of truth for all portfolio content. Update it to add/remove projects, experiences, or skills — no JSX changes required.
- **`src/app/page.tsx`** only orchestrates the GSAP animation suite and renders section components. It is ~180 lines.
- **Section components** own their own local state (e.g. `ContactSection` owns form state, `ProjectsSection` owns `showAll`).
- The GSAP master context in `page.tsx` targets sections by CSS class selectors, so animations are decoupled from component internals.

---

## 📬 Contact

| | |
|---|---|
| Email | gupta.pulkit2408@gmail.com |
| GitHub | [@pulkit1417](https://github.com/pulkit1417) |
| LinkedIn | [pulkit-gupta-708941287](https://www.linkedin.com/in/pulkit-gupta-708941287/) |
| Instagram | [@pulkit__24](https://www.instagram.com/pulkit__24/) |

---

<p align="center">Built with ☕ and too many <code>gsap.fromTo()</code> calls.</p>
