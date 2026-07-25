## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

# Proyecto: CV/portfolio de Alejandro Salguero

Contexto e instrucciones específicas de este proyecto. Léelo antes de tocar código.

## Qué es este proyecto

CV/portfolio personal. Se despliega en GitHub Pages desde el repo
`SalgueroOv/alejandrosalguero.github.io` y será accesible también vía el
dominio `alejandrosalguero.es` (aún no comprado a fecha 2026-07-25).

## Stack tecnológico

- **Astro 7**, output estático (`output: "static"` es el default — no cambiar sin motivo).
- **TypeScript estricto** (`tsconfig.json` extiende `astro/tsconfigs/strict`).
- **Tailwind CSS v4** vía `@tailwindcss/vite`. En v4 NO existe `tailwind.config.js`
  — se configura desde CSS con `@import "tailwindcss";` en `src/styles/global.css`.
  No recrear ese archivo de config asumiendo v3.
- **pnpm** como único gestor de paquetes (fijado en `package.json` → `packageManager`).
  No usar npm ni yarn ni generar sus lockfiles.
- **i18n nativo de Astro**, sin librerías externas. `es` es el idioma por defecto
  y vive en la raíz (`/`); `en` vive bajo `/en/` (`prefixDefaultLocale: false`
  en `astro.config.mjs`).
- Sin framework de UI adicional (React/Vue/Svelte...) — todo en componentes
  `.astro`. No añadir uno sin que se pida explícitamente.
- Sin analítica de visitas — decisión explícita, revisar solo si el usuario lo pide.
- Sin blog ni content collections en v1 — decisión explícita para acotar el
  alcance. Si se añade más adelante, definir `src/content/config.ts` en ese
  momento, no antes.

## Estructura

- `src/pages/index.astro` — home en español (idioma por defecto).
- `src/pages/en/index.astro` — home en inglés.
- `src/layouts/BaseLayout.astro` — `<html>`/head, importa `global.css`, monta Header/Footer.
- `src/components/Header.astro`, `Footer.astro`, `LanguageSwitcher.astro` — chrome de página.
- `src/components/Cv.astro` — todo el contenido del CV en una sola página con
  anclas (`#about`, `#experience`, `#projects`, `#skills`, `#contact`).
- `src/data/cv.ts` — única fuente de contenido del CV (nombre, rol, experiencia,
  proyectos, skills, contacto), tipado, por idioma.
- `src/i18n/ui.ts` — diccionario de strings de interfaz (nav, labels) por idioma.
- `src/i18n/utils.ts` — helpers `getLangFromUrl` / `useTranslations`.
- `public/CNAME` — dominio personalizado para GitHub Pages.
- `.github/workflows/deploy.yml` — build + deploy automático a GitHub Pages en cada push a `main`.

## Reglas

1. **No inventar contenido del CV.** Todos los campos marcados `TODO` en
   `src/data/cv.ts` y `Cv.astro` se mantienen hasta que el usuario aporte el
   contenido real (experiencia, proyectos, bio, email...). No rellenar con
   datos de ejemplo que parezcan reales.
2. **Todo el texto visible va en `src/data/cv.ts` (contenido) o
   `src/i18n/ui.ts` (UI/labels)**, nunca hardcodeado dentro de componentes,
   para que los dos idiomas se mantengan sincronizados.
3. **Cualquier página nueva debe existir en los dos idiomas**
   (`src/pages/xxx.astro` + `src/pages/en/xxx.astro`), salvo que se acuerde
   lo contrario explícitamente.
4. **pnpm siempre.**
5. **No añadir blog, content collections, analítica ni frameworks de UI
   adicionales sin confirmarlo antes** — son decisiones ya tomadas para v1
   (ver Stack tecnológico).
6. Antes de asumir una función/flag/paquete de Astro o Tailwind v4 que no
   esté ya en uso en este repo, verificarlo (docs/changelog), no fiarse de
   memoria — Tailwind v4 cambió bastante respecto a v3.

## Comandos

- `pnpm dev` — servidor de desarrollo.
- `pnpm build` — build de producción a `dist/`.
- `pnpm preview` — sirve el build de `dist/` localmente.

## Despliegue

- Deploy automático vía GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`.
- **Pendiente (acción manual única, no la puede hacer Claude):** en GitHub →
  repo `SalgueroOv/alejandrosalguero.github.io` → Settings → Pages →
  "Build and deployment" → Source = **GitHub Actions**. Sin esto el workflow
  corre pero no publica nada.
- **Pendiente:** comprar `alejandrosalguero.es` y configurar en el DNS del
  registrador: un `CNAME` para `www` apuntando a `salgueroov.github.io`, y
  para el apex (`alejandrosalguero.es` sin `www`) los 4 registros `A` de
  GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
  `185.199.111.153`. `public/CNAME` ya está preparado con el dominio; en
  cuanto el DNS resuelva, GitHub Pages lo detecta solo.
- El repo local tiene `origin` → `https://github.com/SalgueroOv/alejandrosalguero.github.io.git`,
  rama `main`. Sin push todavía — confirmar con el usuario antes del primero.

## Estado actual (2026-07-25)

- Estructura base creada, ambos idiomas compilan (`pnpm build` verificado).
- Contenido del CV pendiente de rellenar (placeholders `TODO`).
- Dominio sin comprar.
- Sin commits todavía en el repo.
