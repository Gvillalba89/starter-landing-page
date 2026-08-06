export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  web3formsKey?: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    whatsappNumber: string;
  };
  services: Service[];
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "GV Web & Cloud",
  title: "Desarrollo de Landing Pages Ultrarrápidas y Sitios Web",
  description: "Transformo la presencia digital de tu negocio con landing pages modernas, construidas en Astro + Tailwind CSS. Carga instantánea, máxima conversión y cero costos ocultos de mantenimiento.",
  url: "https://tu-dominio.com",
  web3formsKey: "YOUR_ACCESS_KEY_HERE", // Reemplazar con tu Access Key de Web3Forms
  contact: {
    email: "german.sfr@gmail.com",
    phone: "+54 9 341 000-0000",
    address: "Rosario, Santa Fe, Argentina",
    whatsappNumber: "5493410000000", // Formato internacional sin espacios ni '+'
  },
  services: [
    {
      title: "Landing Pages de Alta Velocidad",
      description: "Desarrollo a medida con Astro y Tailwind. Sitios ultra livianos, adaptados a celulares y optimizados para cargar en milisegundos sin depender de plugins pesados.",
      icon: "⚡",
    },
    {
      title: "Integración de Conversión & WhatsAppData",
      description: "Botón de WhatsApp directo, formularios sin backend para recibir consultas en tu email al instante y botones de llamada a la acción orientados a ventas.",
      icon: "🎯",
    },
    {
      title: "Despliegue Cloud & Dominio",
      description: "Puesta en producción profesional en redes globales (Vercel / Cloudflare), certificado SSL de seguridad (HTTPS) e integración de tu dominio propio.",
      icon: "☁️",
    },
  ],
  socials: {
    github: "https://github.com/Gvillalba89",
    linkedin: "https://linkedin.com/in/tu-perfil",
    instagram: "https://instagram.com/tu-usuario",
  },
};