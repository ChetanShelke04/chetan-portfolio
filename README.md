# Chetan Shelke — Developer Portfolio

A fast, modern, and responsive personal portfolio showcasing experience and projects as a **Java Backend & Distributed Systems Developer**.

Built with **React 19**, **Vite**, **React Router v7**, and **Framer Motion**, powered strictly by a single source of truth ([`src/data/resume.js`](src/data/resume.js)).

---

## ⚡ Tech Stack

- **Frontend Framework**: React 19, React Router v7
- **Styling**: Vanilla CSS Design System with CSS Tokens (`src/index.css`)
- **Theme**: Dark & Light mode toggle with `localStorage` persistence
- **Animations**: Framer Motion & CSS micro-animations
- **Icons**: Lucide React
- **Document / PDF**: `@react-pdf/renderer`
- **Build Tool**: Vite 8

---

## ✨ Features & Architecture

- **Hero & About**: Highlights 4 years of experience building secure, scalable backend services, event-driven architectures, and clean API design.
- **Skills Matrix**: Interactive categorized technical stack (Java, Spring Boot, Spring AI, Microservices, Kafka, Redis, Docker, PostgreSQL, MySQL, AWS S3).
- **Work Experience**:
  - **DMH Research Center** (Software Engineer — Healthcare & Spring AI)
  - **Vibhuprada Services Private Limited** (Java Backend Developer — Microservices & BFSI)
- **Education**:
  - **MCA** — Indira Gandhi National Open University (IGNOU), Pune
  - **BCA** — Bharati Vidyapeeth University, Karad
- **Featured Systems**:
  - **AI Medical Report Analyzer**: Healthcare AI platform with OCR extraction, Spring AI summarization, Kafka event pipelines, Redis caching, and AWS S3 storage.
  - **Loan Eligibility Web Application**: Multi-service fintech platform with credit scoring rules, Experian API integration, and modular Spring Boot services.
- **ATS Resume Page (`/resume`)**: Clean, ATS-friendly digital resume sheet and direct PDF download (`/resume.pdf`).
- **Direct Contact Hub**: Direct links for Email, Phone, and LinkedIn (zero form spam, zero external backend required).
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop with keyboard `:focus-visible` rings and SEO OpenGraph meta tags.

---

## 📁 Project Structure

```text
chetan-portfolio/
├── public/
│   ├── favicon.svg          # Branded CS SVG favicon
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
Generates optimized static assets in the `dist/` directory (~350ms build time).

---

## 🌐 Deployment (Vercel / Netlify / GitHub Pages)

This project is a 100% client-side React SPA ready for one-click deployment:

### Deploy to Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Select repository: `ChetanShelke04/chetan-portfolio`.
3. Keep default settings (Framework preset: `Vite`, Build command: `npm run build`, Output directory: `dist`).
4. Click **Deploy**.

---

## 🛠️ Updating Portfolio Information

All content (personal info, experience, projects, skills, contact info, education) is managed in a single file:
👉 **[`src/data/resume.js`](src/data/resume.js)**

Any edits made there automatically update the entire portfolio and resume pages.

---

## 📬 Contact & Connect

- **Location**: Pune, Maharashtra, India
- **Email**: [chetans1681@gmail.com](mailto:chetans1681@gmail.com)
- **Phone**: [+91-8087635721](tel:+918087635721)
- **LinkedIn**: [linkedin.com/in/chetan-shelke](https://linkedin.com/in/chetan-shelke)
- **GitHub**: [github.com/ChetanShelke04](https://github.com/ChetanShelke04)
