export const languages = {
  es: 'Español',
  en: 'English'
} as const;

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Dónde he trabajado',
    'nav.education': 'Formación',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',
    'section.stack': 'Stack técnico',
    'contact.heading': '¿Trabajamos juntos?',
    'contact.body':
      'Sigo dando forma a esta web y aprendiendo cada día con nuevas herramientas de IA. Si tienes un proyecto entre manos o simplemente quieres hablar de desarrollo, tengo la bandeja de entrada abierta.',
    'contact.cta': 'Escríbeme',
    'project.viewGithub': 'Ver en GitHub',
    'footer.built': 'Hecho con Astro y Tailwind CSS.',
    'misc.references': 'Referencias disponibles a petición.'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': "Where I've worked",
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'section.stack': 'Tech stack',
    'contact.heading': "Let's build something",
    'contact.body':
      "I'm always tinkering with this site and picking up new AI-assisted workflows. If you've got a project in mind or just want to talk shop, my inbox is open.",
    'contact.cta': 'Say hello',
    'project.viewGithub': 'View on GitHub',
    'footer.built': 'Built with Astro and Tailwind CSS.',
    'misc.references': 'References available upon request.'
  }
} as const;
