<div align="center">

# ✦ pulkit.dev

**A premium personal portfolio — engineered with obsession.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[**🌐 Live Site**](https://pulki1417.vercel.app/) · [**📂 GitHub**](https://github.com/pulkit1417) · [**📄 Resume**](/public/assets/pulkit_gupta_resume.pdf)

</div>

---

## ✨ Overview

This is the source code for **[pulki1417.vercel.app](https://pulki1417.vercel.app/)** — my personal portfolio, built from scratch as a showcase of both my design sensibility and engineering depth. It's not a template; every animation, interaction, and layout decision has been deliberately crafted.

The site features a **Three.js animated background**, a **GSAP-powered loading screen**, a **scrolling glassmorphic navbar** that collapses into a centered pill, a **custom cursor**, and 14+ distinct scroll-triggered animations — all rendering at 60 fps.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3 + custom CSS variables |
| **3D / WebGL** | Three.js · `@react-three/fiber` · `@react-three/drei` |
| **Animations** | GSAP 3 (ScrollTrigger · TextPlugin · CustomEase) · Framer Motion |
| **Icons** | Lucide React · Font Awesome 6 |
| **Font** | Poppins (Google Fonts, all weights) |
| **Hosting** | Firebase Hosting |

---

## 🎨 Feature Highlights

### 🖥️ Loading Screen
- Three.js particle field with GSAP-orchestrated entrance
- Smooth reveal into the main portfolio on load complete

### 🧭 Navbar
- Transparent on top → glassmorphic pill on scroll
- Fully responsive with mobile drawer

### 🌌 Hero Section
- Layered GSAP timeline: badge → title → subtitle → CTAs → stats
- Role **typewriter loop** cycling through `Full Stack Developer`, `Open Source Contributor`, `Cloud Enthusiast`, `Problem Solver`
- **Parallax orbs** that drift with mouse position
- **Magnetic CTA buttons** with elastic snap-back
- Animated stat counters (LeetCode, Projects, CGPA)

### 🃏 Project Cards
- 3D tilt on hover (`rotateX` / `rotateY` via GSAP)
- Glassmorphism card styling with border glow
- "View More" toggle with staggered entry animations

### 🏆 Certifications & Achievements
- AWS Certified Cloud Practitioner card
- LeetCode rank, GSSoC contribution, Connect-SRM co-founder highlight

### 📬 Contact
- Two-panel form: info panel (gradient) + form fields with staggered GSAP entry
- Firebase-ready form handler

### 🖱️ Custom Cursor
- Replaces the default browser cursor with a fluid, interactive cursor

---

## 📁 Project Structure

```
pulkit.dev/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout — metadata, fonts, global providers
│   │   ├── page.tsx          # Main single-page portfolio (all sections)
│   │   └── globals.css       # Design tokens, glassmorphism utilities
│   └── components/
│       ├── Navbar.tsx        # Scroll-reactive glassmorphic navbar
│       ├── LoadingScreen.tsx # Three.js + GSAP loading screen
│       ├── ThreeBackground.tsx # Ambient WebGL background
│       └── CustomCursor.tsx  # Custom magnetic cursor
├── public/
│   └── assets/               # Resume PDF and static assets
├── firebase.json             # Firebase Hosting config
├── next.config.ts
└── tailwind.config.ts
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/pulkit1417/pulkit.dev.git
cd pulkit.dev

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |

---

## 🚢 Deployment

The site is deployed on **Firebase Hosting**.

```bash
# Build and deploy
npm run build
firebase deploy
```


<div align="center">

Designed & built by **Pulkit Gupta** with ☕ and way too many GSAP timelines.

*If you fork this, a star ⭐ would be really appreciated!*

</div>
