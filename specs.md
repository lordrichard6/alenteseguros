# AlenteSeguros Website - Technical Specs

**Client:** Rita Reis → `clients/rita_reis/dossier.md`
**Created:** 2025-12-30

---

## 1. Brand Identity

### Colors (from reference images)
| Token | Value | Usage |
|-------|-------|-------|
| **Primary** | `#0D9488` (Teal) | Buttons, accents, links |
| **Primary Dark** | `#115E59` (Dark Teal) | Gradient start, headers |
| **Primary Light** | `#5EEAD4` (Light Teal/Cyan) | Gradient end, hover states |
| **Background** | `#FFFFFF` | Main background |
| **Foreground** | `#1E293B` (Slate 800) | Text |
| **Muted** | `#F8FAFC` | Card backgrounds |

### Typography
- **Font:** Inter (or similar clean sans-serif)
- **Headings:** Bold, clean
- **Body:** Regular, good readability

### Logo
- Triangle "A" icon with horizontal lines
- "AlenteSeguros" wordmark with stylized "A"
- Tagline: "Eficiente e Confiável, Mediação de Seguros, Lda."

---

## 2. Technical Stack

| Component | Choice | Notes |
|-----------|--------|-------|
| **Framework** | Next.js 16 (App Router) | Same as Ribeiro |
| **Styling** | TailwindCSS v4 | With custom teal theme |
| **Components** | shadcn/ui | Clean, accessible |
| **Animations** | Framer Motion | Smooth transitions |
| **Icons** | Lucide React | Consistent icon set |
| **Forms** | Tally.so or React Hook Form | Contact form |
| **Hosting** | Vercel | Auto-deploy |

---

## 3. Site Structure

### 3.1 Header (Sticky)
- Logo (left)
- Navigation: Início | Serviços | Sobre | Contacto
- CTA Button: "Fale Connosco" (right)
- Mobile: Hamburger menu

### 3.2 Hero Section
- Full-width gradient background (dark teal → light teal)
- Pattern overlay with "A" logo watermarks
- Main headline + tagline
- CTA buttons (primary + secondary)

### 3.3 Services Section
- 4 insurance service cards:
  - 🏠 Habitação (Home)
  - 🚗 Automóvel (Auto)
  - ❤️ Saúde (Health)
  - 💼 Vida e Negócios (Life & Business)
- Clean card design with icons
- Hover animations

### 3.4 About/Trust Section
- "Quem Somos" section
- Rita's photo placeholder
- Trust indicators
- Partner logos: HPR, SABSEG Seguros

### 3.5 Contact Section
- Contact form (name, email, phone, message)
- Contact info cards:
  - 📞 241 095 100 / 938 121 196
  - ✉️ seguros.ritareis@gmail.com
  - 📍 R. Doutor Eusébio Leão, Nº89 R/C, 6040-120 Gavião
- WhatsApp floating button
- Embedded map (optional)

### 3.6 Footer
- Logo + tagline
- Quick links
- Social links (Instagram)
- Copyright

---

## 4. Design Requirements

### Visual Effects
- Subtle gradient backgrounds
- Glassmorphism on cards (optional)
- Smooth scroll animations (Framer Motion)
- Hover states on all interactive elements
- Background pattern with logo watermarks

### Mobile-First
- Responsive breakpoints: sm, md, lg, xl
- Touch-friendly buttons (min 44px)
- Collapsible mobile menu
- Stack layouts on mobile

---

## 5. Phase 2 Preparation (Client Portal)

### Auth Architecture
- Consider NextAuth.js or Clerk for future auth
- Prepare middleware structure
- Plan protected routes: `/portal/*`

### Portal Features (Future)
- Client login
- Document upload/download
- Policy overview
- Claim status tracking

---

## 6. Mock Content (Phase 1)

### Hero
- **Headline:** "Seguros à Medida da Sua Vida"
- **Subheadline:** "Mediação de seguros eficiente e confiável, com atendimento personalizado."
- **CTA Primary:** "Peça um Orçamento"
- **CTA Secondary:** "Conheça os Nossos Serviços"

### Services (Mock)
- **Habitação:** "Proteja o seu lar com as melhores coberturas."
- **Automóvel:** "Seguros auto adaptados às suas necessidades."
- **Saúde:** "Cuide de si e da sua família com tranquilidade."
- **Vida e Negócios:** "Soluções para proteger o seu futuro."

---

## 7. File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/           (shadcn components)
│   ├── header.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── services.tsx
│   ├── about.tsx
│   └── contact.tsx
└── lib/
    └── utils.ts
```
