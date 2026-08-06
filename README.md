<div align="center">

# alejandrosalguero.es

CV/portfolio personal de Alejandro Salguero

[![Deploy](https://github.com/SalgueroOv/salgueroov.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/SalgueroOv/salgueroov.github.io/actions/workflows/deploy.yml)
[![Sitio en vivo](https://img.shields.io/badge/sitio-en_vivo-16A34A?style=flat-square&logo=googlechrome&logoColor=white)](https://salgueroov.github.io/)

</div>

Es una web de una sola página con navegación por anclas (Sobre mí, Experiencia,
Formación, Proyectos, Contacto), disponible en español (`/`, idioma por
defecto) e inglés (`/en/`). Se despliega automáticamente en GitHub Pages en
cada push a `main`, y está pensada para acabar sirviéndose desde el dominio
propio `alejandrosalguero.es`.

Este repositorio es únicamente el código fuente de esa web personal — no es
una librería ni un proyecto pensado para que otras personas lo instalen o
reutilicen.

## Stack técnico y por qué

<div align="center">
<p>
  <img alt="Astro" src="https://img.shields.io/badge/Astro-000000?style=flat-square&logo=astro&logoColor=FF5D01" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS v4" src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <br/>
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white" />
  <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" />
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white" />
</p>
</div>

- **[Astro](https://astro.build) (output estático)** — el sitio es contenido
  mayormente estático (un CV), así que no hace falta un framework con
  hidratación de cliente pesada. Astro genera HTML en build time y solo envía
  al navegador el JavaScript puntual que sí se necesita (el interruptor de
  idioma, las tabs de experiencia, la pantalla de carga animada).
- **TypeScript en modo estricto** (`astro/tsconfigs/strict`) — el contenido
  del CV (`src/data/cv.ts`) y las traducciones (`src/i18n/ui.ts`) están
  tipados, de forma que si en un idioma falta un campo o una clave de
  traducción, falla el build en vez de descubrirse en producción.
- **Tailwind CSS v4** vía `@tailwindcss/vite` — estilado utility-first
  directamente en el markup de los componentes `.astro`, sin hojas de estilo
  separadas que mantener sincronizadas. En v4 la configuración vive en CSS
  (`@import "tailwindcss";` en `src/styles/global.css`), ya no en un
  `tailwind.config.js` como en v3.
- **i18n nativo de Astro, sin librerías externas** — con solo dos idiomas y un
  diccionario de strings pequeño, el sistema de rutas por idioma que trae
  Astro de serie (`es` en la raíz, `en` bajo `/en/`) es suficiente; añadir una
  librería de i18n sería sobreingeniería para este caso.
- **pnpm** — gestor de paquetes más rápido y estricto con las dependencias que
  npm/yarn; es el único usado en este proyecto (fijado en
  `package.json` → `packageManager`).
- **GitHub Actions + GitHub Pages** — build y despliegue automáticos en cada
  push a `main` (`.github/workflows/deploy.yml`), sin pasos manuales de
  publicación.
- **Sin framework de UI adicional (React/Vue/Svelte...), sin blog/content
  collections, sin analítica** — decisiones deliberadas para mantener el
  alcance acotado a un portfolio simple; estas piezas no están descartadas
  para siempre, pero no se añaden salvo que haga falta.

## Estructura del proyecto

```text
src/
  data/
    cv.ts                  Única fuente del contenido del CV (nombre, experiencia,
                            formación, proyectos, contacto), tipado y por idioma.
    cv-print.ts             Variante del contenido ajustada para la versión imprimible del CV.
  i18n/
    ui.ts                Diccionario de strings de interfaz (nav, labels) por idioma.
    utils.ts              Helpers getLangFromUrl / useTranslations.
  layouts/BaseLayout.astro  <html>/head, carga global.css, monta Header/Footer/SocialRail.
  components/
    Cv.astro               Todo el contenido del CV en una página, con anclas y tabs de experiencia.
    CvPrint.astro           Maquetación de una sola hoja para la versión imprimible/descargable del CV.
    Header.astro            Navbar fija con navegación activa por scroll (IntersectionObserver).
    Footer.astro             Pie de página.
    LanguageSwitcher.astro   Enlaces ES/EN.
    LoadingScreen.astro      Animación de entrada (logo ASO) al cargar la página.
    PhotoFrame.astro         Marco de la foto de perfil con efecto duotono al hover.
    SocialRail.astro         Barra lateral fija con enlaces a GitHub/LinkedIn/email.
  pages/
    index.astro              Home en español (idioma por defecto).
    cv-print.astro           Versión imprimible del CV en español.
    en/
      index.astro            Home en inglés.
      cv-print.astro         Versión imprimible del CV en inglés.
public/
  CNAME                    Dominio personalizado para GitHub Pages.
.github/workflows/deploy.yml  Build + deploy automático a GitHub Pages en cada push a main.
```

## Contexto para quien retome este código

Las instrucciones de contexto del proyecto (reglas, estado del despliegue,
decisiones tomadas) están en [`AGENTS.md`](./AGENTS.md) (enlazado también como
`CLAUDE.md`), pensado originalmente para guiar a un asistente de IA
([Claude Code](https://claude.com/claude-code)) trabajando en el repo, pero
igual de útil como documentación para una persona.
