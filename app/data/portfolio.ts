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
  name: 'Israel Jesús Poblete Gajardo',
  role: 'Ingenieria en informatica',
  bio: 'Ingeniero en Informática titulado de Duoc UC, sede San Joaquín. Especializado en desarrollo de software, con enfoque en la creación de soluciones tecnológicas eficientes y adaptadas a las necesidades del usuario. Comprometido con la mejora continua y el aprendizaje constante.',
  avatarUrl: './assets/images/IMG_0682.jpg',
  socials: [
    { label: 'GitHub', href: 'https://github.com/kaliyx', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/israel-poblete-465612341', icon: 'linkedin' },
    { label: 'WhatsApp', href: 'https://wa.me/59651220663', icon: 'web' },
    { label: 'Correo', href: 'mailto:israel.poblete2019@gmail.com?subject=Contacto%20desde%20portafolio&body=Hola%20Israel%2C%20te%20escribo%20desde%20tu%20portafolio%20web.', icon: 'mail' },
  ],
  projects: [
    {
      title: 'Contador en 21Inmobiliaria',
      description: 'Experiencia laboral desempeñando funciones contables en el sector inmobiliario.',
      tags: ['Contabilidad', 'Gestión', 'Excel'],
      imageUrl: 'https://picsum.photos/seed/exp1/800/600',
    },
    {
      title: 'Contador en Legalcont SPA',
      description: 'Responsabilidades contables y administrativas en entorno PyME.',
      tags: ['Contabilidad', 'Administración', 'Trabajo en equipo'],
      imageUrl: 'https://picsum.photos/seed/exp2/800/600',
    },
  ],
  nav: [
    { key: 'inicio', label: 'Inicio', href: '/' },
    { key: 'proyectos', label: 'Proyectos', href: '/proyectos' },
    { key: 'sobre-mi', label: 'Sobre Mi', href: '/sobre-mi' },
    { key: 'contacto', label: 'Contacto', href: '/contacto' },
  ],
};
