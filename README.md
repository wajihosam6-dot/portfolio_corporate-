# 🎬 Corporate Cinema Portfolio

A premium executive portfolio website built with React, Tailwind CSS, and advanced animations. Designed for consultants, executives, and professionals who demand excellence.

## ✨ Features

### Design & Aesthetics
- **Swiss Modernism 2.0** design philosophy with cinematic luxury
- Dark theme with gold accents for premium feel
- Professional typography (Playfair Display + Montserrat)
- Responsive design for all devices

### Interactive Sections
1. **Hero Section** - Cinematic introduction with parallax effects
2. **About** - Professional background and expertise
3. **Services** - 6 core service offerings with hover animations
4. **Portfolio** - Featured projects with 3D perspective transforms
5. **Experience** - Career timeline with alternating layout
6. **Testimonials** - Client testimonials with auto-play slider
7. **Statistics** - Impact metrics with animated counters
8. **CTA** - Call-to-action with contact information

### Advanced Animations
- **GSAP 3.12.2** with ScrollTrigger for scroll-based animations
- Parallax effects with depth-based layering
- Staggered reveals with smooth easings
- 3D perspective transforms on hover
- Magnetic button effects
- Smooth counter animations
- Timeline line draw effects
- Animated gradient overlays

### Professional Icons
- All icons from **Lucide React** (no emojis)
- Consistent icon sizing and styling
- Smooth hover transitions
- GPU-accelerated animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: GSAP 3.12.2 + ScrollTrigger
- **Icons**: Lucide React
- **Routing**: Wouter
- **Build Tool**: Vite
- **Language**: TypeScript

## 📦 Project Structure

```
corporate-cinema-portfolio/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── CinematicButton.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── LuxuryScrollEffects.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── StatsCounterSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── ui/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/wajihosam6-dot/portfolio-corporate-cinema.git
cd portfolio-corporate-cinema

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎨 Design System

### Colors
- **Primary Background**: `#0a0a0a` (Deep Black)
- **Primary Text**: `#f5f5f5` (Off White)
- **Accent**: `#d4af37` (Gold)
- **Border**: `#1a1a1a` (Dark Gray)
- **Muted**: `#666666` (Gray)

### Typography
- **Display Font**: Playfair Display (Headings)
- **Body Font**: Montserrat (Body text)
- **Font Sizes**: Responsive scaling

### Spacing
- **Base Unit**: 4px
- **Container Max Width**: 1280px
- **Responsive Padding**: 16px (mobile) → 32px (desktop)

## 🎬 Animation Guidelines

### Scroll Animations
- Parallax depth: 1-3 layers
- Scroll trigger: 60-85% of viewport
- Scrub duration: 1-2 seconds
- Stagger delay: 0.1-0.2 seconds

### Hover Effects
- Scale: 1.02-1.1
- Duration: 300ms
- Easing: ease-out (cubic-bezier)
- Origin: center or trigger point

### Entrance Animations
- Duration: 600-1200ms
- Stagger: 50-150ms between items
- Initial state: opacity 0, translate Y/X
- Easing: power2.out, back.out

## 📱 Responsive Breakpoints

- **Mobile**: 375px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large Desktop**: 1440px

## ♿ Accessibility

- WCAG AA compliant contrast ratios
- Keyboard navigation support
- Focus states visible
- Semantic HTML
- ARIA labels where needed
- Respects `prefers-reduced-motion`

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
VITE_APP_TITLE=Mohammed Alavi | Executive Consultant
VITE_APP_ID=corporate-cinema-portfolio
```

### Tailwind Configuration
Custom theme in `tailwind.config.ts`:
- OKLCH color format for modern color spaces
- Custom spacing scale
- Extended animation library

## 📊 Performance

- **Lighthouse Score**: 90+
- **Page Load Time**: < 2s
- **First Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1
- **GPU-accelerated animations** for 60fps

## 🔐 Security

- No sensitive data in code
- Environment variables for secrets
- CSP headers configured
- XSS protection enabled
- CSRF tokens for forms

## 📄 License

This project is private and proprietary.

## 👤 Author

**Mohammed Alavi**
- Executive Consultant
- Strategic Advisor
- Digital Transformation Expert

## 🤝 Contributing

This is a private portfolio project. For inquiries or collaboration, please contact directly.

## 📞 Contact

- Email: hello@mohammedalavi.com
- Phone: +1 (234) 567-890
- LinkedIn: [Profile Link]
- Twitter: [Profile Link]

---

**Built with ❤️ for executive excellence**

Last Updated: June 2026
