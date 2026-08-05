# Estado del proyecto — mi-landing

Documento vivo: actualizalo al cerrar cada fase. Sirve para saber **dónde estamos** sin revisar todo el historial.

## Dónde estamos ahora

| Campo | Valor |
|-------|--------|
| **Fase actual** | Fase 1 — Preparación del Starter Template |
| **Estado de la fase** | Completada |
| **Última actualización** | 2026-08-05 |
| **Branch** | `master` |
| **Remote GitHub** | Pendiente (sin `origin`) |
| **Deploy (Vercel/Netlify)** | Pendiente |

### Resumen en una línea

Starter Astro + Tailwind listo como cimiento reutilizable; falta desarrollo de secciones de cliente, preview habitual, y publicar a GitHub + deploy.

---

## Mapa de fases

| # | Fase | Estado | Qué implica |
|---|------|--------|-------------|
| 0 | Scaffold Astro inicial | ✅ Hecha | `npm create astro`, deps base |
| 1 | Preparación del Starter Template | ✅ Hecha | NVM/Node LTS, estructura, `.cursorrules`, layout/secciones |
| 2 | Desarrollo asistido + preview | ⬜ Pendiente | `npm run dev`, secciones con Composer según reglas |
| 3 | Control de versiones remoto + deploy | ⬜ Pendiente | `gh repo create`, push, Vercel/Netlify |

---

## Fase 1 — detalle (completada)

### Hecho

- [x] Node.js LTS vía NVM en WSL (`v24.19.0`, default `lts/*`)
- [x] Proyecto Astro 7 + Tailwind 4 + TypeScript
- [x] Estructura: `src/config`, `src/components/sections`, `src/layouts`
- [x] `.cursorrules` + `.cursor/rules/stack.mdc`
- [x] `.nvmrc` (`lts/*`)
- [x] `BaseLayout.astro` + `Hero.astro` + `siteConfig.ts`
- [x] Build estático verificado

### Artefactos clave

| Ruta | Rol |
|------|-----|
| `src/config/siteConfig.ts` | Copy y datos de negocio (única fuente) |
| `src/layouts/BaseLayout.astro` | Shell HTML / head / estilos |
| `src/components/sections/` | Secciones de página |
| `.cursorrules` | Instrucciones para la IA |
| `.nvmrc` | Versión de Node esperada |

### Cómo trabajar en local

```bash
nvm use          # lee .nvmrc
npm run dev      # http://localhost:4321
npm run build    # salida en dist/
```

> En la terminal del agente de Cursor a veces gana el Node 20 del IDE. En WSL/bash normal, `nvm use` alcanza.

---

## Próximo paso (Fase 2)

1. Arrancar `npm run dev` y abrir http://localhost:4321
2. Personalizar `siteConfig.ts` (marca, hero, CTAs)
3. Agregar secciones en `src/components/sections/` (Servicios, Contacto, etc.) con Composer siguiendo `.cursorrules`
4. Mantener copy solo en `siteConfig`

Cuando Fase 2 cierre: marcarla ✅ acá arriba y pasar el bloque “Dónde estamos ahora” a Fase 3.

---

## Fase 3 — checklist (cuando toque)

- [ ] Instalar/autenticar GitHub CLI (`gh`)
- [ ] Commit limpio (sin basura)
- [ ] `gh repo create mi-landing --public --source=. --remote=origin --push`
- [ ] Conectar repo en Vercel o Netlify (deploy en cada push)

---

## Datos del stack

| Pieza | Versión / nota |
|-------|----------------|
| Astro | ^7.1 |
| Tailwind | ^4.3 (`@tailwindcss/vite`) |
| Node engines | `>=22.12.0` (usar NVM LTS) |
| Tipo de sitio | Estático (`astro build` → `dist/`) |
| Idioma del sitio | `es` (en `siteConfig`) |

---

## Cómo actualizar este archivo

1. Cambiá **Fase actual** / **Estado** en la tabla de arriba.
2. Marcá checkboxes de la fase que cerraste.
3. Escribí **Última actualización** con la fecha.
4. Commiteá junto con el código de esa fase (`docs: actualizar PROGRESO.md — fase N`).
