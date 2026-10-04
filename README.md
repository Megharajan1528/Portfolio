# Megha Rajan — Full Stack & Software Developer Portfolio

A responsive, high-performance web portfolio for **Megha Rajan**, built with **React**, **Vite**, and **Tailwind CSS**.

The site follows a **premium dark navy aesthetic** accented with vibrant electric blue and violet gradients, smooth animations, interactive features, accessible navigation, and client-side data transparency.

---

## 📋 Source of Truth & Candidate Profile

All information presented on this portfolio is sourced from Megha Rajan's resume:

* **Name**: Megha Rajan
* **Role**: Full Stack Web & Software Developer
* **Contact Details**:
  * **Phone**: +91 7907474600 (`7907474600`)
  * **Email**: [megharajannair390@gmail.com](mailto:megharajannair390@gmail.com)
  * **LinkedIn**: [linkedin.com/in/megharajan15](https://linkedin.com/in/megharajan15)
  * **GitHub**: [github.com/Megharajan1528](https://github.com/Megharajan1528)
* **Education**:
  * **B.Tech in Computer Science & Engineering**: College of Engineering Trikaripur (2021–2025) — **CGPA: 7.09**
  * **Higher Secondary**: Durga Higher Secondary School (2019–2021) — **90.6%**
* **Internship**:
  * **Java Developer Intern & Web Development Intern** — Elevate Labs (Nov 2025 – Dec 2025)
* **Professional Training & Certification**:
  * **Certified Full Stack Development Program** — KodNest Technologies, Bengaluru (Jun 2025 – Feb 2026)
* **Technical Skills**:
  * **Languages**: Java, Python, JavaScript, SQL
  * **Frameworks & Libraries**: Spring Boot, Django, React.js, Node.js, Express.js
  * **Databases**: MySQL, PostgreSQL, Oracle, MongoDB
  * **Core Engineering**: REST APIs, OOP, DSA, Debugging, Manual Testing, SDLC
  * **Tools & Platforms**: Git, GitHub, Linux, Windows, AWS Fundamentals
* **Featured Projects**:
  * **Sales Savvy**: Java, Spring Boot, React, MySQL, REST APIs — e-commerce architecture managing products, cart, and orders with frontend/backend API integration and SQL query optimization.
  * **MealPro**: Python, Django, MySQL — dietary planning and recipe management with backend logic, database SQL tuning, index strategy, and data-access debugging.

> **Honesty & Transparency Guarantees:**
> - Repositories and live demos for featured projects are clearly marked as currently being packaged/available upon request (no invented dead or placeholder URLs).
> - The contact form clearly informs users that it operates client-side without an unconfigured backend server, dispatching through the user's native email client or providing one-click formatted message copying.

---

## 🛠️ Tech Stack & Architecture

* **Framework**: React 18
* **Build Tool**: Vite 5
* **Styling**: Tailwind CSS 3 with custom PostCSS configuration
* **Icons**: Lucide React
* **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)

---

## 📁 Project Structure

```text
Port/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx           # Engineering background & core strengths
│   │   ├── Contact.jsx         # Direct channels & transparent inquiry form
│   │   ├── Education.jsx       # B.Tech CSE & Higher Secondary credentials
│   │   ├── Experience.jsx      # Elevate Labs internship & KodNest training timeline
│   │   ├── Footer.jsx          # Social links, verification note, back-to-top
│   │   ├── Hero.jsx            # Hero section with interactive code snapshot
│   │   ├── Navbar.jsx          # Sticky glassmorphism header & mobile navigation
│   │   ├── Projects.jsx        # Sales Savvy & MealPro deep-dive cards
│   │   ├── ResumeModal.jsx     # In-app printable resume sheet & TXT download
│   │   ├── Skills.jsx          # Filterable & searchable skills showcase
│   │   └── Toast.jsx           # Action feedback notifications
│   ├── data/
│   │   └── portfolioData.js    # Verified facts and project metadata
│   ├── App.jsx                 # Main layout coordinator
│   ├── index.css               # Tailwind directives & glassmorphism utilities
│   └── main.jsx                # React root entry point
├── index.html                  # SEO tags, Open Graph meta & favicon
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS Tailwind & Autoprefixer plugin config
├── tailwind.config.js          # Dark navy theme tokens and animations
└── vite.config.js              # Vite server & build configurations
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Run the following command in the project directory:
```bash
npm install
```

### 3. Start Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

### 4. Build for Production
Create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### 5. Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

---

## ✨ Features & User Experience

1. **Dark Navy Aesthetic**: Deep `#040814` canvas with high-contrast text, glassmorphism cards, and electric blue/indigo/violet accents.
2. **Interactive Terminal Snapshot**: Live code-styled overview in the Hero displaying candidate skills, stack, and fast actions.
3. **Filterable & Searchable Skills**: Instant search box and category tabs (Languages, Frameworks, Databases, Core, Tools).
4. **Project Architecture Deep-Dive**: Specific metrics, database optimization highlights, and feature points for both *Sales Savvy* and *MealPro*.
5. **Printable / Downloadable Resume**: Built-in modal supporting one-click `window.print()` (clean print CSS formatting) and `.txt` plain text download.
6. **Toast Notifications**: Smooth, accessible toast notifications on copy actions (Email, Phone, Drafted Message).
7. **Responsive & Accessible**: Semantic HTML5 tags, full ARIA attributes, mobile drawer navigation, and smooth scroll tracking.
