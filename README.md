# Milo’s Cafe — React JS Website

> **Where Colombian Roots Meet European Cafe Culture.**  
> Home of the Triangle’s best scratch-made focaccia sandwiches, specialty coffee, and authentic crepes. Crafted with love in Morrisville, NC.  
> Voted the *"Best Sandwich Shop in the Triangle"* by *The News & Observer*.

---

## 🚀 Live Demo & Deployment

This project is configured for **one-click deployment on [Vercel](https://vercel.com/)**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Vercel Deployment Settings (Pre-configured via `vercel.json`):
- **Framework Preset:** Vite
- **Build Command:** `npm run build` (or `vite build`)
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **SPA Routing:** Automatic rewrite rule configured in `vercel.json` for client-side routing.

---

## 🛠️ Tech Stack

- **Frontend:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/) (Hash/SPA routing)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styling:** Custom CSS design system inspired by warm European cafe aesthetics, terracotta tones, and artisanal bakery typography
- **Typography:** Playfair Display (Serif) & Plus Jakarta Sans (UI)

---

## ✨ Features

- 🏆 **Triangle's Best Sandwich Shop:** Features the famous chicken schnitzel sandwich with table-side torched gruyère, Caprese twist, and scratch focaccia.
- ⏰ **US Eastern Time (`America/New_York`) Live Status Engine:** Calculates real-time open/closed status for Morrisville, NC.
- 📱 **Mobile-First Responsive Design:** Sticky header with animated hamburger drawer and a dedicated mobile bottom action dock (Call, Directions, Menu, Instagram).
- 🥞 **Interactive Menu:** Instant category filtering across sandwiches, crepes, pastries, and single-origin Colombian espresso drinks with US Dollar pricing ($).
- 🖼️ **Interactive Photo Gallery Lightbox:** Full-screen modal previews of authentic high-resolution photos of the cafe, patio, and bakery.
- 🗺️ **US Regional Triangle Directions:** Step-by-step driving guidance from Raleigh, Cary, Durham, RTP tech campuses, and RDU Airport.
- 📬 **Interactive Catering & Contact Form:** Real-time state validation for corporate orders and event requests.
- 💳 **US Payment & Accessibility:** Notes for Apple Pay, Google Pay, Tap-to-Pay, and ADA accessible entrance.

---

## 💻 Local Development

### 1. Clone & Install Dependencies
```bash
git clone <your-repo-url>
cd "Milo's Cafe"
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The app will run at `http://localhost:3000/` (or `http://localhost:3001/`).

### 3. Production Build
```bash
npm run build
```
Generates a minified production build in the `/dist` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📦 Pushing to GitHub & Deploying to Vercel

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "Initial commit: Milo's Cafe React JS website"
git branch -M main
```

### Step 2: Push to Your GitHub Repository
Create a new repository on [GitHub](https://github.com/new), then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository.
4. Click **"Deploy"**. Vercel will automatically read `vercel.json` and build the application.

---

## 📍 Contact & Information

- **Address:** 10119 Chapel Hill Rd, Morrisville, NC 27560
- **Phone:** (919) 443-8000
- **Instagram:** [@milos_europeancafe](https://instagram.com/milos_europeancafe)
- **Hours:**
  - Mon – Thu: 7:00 AM – 4:00 PM ET
  - Fri – Sat: 7:00 AM – 5:00 PM ET
  - Sun: 8:30 AM – 3:30 PM ET
