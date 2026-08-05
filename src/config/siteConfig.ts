export const siteConfig = {
  name: 'Mi Landing',
  tagline: 'Una presencia clara, rápida y fácil de actualizar.',
  description:
    'Landing page construida con Astro, Tailwind CSS y TypeScript. El contenido editable vive en siteConfig.',
  lang: 'es',
  url: 'https://example.com',
  logo: {
    text: 'Mi Landing',
    href: '#inicio',
  },
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
  services: {
    id: 'servicios',
    title: 'Servicios',
    supporting: 'Soluciones claras, medibles y listas para crecer con tu negocio.',
    items: [
      {
        title: 'Presencia web',
        description:
          'Landings rápidas y mantenibles, pensadas para convertir visitas en consultas.',
      },
      {
        title: 'Diseño de marca',
        description:
          'Identidad visual coherente: tipografía, color y tono alineados a tu oferta.',
      },
      {
        title: 'Automatización',
        description:
          'Formularios, avisos y flujos simples para no perder ningún lead.',
      },
    ],
  },
  contact: {
    id: 'contacto',
    title: 'Contacto',
    supporting: 'Contanos qué necesitás y te respondemos a la brevedad.',
    email: 'hola@example.com',
    form: {
      accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿En qué podemos ayudarte?',
      submitLabel: 'Enviar mensaje',
      successMessage: 'Gracias. Recibimos tu mensaje.',
      errorMessage: 'No se pudo enviar. Intentá de nuevo.',
    },
  },
  whatsapp: {
    phone: '5491112345678',
    message: 'Hola, quiero más información.',
    label: 'Escribinos por WhatsApp',
  },
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X', href: 'https://x.com' },
  ],
  footer: {
    rights: 'Todos los derechos reservados.',
  },
} as const;

export type SiteConfig = typeof siteConfig;
