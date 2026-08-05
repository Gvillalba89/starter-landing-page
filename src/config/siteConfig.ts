export const siteConfig = {
  name: 'Mi Landing',
  tagline: 'Una presencia clara, rápida y fácil de actualizar.',
  description:
    'Landing page construida con Astro, Tailwind CSS y TypeScript. El contenido editable vive en siteConfig.',
  lang: 'es',
  url: 'https://example.com',
  cta: {
    primary: {
      label: 'Empezar',
      href: '#contacto',
    },
    secondary: {
      label: 'Ver más',
      href: '#servicios',
    },
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    headline: 'Construí productos digitales con foco y velocidad',
    supporting:
      'Contenido desacoplado del diseño: editá textos y CTAs en un solo archivo.',
  },
  contact: {
    email: 'hola@example.com',
  },
} as const;

export type SiteConfig = typeof siteConfig;
