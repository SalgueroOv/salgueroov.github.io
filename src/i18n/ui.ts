export const languages = {
  es: 'Español',
  en: 'English'
} as const;

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.education': 'Formación',
    'nav.projects': 'Proyecto destacado',
    'nav.contact': 'Contacto',
    'section.stack': 'Stack técnico',
    'section.aptitudes': 'Cómo trabajo',
    'section.languages': 'Idiomas',
    'section.interests': 'Intereses',
    'contact.cta': 'Escríbeme',
    'footer.built': 'Hecho con Astro y Tailwind CSS.',
    'misc.references': 'Referencias disponibles a petición.'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.projects': 'Featured project',
    'nav.contact': 'Contact',
    'section.stack': 'Tech stack',
    'section.aptitudes': 'How I work',
    'section.languages': 'Languages',
    'section.interests': 'Interests',
    'contact.cta': 'Say hello',
    'footer.built': 'Built with Astro and Tailwind CSS.',
    'misc.references': 'References available upon request.'
  }
} as const;
