# Estado del Proyecto: Starter Landing Page (Astro + Tailwind CSS v4)

## 📌 Resumen Ejecutivo
Plantilla base tipo *Starter* para el desarrollo rápido de landing pages corporativas e institucionales. Arquitectura basada en desacople total entre UI (Astro/Tailwind) y contenido comercial (`src/config/siteConfig.ts`).

---

## 📊 Estado de Fases

### ✅ Fase 1: Cimiento Base e Infraestructura
- [x] Configuración del entorno en WSL2 (Node.js, Git, gh CLI).
- [x] Inicialización del proyecto Astro con Tailwind CSS v4 y TypeScript.
- [x] Definición de reglas para IA (`.cursorrules` y `.cursor/rules/stack.mdc`).
- [x] Creación de `siteConfig.ts` como Fuente Única de Verdad (SSOT).
- [x] Implementación de `BaseLayout.astro` y `Hero.astro`.

### ✅ Fase 2: Componentes Core y Maquetación Completa
- [x] `Navbar.astro`: Navegación responsive con glassmorphism y menú hamburguesa.
- [x] `Services.astro`: Renderizado dinámico de tarjetas desde `siteConfig.ts`.
- [x] `ContactForm.astro`: Integración con Web3Forms e información comercial.
- [x] `WhatsAppBtn.astro`: Botón flotante animado con mensaje preconfigurado.
- [x] `Footer.astro`: Pie de página con copyright dinámico y enlaces a redes sociales.
- [x] `index.astro`: Ensamblado final de la landing page.
- [x] Verificación de build limpio (`npm run build`).

### ✅ Fase 3: Publicación como Plantilla Base
- [x] Subida del código al repositorio remoto en GitHub (`Gvillalba89/starter-landing-page`).
- [x] Configuración del repositorio como **Template Repository**.

---

## 🚀 Próximos Pasos (Fase 4: Flujo Comercial)
- [ ] Creación de nuevo repositorio de cliente a partir de esta plantilla (`gh repo create cliente-web --template Gvillalba89/starter-landing-page`).
- [ ] Configuración de despliegue continuo (Vercel, Cloudflare Pages, Netlify o VPS).
- [ ] Personalización exclusiva mediante modificación de `siteConfig.ts`.