# Pawan Eswaran — Engineering Portfolio

A premium, highly polished, minimal, and modern **editorial engineering portfolio** designed to showcase software development expertise with cinematic visual presentation, fluid motion, and professional design aesthetics.

This website is a completely custom-built SPA (Single Page Application) featuring high-contrast interactive splits, snap-scrolling project presentation and fluid transitions.

---

## 🌟 Key Features

*   **Editorial Landing Page (`/`)**: A striking 50/50 split-screen layout displaying high-impact, bold typography with synchronized kinetic text animations (`Plus Jakarta Sans`) highlighting focus areas.
*   **Horizontal Projects Showcase (`/projects`)**: A custom-engineered horizontal snap-scrolling carousel featuring 3D card-flip animations (CSS perspective transforms) displaying project details, tech stacks, and active links.
*   **Dynamic Skills Network (`/skills`)**: An 8-category glassmorphic grid backed by an animated custom SVG network grid background, featuring bold tech-badge pills.
*   **Immersive Experience Timeline (`/experience`)**: A minimalist, high-contrast dark timeline featuring a dual-box layout (Metadata Card + Process Cards) powered by scroll-triggered entrance/exit viewport animations.
*   **Persistent Shell Routing (`MainLayout.jsx`)**: An edge-aligned global navigation overlay including persistent back-anchors, social connections, and route-sensitive responsive styles.
*   **Seamless Transitions**: Route changes are governed by Framer Motion's `AnimatePresence` with custom hardware-accelerated blur/fade transitions.

---

## 🛠️ Technology Stack

*   **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Ultra-fast development server & optimized production building)
*   **Routing**: [React Router DOM v6](https://reactrouter.com/) (Declarative page routing & layout nesting)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Native CSS theme configuration & utility-first workflows)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) (Hardware-accelerated viewport triggers, typing indicators, and page transition lifecycles)
*   **Icons**: [Lucide React](https://lucide.dev/) (Minimal modern icons)
*   **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (High-contrast, geometric premium sans-serif)

---

## 📁 Repository Structure

```text
src/
├── components/
│   ├── common/         # SEO metadata wrapper (React Helmet / standard meta tags)
│   ├── home/           # Hero animations & landing widgets
│   ├── layout/         # Persistent MainLayout overlay & navigation
│   └── projects/       # Custom cards & flip wrappers
├── data/
│   ├── about.js        # Centralized static strings for easy updates
│   ├── experience.js   # Structured timeline points & detailed milestones
│   └── projects.js     # Projects data, tech badges, and metadata
├── pages/
│   ├── About.jsx       # Editorial profile sheet
│   ├── Contact.jsx     # Connection links & mail integration
│   ├── Experience.jsx  # Interactive dual-card scrolling timeline
│   ├── Home.jsx        # Split-screen responsive intro
│   ├── Projects.jsx    # Snap scroll 3D showcase
│   └── Skills.jsx      # SVG-backed glassmorphic grid
├── App.jsx             # Main routing registry & global wrapper
├── index.css           # Tailwind system directives & premium custom utility classes
└── main.jsx            # DOM entrypoint
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Pawan-19012006/Portfolio-Pawan.git
    cd Portfolio-Pawan
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

### Development Server

Spin up the local hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Build & Production Validation

Compile and bundle the portfolio with production-level optimizations:
```bash
npm run build
```
This generates an optimized, ready-to-deploy static website in the `/dist` directory.

You can preview the production bundle locally:
```bash
npm run preview
```

---

## 🎨 Design Philosophy & Customizations

1.  **Typography Dominance**: Using massive font sizes (`text-6xl font-black`) combined with dynamic layout flow to guide user focus.
2.  **Editorial White Space**: Massive margins and premium split containers to let content breathe without feeling crowded.
3.  **Kinetic Animations**: Animations are built around micro-interactions (magnetic hovers, layout fades, and dynamic spring flips) to provide a tactile feeling.
4.  **Dark Mode Integration**: Pure high-contrast dark color tokens (`#0a0a0a` / `#f4f4f4`) ensuring premium legibility.
