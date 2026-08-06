import type { Lang } from '../i18n/utils';
import { cv } from './cv';

export interface CvPrintContent {
  name: string;
  role: string;
  roleSub: string;
  summary: string;
  languages: { name: string; level: string }[];
  interests: string[];
  experience: {
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
}

export const cvPrint: Record<Lang, CvPrintContent> = {
  es: {
    name: cv.es.name,
    role: cv.es.role,
    roleSub: 'Experiencia en administración de sistemas Linux y virtualización',
    summary:
      'Desarrollador con experiencia en aplicaciones Java para investigación clínica. Combino el desarrollo full stack con el uso de asistentes de IA (Claude Code, Copilot) para acelerar la implementación, manteniendo una revisión manual rigurosa del código. Gestiono mis tareas de forma autónoma y comunico conceptos técnicos a equipos no informáticos mediante analogías, priorizando por urgencia y motivación personal. He guiado a programadores en prácticas y asumo con resiliencia los cambios de requisitos.',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Lectura técnica fluida, conversación básica' }
    ],
    interests: ['Juegos de mesa', 'Ciclismo', 'Senderismo'],
    experience: [
      {
        role: 'Desarrollador Full Stack y Administrador de Sistemas',
        company: 'FISEVI — Grupo de Trastornos del Movimiento, IBIS (Sevilla)',
        period: 'Septiembre 2022 — Actualidad',
        bullets: [
          'Desarrollo y mantenimiento de Parkinostic, aplicación clínica para la recogida y consulta de datos de pacientes con Parkinson y otros trastornos del movimiento.',
          'Reescritura de la aplicación migrando de JSF/Primefaces a Spring Boot 3 y Neo4j, apoyándome en IA generativa (Claude Code, Copilot) para implementación y pruebas.',
          'Modelado de la base de datos en grafo Neo4j y corrección de problemas de concurrencia multiusuario en una API interna no oficial.',
          'Administración de infraestructura: servidor Proxmox con VMs Debian (GitLab, Alfresco, Neo4j, Glassfish, REDCap) y 5 NAS Synology con backups diarios.',
          'Implantación de REDCap (formularios y lógica) y gestión de presupuestos de equipamiento informático.',
          'Coordinación semanal con investigadores para alinear desarrollo y prioridades, usando Notion como tablero de tareas.'
        ]
      },
      {
        role: 'Experiencia previa',
        company: 'COBO (Dos Hermanas) · S.C.A. Frutos del Condado (Bollullos del Condado, Huelva)',
        period: '2019 — 2020',
        bullets: ['Peón de albañil y mozo de almacén, compaginados con estudios de desarrollo.']
      }
    ]
  },
  en: {
    name: cv.en.name,
    role: cv.en.role,
    roleSub: 'Experience in Linux systems administration and virtualization',
    summary:
      "Developer with experience building Java applications for clinical research. I combine full-stack development with AI assistants (Claude Code, Copilot) to speed up implementation, while keeping a rigorous manual review of the code. I manage my own tasks and communicate technical concepts to non-technical teams through analogies, prioritizing by urgency and personal motivation. I've mentored trainee developers and adapt with resilience to changing requirements.",
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Fluent technical reading, basic conversation' }
    ],
    interests: ['Board games', 'Cycling', 'Hiking'],
    experience: [
      {
        role: 'Full Stack Developer & Systems Administrator',
        company: 'FISEVI — Movement Disorders Group, IBIS (Seville)',
        period: 'September 2022 — Present',
        bullets: [
          "Developed and maintain Parkinostic, a clinical application for collecting and consulting data on patients with Parkinson's and other movement disorders.",
          'Rewrote the application, migrating from JSF/Primefaces to Spring Boot 3 and Neo4j, leveraging generative AI (Claude Code, Copilot) for implementation and testing.',
          'Modeled the Neo4j graph database and fixed multi-user concurrency issues in an unofficial internal API.',
          'Manage infrastructure: a Proxmox server running Debian VMs (GitLab, Alfresco, Neo4j, Glassfish, REDCap) and 5 Synology NAS units with daily backups.',
          'Rolled out REDCap (forms and logic) and managed equipment procurement budgets.',
          'Weekly coordination with researchers to align development and priorities, using Notion as a task board.'
        ]
      },
      {
        role: 'Previous experience',
        company: 'COBO (Dos Hermanas) · S.C.A. Frutos del Condado (Bollullos del Condado, Huelva)',
        period: '2019 — 2020',
        bullets: ['Bricklayer\'s laborer and warehouse worker, combined with development studies.']
      }
    ]
  }
};
