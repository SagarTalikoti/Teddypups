# TeddyPups U.A.E. 🧸🐾

Premium teacup & teddy bear puppies in Dubai. Official modern web application built with **Next.js 15 (App Router)**, **React 19**, and vanilla CSS design system.

---

## ✨ Features

- **Interactive Mascot (Teddy)**: Follows the scroll path dynamically, performs custom animations (peekaboo, hop, trot, snug in basket), and adapts to mobile screen lanes.
- **Interactive Paw Trail**: Custom 5-pad cursor trail that paints animated footprints following user interactions.
- **Complete Puppy Catalog**: 42 individual puppy detail pages with photos, video showcases, passport guarantees, and WhatsApp concierge.
- **Mobile Responsive**: Custom 2-column mobile puppy lineup, sticky bottom action bar, and touch-optimized navigation.
- **SEO & Metadata**: Dynamic OpenGraph tags, JSON-LD structured schemas, custom favicon, and accessibility compliance.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
4. Click **Deploy**.

---

## 📁 Project Structure

```
├── app/                    # Next.js 15 App Router routes & global styles
│   ├── (routes)/           # puppies, happy-families, how-it-works, faq, contact, gone-home
│   ├── globals.css         # Complete design system & keyframe animations
│   ├── layout.tsx          # Root layout, fonts, header, footer, paw trail canvas
│   └── page.tsx            # Interactive homepage
├── components/             # Reusable UI components & Mascot controller
│   ├── home/               # Sections: Hero, Meet, Paths, Journey, Passport, Dusk, Night, CTA
│   ├── puppies/            # Puppy detail components & photo gallery
│   ├── PawTrailCanvas.tsx  # Interactive paw footprint cursor trail
│   ├── PupBuddy.tsx        # SVG mascot puppet
│   ├── PupJourney.tsx      # Mascot scroll physics engine & mobile lane calculator
│   ├── SiteHeader.tsx      # Navigation & mobile drawer
│   └── SiteFooter.tsx      # Footer with basket animation
├── lib/                    # Typed datasets & utilities
│   ├── data.ts             # 42 puppies, reviews, showroom details, FAQs
│   └── sketch.ts           # Hand-drawn SVG doodle assets
└── public/                 # Static brand assets, puppy images, icons, and cursors
```

---

## 📄 License

Proprietary © 2026 TeddyPups U.A.E. All rights reserved.
