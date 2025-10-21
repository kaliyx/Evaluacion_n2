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

export type WorkExperience = {
  title: string;
  description: string;
  tags: string[];
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
  workExperience: WorkExperience[];
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
      title: 'HUERTOHOGAR',
      description: 'Diseño de página web para venta de productos de frutas, verduras y productos naturales.',
      tags: ['CSS', 'JS', 'HTML', 'Visual Studio Code'],
      imageUrl: './assets/images/HUERTOHOGAR.png',
      repoUrl: 'https://github.com/kaliyx/HuertoHogar.git',
    },
    {
      title: 'UrbanShop',
      description: 'Desarrollo de una plataforma para Android de comercio electrónico para la venta de ropa urbana.',
      tags: ['Android Studio', 'Kotlin'],
      imageUrl: './assets/images/UrbanShop.png',
    },
    {
      title: 'Edutech Innovator',
      description: 'Cambio de sistema monolítico a Microservicios en EduTech Innovators SPA.',
      tags: ['Microservicios', 'Docker', 'Postman', 'JPA', 'Spring Data', 'IntelliJ IDEA'],
      imageUrl: './assets/images/Edutechinnovators.png',
    },
  ],
  workExperience: [
    {
      title: 'Ayudante de contador - 21Inmobiliaria',
      description: 'Apoyo en tareas contables y administrativas en el sector inmobiliario.',
      tags: ['Contabilidad', 'Excel', 'Gestión'],
    },
    {
      title: 'Contador general - LegalCont SPA',
      description: 'Responsable de la gestion de la contabilidad de LegalCont SPA.',
      tags: ['Contabilidad', 'Administración', 'Trabajo en equipo'],
    },
  ],
  nav: [
    { key: 'inicio', label: 'Inicio', href: '/' },
    { key: 'proyectos', label: 'Proyectos', href: '/proyectos' },
    { key: 'sobre-mi', label: 'Sobre mí', href: '/sobre-mi' },
    { key: 'contacto', label: 'Contacto', href: '/contacto' },
  ],
};
