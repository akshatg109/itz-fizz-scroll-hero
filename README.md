# Itz Fizz — Scroll-Driven Hero

A responsive, scroll-driven landing page inspired by the supplied car animation reference. The car and lime trail move with scroll progress; the headline is revealed alongside it. Headline and impact stats also have a staggered entrance on load.

## Built with

- Next.js App Router + React + TypeScript
- Tailwind CSS and a small set of CSS design tokens
- GSAP + ScrollTrigger for intro and scroll-scrubbed motion
- Custom inline SVG sports car illustration

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

The app is configured for static export. Its GitHub Actions workflow builds the `out/` directory and deploys it to GitHub Pages on every push to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The workflow detects the repository name and applies the matching project-site base path automatically.
