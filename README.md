# Sakshi Singh — Portfolio

Built with **Vite + React + Tailwind CSS**. No backend needed.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## EmailJS (Contact Form)

1. Sign up free at [emailjs.com](https://emailjs.com)
2. Create a Service and Email Template
3. Open `src/components/Contact.jsx` and replace:
   ```js
   const SERVICE_ID  = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
   ```

## Deploy to Vercel

```bash
npm run build
# drag the dist/ folder to vercel.com  — done!
```

## Customise

| What | Where |
|------|-------|
| Name / title | `Splash.jsx`, `Navbar.jsx`, `Hero.jsx`, `Footer.jsx` |
| Bio / motto | `Hero.jsx` |
| Projects list | `Projects.jsx` → `projects` array |
| Skills list | `Skills.jsx` → `groups` array |
| Contact links | `Contact.jsx` |
| Fonts | `index.html` Google Fonts link |
