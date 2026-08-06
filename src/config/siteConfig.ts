export const siteConfig = {
  name: 'GV Web & Cloud',
  tagline: 'Landing pages ultrarrápidas y sitios web con foco en conversión.',
  description:
    'Transformo la presencia digital de tu negocio con landing pages modernas, construidas en Astro + Tailwind CSS. Carga instantánea, máxima conversión y cero costos ocultos de mantenimiento.',
  lang: 'es',
  url: 'https://tu-dominio.com',
  logo: {
    text: 'GV Web & Cloud',
    href: '#inicio',
  },
  cta: {
    primary: {
      label: 'Cotizar',
      href: '#contacto',
    },
    secondary: {
      label: 'Ver servicios',
      href: '#servicios',
    },
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    headline: 'Desarrollo de landing pages ultrarrápidas y sitios web',
    supporting:
      'Presencia digital moderna con Astro + Tailwind: carga instantánea, máxima conversión y mantenimiento simple.',
  },
  services: {
    id: 'servicios',
    title: 'Servicios',
    supporting: 'Soluciones profesionales diseñadas a la medida de tu negocio.',
    items: [
      {
        title: 'Landing Pages de Alta Velocidad',
        description:
          'Desarrollo a medida con Astro y Tailwind. Sitios ultra livianos, adaptados a celulares y optimizados para cargar en milisegundos sin depender de plugins pesados.',
      },
      {
        title: 'Integración de Conversión & WhatsApp',
        description:
          'Botón de WhatsApp directo, formularios sin backend para recibir consultas en tu email al instante y CTAs orientados a ventas.',
      },
      {
        title: 'Despliegue Cloud & Dominio',
        description:
          'Puesta en producción profesional en redes globales (Vercel / Cloudflare), certificado SSL (HTTPS) e integración de tu dominio propio.',
      },
    ],
  },
  contact: {
    id: 'contacto',
    title: 'Contacto',
    supporting: 'Envianos tu consulta o pedinos un presupuesto. Respondemos a la brevedad.',
    email: 'german.sfr@gmail.com',
    phone: '+54 9 341 000-0000',
    address: 'Rosario, Santa Fe, Argentina',
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
    phone: '5493410000000',
    message: 'Hola! Quisiera realizar una consulta sobre sus servicios.',
    label: 'Escribinos por WhatsApp',
  },
  social: [
    { label: 'GitHub', href: 'https://github.com/Gvillalba89' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tu-perfil' },
    { label: 'Instagram', href: 'https://instagram.com/tu-usuario' },
  ],
  footer: {
    rights: 'Todos los derechos reservados.',
  },
} as const;

export type SiteConfig = typeof siteConfig;
