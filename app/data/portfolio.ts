export type SocialLink = {
  label: string;
  href: string;
  icon?: 'github' | 'linkedin' | 'twitter' | 'web' | 'mail';
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type NavItem = {
  key: string;
  label: string;
  href: string;
};

export type Portfolio = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  socials: SocialLink[];
  projects: Project[];
  nav: NavItem[];
};

export const portfolio: Portfolio = {
  name: 'Tu Nombre',
  role: 'Desarrollador/a Full Stack',
  bio: 'Apasionado/a por crear experiencias web de alto impacto con React, Node y TypeScript.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
  socials: [
    { label: 'GitHub', href: 'https://github.com/tu-usuario', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tu-usuario', icon: 'linkedin' },
    { label: 'Sitio Web', href: 'https://tu-dominio.com', icon: 'web' },
    { label: 'Email', href: 'mailto:tu@correo.com', icon: 'mail' },
  ],
  projects: [
    {
      title: 'Proyecto increíble 1',
      description: 'Una breve descripción del proyecto y su impacto.',
      tags: ['React', 'Ant Design', 'TypeScript'],
      imageUrl: 'https://picsum.photos/seed/proj1/800/600',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Aplicación fantástica 2',
      description: 'Solución moderna a un problema real con foco en UX.',
      tags: ['Vite', 'React Router', 'Node.js'],
      imageUrl: 'https://picsum.photos/seed/proj2/800/600',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Herramienta útil 3',
      description: 'Optimiza flujos de trabajo con una interfaz sencilla.',
      tags: ['Tailwind', 'Firebase'],
      imageUrl: 'https://picsum.photos/seed/proj3/800/600',
    },
  ],
  nav: [
    { key: 'inicio', label: 'Inicio', href: '#inicio' },
    { key: 'proyectos', label: 'Proyectos', href: '#proyectos' },
    { key: 'contacto', label: 'Contacto', href: '#contacto' },
  ],
};
