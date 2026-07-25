import type { Lang } from '../i18n/utils';

export interface CvContent {
  name: string;
  role: string;
  summary: string;
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  projects: {
    name: string;
    description: string;
    url?: string;
  }[];
  skills: string[];
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
  };
}

// TODO: sustituir todos los campos TODO/placeholder por contenido real antes de publicar.
export const cv: Record<Lang, CvContent> = {
  es: {
    name: 'Alejandro Salguero',
    role: 'TODO: rol o titular profesional',
    summary: 'TODO: resumen profesional (2-3 líneas)',
    experience: [],
    projects: [],
    skills: [],
    contact: {
      email: 'TODO@example.com'
    }
  },
  en: {
    name: 'Alejandro Salguero',
    role: 'TODO: professional title',
    summary: 'TODO: professional summary (2-3 lines)',
    experience: [],
    projects: [],
    skills: [],
    contact: {
      email: 'TODO@example.com'
    }
  }
};
