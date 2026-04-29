# ⚡ Winfluence — Advertising Agency Landing Page

**Winfluence** is a bold, Neo-Brutalist inspired landing page crafted for next-generation advertising agencies. Built with **React 19**, **Vite**, and **Tailwind CSS 4**, it emphasizes strong visual identity, high-contrast design, and performance-driven UI to deliver a memorable and conversion-focused experience.

🔗 **Live Demo**
[https://dam-company-profile.vercel.app/](https://dam-company-profile.vercel.app/)

💻 **Source Code**
[https://github.com/adamandp/dam-company-profile](https://github.com/adamandp/dam-company-profile)

---

## ✨ Features

- 🎨 **Neo-Brutalist Design System**
  Bold typography, thick borders, and high-contrast color palette (Electric Blue & Lime Green) to create a strong Gen-Z brand identity

- 🧩 **Structured Content Sections**
  - Hero section with dynamic layout composition
  - Services grid (Data Analytics, Digital Marketing, Social Media)
  - Mission & brand storytelling module
  - Social proof (testimonials & achievements)
  - Categorized FAQ with tab-based navigation

- 🎠 **Interactive Carousel**
  Smooth client and portfolio navigation powered by `react-slick`

- 📱 **Fully Responsive Layout**
  Optimized across mobile, tablet, and desktop with consistent visual hierarchy

- ⚡ **Micro-interactions & Animations**
  Subtle transitions and motion using `tw-animate-css`

---

## 🛠 Tech Stack

### Core

- **React 19**
- **TypeScript**

### Build Tool

- **Vite 8**

### Styling & UI

- **Tailwind CSS 4**
- **shadcn/ui**

### Components & Utilities

- **React Slick** (Carousel)
- **Lucide React** (Icons)
- **Geist Variable Font** (Typography)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm v10+

---

### Installation

```bash
# Clone repository
git clone https://github.com/adamandp/dam-company-profile.git

# Navigate to project
cd dam-company-profile

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

App runs on:

```
http://localhost:5173
```

---

## 🐳 Docker Support

```bash
# Build image
docker build -t dam-winfluence .

# Run container
docker run -p 5173:5173 dam-winfluence
```

---

## 📂 Project Structure

```
src/
├── assets/       # Optimized images, SVGs, and brand assets
├── components/   # Modular UI sections (Hero, Services, FAQ, etc.)
├── hooks/        # Custom React hooks
├── lib/          # UI and configuration setup
├── utils/        # Helper functions (cn, formatters)
├── App.tsx       # Main layout orchestration
└── main.tsx      # Entry point
```

---

## 🧠 Engineering & Design Notes

### 🎨 UI Consistency (Neo-Brutalism)

- Consistent use of thick borders (`border-4`) and hard shadows
- Strict adherence to color tokens (no arbitrary values)
- Layout intentionally uses asymmetry while preserving readability

### 🧩 Component Strategy

- Large sections are modularized (Hero, Services, FAQ)
- Reusable UI elements follow a composable structure
- Strong TypeScript typing across components (no `any`)

### ⚡ Performance

- Tree-shaking for icons (Lucide selective imports)
- Lightweight Vite build for fast startup and bundle efficiency

---

## 🚧 Challenges

Maintaining layout consistency with irregular Neo-Brutalist shapes while ensuring responsiveness across all screen sizes. Balancing bold visual design with usability and accessibility required careful spacing, hierarchy, and component structuring.

---

## 👤 Author

Developed by **Adam Andana Putra**
