# Personal CV – Igor V.

A minimalist website that hosts and displays my personal CV/Resume.

Live: [https://igoriok1994.github.io/](https://igoriok1994.github.io/) or [https://cv.nextjs.lt/](https://cv.nextjs.lt/)

## 🛠 Features

- **Modern & Fast:** Built with Astro, React, and Tailwind CSS for instant loading and 100% static delivery.
- **Embedded PDF Viewer & Download:** View the original resume full-screen in the browser or download it directly.
- **Dark & Light Mode:** Smooth theme switcher with local storage persistence and zero-flicker initial load.
- **Interactive Projects Showcase:** Real-time search and domain filtering (AI & LLM, Mobile, High-Load, Enterprise).
- **Print-Ready Formatting:** Clean A4 layout optimization for physical printing or saving via `@media print`.
- **Single Source of Truth:** All content is managed in a single typed configuration file.

## 💻 Tech Stack

- **Framework:** Astro 5
- **UI Islands:** React 19
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide Icons

## 📁 Repository Structure

- `src/data/cv.ts` – Central typed data model containing all experience, projects, skills, and contacts.
- `src/components/` – Reusable Astro components and interactive React islands.
- `src/pages/` – Website routes (`/`, `/cv`, `/projects`, `/contact`, `/pdf`).
- `public/` – Static assets (`avatar.jpg`, `cv.pdf`, `favicon.svg`, `CNAME`).
- `docs/` – Production build output deployed by GitHub Pages.

## 🚀 Development & Deployment

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production (outputs to docs/)
npm run build
```

Hosted entirely on **GitHub Pages**. Any changes built into `docs/` and pushed to the `main` branch are automatically deployed.
