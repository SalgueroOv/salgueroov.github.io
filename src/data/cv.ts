import type { Lang } from '../i18n/utils';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

export interface CvContent {
  name: string;
  role: string;
  summary: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  stack: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}

export const cv: Record<Lang, CvContent> = {
  es: {
    name: 'Alejandro Salguero Oviedo',
    role: 'Full Stack Developer | AI-Assisted Development',
    summary: [
      'Desarrollador con experiencia en aplicaciones Java para investigación clínica. Combino el desarrollo full stack con el uso de asistentes de IA (Claude Code, Copilot) para acelerar la implementación, manteniendo una revisión manual rigurosa del código.',
      'También superviso la administración de sistemas Linux y virtualización, y priorizo mis tareas con Notion a corto, medio y largo plazo. Ante problemas nuevos consulto primero a la IA y recurro a compañeros con más experiencia cuando hace falta, me adapto con naturalidad a los cambios de requisitos, y comunico conceptos técnicos a equipos no informáticos mediante analogías y personificaciones.'
    ],
    contact: {
      email: 'salguero.ov@gmail.com',
      phone: '685 201 801',
      location: 'Dos Hermanas, Sevilla',
      linkedin: 'https://www.linkedin.com/in/asalguerov',
      github: 'https://github.com/SalgueroOv'
    },
    stack: [
      'Java 17',
      'Spring Boot 3',
      'Neo4j',
      'MySQL',
      'JSF/Primefaces',
      'Lombok',
      'JUnit 5',
      'Testcontainers',
      'Maven',
      'Claude Code',
      'GitHub Copilot',
      'Git/GitLab',
      'Proxmox',
      'Debian',
      'Bash',
      'REDCap',
      'Notion'
    ],
    experience: [
      {
        role: 'Desarrollador Full Stack y Administrador de Sistemas',
        company: 'FISEVI — Grupo de Trastornos del Movimiento, IBIS (Sevilla)',
        period: 'Septiembre 2022 — Actualidad',
        bullets: [
          'Desarrollo y mantenimiento de Parkinostic, aplicación clínica para la recogida y consulta de datos de pacientes con Parkinson y otros trastornos del movimiento.',
          'Reescritura de la aplicación migrando de JSF/Primefaces a Spring Boot 3 y Neo4j, apoyándome en herramientas de IA generativa para la implementación y las pruebas.',
          'Modelado de la base de datos en grafo Neo4j: diseñé nuevas relaciones entre revisiones, diagnósticos y escalas para facilitar consultas clínicas.',
          'Corregí un problema de concurrencia adaptando una API interna no oficial de Neo4j para soportar múltiples usuarios simultáneamente.',
          'Administro la infraestructura: servidor Proxmox con máquinas virtuales Debian (GitLab, Alfresco, Neo4j, Glassfish, REDCap) y 5 NAS Synology con copias de seguridad diarias.',
          'Implantación de REDCap: diseño completo de formularios, lógica de branching y validaciones.',
          'Organizo mis tareas con un tablero en Notion (corto, medio y largo plazo), lo que me permite cumplir con las entregas semanales acordadas con los investigadores.'
        ]
      },
      {
        role: 'Peón de albañil',
        company: 'COBO (Dos Hermanas)',
        period: '2019 — 2020',
        bullets: ['Trabajo en equipo y constancia, compaginado con mis estudios de desarrollo.']
      },
      {
        role: 'Mozo de almacén',
        company: 'S.C.A. Frutos del Condado (Bollullos del Condado, Huelva)',
        period: '2019 (6 meses)',
        bullets: ['Responsabilidad en el manejo de mercancía y ritmo de trabajo exigente.']
      }
    ],
    education: [
      {
        title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
        institution: 'IES Aguadulce (Almería)',
        period: '2019 — 2022 · Modalidad a distancia'
      },
      {
        title: 'CFGS Administración de Sistemas Informáticos',
        institution: 'IES Gonzalo Nazareno (Dos Hermanas)',
        period: '2008 — 2011 · Estudios parciales'
      }
    ],
    projects: [
      {
        name: 'Merger Lab',
        description:
          'Aplicación de escritorio para combinar varios archivos de hoja de cálculo sin necesidad de Excel, fórmulas ni conocimientos de programación. Permite fusionar mediante JOIN al estilo SQL (inner/left/right/outer) o apilar filas, con soporte para .xlsx, .xls, .csv y .ods, arrastre y reordenación de archivos, tutoriales integrados, actualizaciones automáticas y temas claro/oscuro, disponible en 8 idiomas.',
        tech: ['Electron', 'Vue', 'Python'],
        url: 'https://github.com/SalgueroOv/mergerlab'
      }
    ]
  },
  en: {
    name: 'Alejandro Salguero Oviedo',
    role: 'Full Stack Developer | AI-Assisted Development',
    summary: [
      'Developer with experience building Java applications for clinical research. I combine full-stack development with AI assistants (Claude Code, Copilot) to speed up implementation, while keeping a rigorous manual review of the generated code.',
      'I also handle Linux systems administration and virtualization, and prioritize my tasks in Notion across short, medium and long-term views. I consult AI first when facing new problems and turn to more experienced colleagues when needed, adapt naturally to shifting requirements, and communicate technical concepts to non-technical teams through analogies and personification.'
    ],
    contact: {
      email: 'salguero.ov@gmail.com',
      phone: '685 201 801',
      location: 'Dos Hermanas, Seville (Spain)',
      linkedin: 'https://www.linkedin.com/in/asalguerov',
      github: 'https://github.com/SalgueroOv'
    },
    stack: [
      'Java 17',
      'Spring Boot 3',
      'Neo4j',
      'MySQL',
      'JSF/Primefaces',
      'Lombok',
      'JUnit 5',
      'Testcontainers',
      'Maven',
      'Claude Code',
      'GitHub Copilot',
      'Git/GitLab',
      'Proxmox',
      'Debian',
      'Bash',
      'REDCap',
      'Notion'
    ],
    experience: [
      {
        role: 'Full Stack Developer & Systems Administrator',
        company: 'FISEVI — Movement Disorders Group, IBIS (Seville)',
        period: 'September 2022 — Present',
        bullets: [
          "Developed and maintain Parkinostic, a clinical application for collecting and consulting data on patients with Parkinson's and other movement disorders.",
          'Rewrote the application, migrating from JSF/Primefaces to Spring Boot 3 and Neo4j, leveraging generative AI tools for implementation and testing.',
          'Modeled the Neo4j graph database: designed new relationships between reviews, diagnoses and scales to streamline clinical queries.',
          'Fixed a concurrency issue by adapting an unofficial internal Neo4j API to support multiple simultaneous users.',
          'Manage the infrastructure: a Proxmox server running Debian virtual machines (GitLab, Alfresco, Neo4j, Glassfish, REDCap) and 5 Synology NAS units with daily backups.',
          'Rolled out REDCap: full form design, branching logic and validations.',
          'Organize my work with a Notion board (short, medium and long term), which lets me meet the weekly deliveries agreed with researchers.'
        ]
      },
      {
        role: "Bricklayer's laborer",
        company: 'COBO (Dos Hermanas)',
        period: '2019 — 2020',
        bullets: ['Teamwork and consistency, combined with my development studies.']
      },
      {
        role: 'Warehouse worker',
        company: 'S.C.A. Frutos del Condado (Bollullos del Condado, Huelva)',
        period: '2019 (6 months)',
        bullets: ['Responsibility handling goods under a demanding pace of work.']
      }
    ],
    education: [
      {
        title: 'Higher Vocational Training in Multiplatform Application Development',
        institution: 'IES Aguadulce (Almería)',
        period: '2019 — 2022 · Distance learning'
      },
      {
        title: 'Higher Vocational Training in IT Systems Administration',
        institution: 'IES Gonzalo Nazareno (Dos Hermanas)',
        period: '2008 — 2011 · Partially completed'
      }
    ],
    projects: [
      {
        name: 'Merger Lab',
        description:
          'Desktop app for merging multiple spreadsheet files without needing Excel, formulas or programming knowledge. Merge via SQL-style JOINs (inner/left/right/outer) or stack rows, with support for .xlsx, .xls, .csv and .ods, drag-and-drop file reordering, built-in tutorials, auto-updates and light/dark themes, available in 8 languages.',
        tech: ['Electron', 'Vue', 'Python'],
        url: 'https://github.com/SalgueroOv/mergerlab'
      }
    ]
  }
};
