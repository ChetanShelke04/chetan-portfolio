# Chetan Shelke — Developer Portfolio

A fast, modern, and responsive personal portfolio showcasing experience and projects as a **Java Backend & Distributed Systems Developer**.

Built with **React 19**, **Vite**, **React Router v7**, and **Framer Motion**, powered by a single source of truth (`src/data/resume.js`).

---

## ⚡ Tech Stack

- **Frontend**: React 19, React Router v7
- **Styling**: Vanilla CSS Design System with CSS Custom Properties (Tokens)
- **Theme**: Dark & Light mode toggle with `localStorage` persistence
- **Animations**: Framer Motion & CSS micro-animations
- **Icons**: Lucide React
- **Document / PDF**: `@react-pdf/renderer`
- **Build Tool**: Vite 8

---

## ✨ Features

- **Hero & About**: Highlighting core backend engineering, distributed systems focus, and clean system design principles.
- **Skills Matrix**: Interactive categorized technical skills (Java, Spring Boot, Microservices, Kafka, Docker, Kubernetes, PostgreSQL, AWS).
- **Work Experience & Education**: Real, verified experience at **DMH Research Center** and education at **PCCOE Pune**.
- **Featured Projects**: Microservices e-commerce platform, distributed log aggregator, and real-time backend systems with live links and GitHub repositories.
- **ATS Resume Page (`/resume`)**: Clean, ATS-friendly digital resume sheet and direct PDF download (`/resume.pdf`).
- **Direct Contact Hub**: Zero friction contact with direct links to Email, Phone, and LinkedIn (no external backend or form spam).
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop with keyboard `:focus-visible` rings and SEO OpenGraph meta tags.

---

## 📁 Project Structure

```text
chetan-portfolio/
├── public/
│   ├── favicon.svg          # Custom CS branded SVG favicon
│   └── resume.pdf           # Downloadable ATS-friendly resume
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── common/          # ScrollToTop, ThemeToggle, Buttons
│   │   ├── layout/          # Navbar, Footer, Layout wrapper
│   │   ├── resume/          # ResumePdfDocument component
│   │   └── sections/        # Hero, About, Skills, Experience, Projects, Education, Contact
│   ├── context/             # ThemeContext (Dark/Light state)
│   ├── data/
│   │   └── resume.js        # Single source of truth for all portfolio data
│   ├── pages/               # HomePage, ResumePage, NotFoundPage
│   ├── App.jsx              # Main router and lazy-loaded routes
│   ├── index.css            # Global CSS variables, reset, and design tokens
│   └── main.jsx             # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🛠️ Updating Portfolio Information

All content (experience, projects, skills, contact info, education) is managed in a single file:
👉 **[`src/data/resume.js`](src/data/resume.js)**

Any edits made there automatically update the entire portfolio and resume pages.
