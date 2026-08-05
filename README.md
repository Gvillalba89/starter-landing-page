# mi-landing

Starter de landing pages con **Astro**, **Tailwind CSS** y **TypeScript**. Pensado para reutilizar la misma base en cada cliente y cambiar solo el contenido.

## Clonar el repo

```bash
git clone https://github.com/TU_USUARIO/mi-landing.git
cd mi-landing
nvm use          # lee .nvmrc (Node LTS)
npm install
```

> Si todavía no publicaste el repo, usá la URL real de GitHub cuando exista `origin`. Mientras tanto podés copiar esta carpeta como plantilla.

## Personalizar un cliente

**Casi todo el copy y los datos de negocio viven en un solo archivo:**

```text
src/config/siteConfig.ts
```

Ahí editás:

- Nombre, logo, tagline y metadata
- Navegación y CTAs
- Hero
- Lista de servicios
- Contacto, labels del formulario y access key de Web3Forms
- WhatsApp (teléfono y mensaje)
- Redes sociales y pie de página

Los componentes en `src/components/sections/` **leen** `siteConfig`; no hardcodees textos de marketing en los `.astro` salvo que el diseño del cliente lo pida.

Assets estáticos (favicon, imágenes): `public/`.

## Comandos

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo en [http://localhost:4321](http://localhost:4321) |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Previsualiza el build localmente |

```bash
npm run dev
```

```bash
npm run build
```

## Estructura útil

```text
src/
  config/siteConfig.ts       # Contenido por cliente
  components/sections/       # Navbar, Hero, Services, Contact, Footer, WhatsApp
  layouts/BaseLayout.astro
  pages/index.astro
  styles/global.css
```

Seguimiento de fases del starter: [`PROGRESO.md`](./PROGRESO.md).
