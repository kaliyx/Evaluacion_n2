# Portafolio - Estructura de Navegación

## Resumen de Cambios

Se ha reestructurado el portafolio para usar navegación por rutas en lugar de anclas en una sola página. Ahora tienes 4 páginas independientes accesibles desde el navbar.

## Páginas Creadas

### 1. **Inicio** (`/`)
- **Archivo**: `app/routes/home.tsx`
- **Contenido**: 
  - Página de bienvenida (Hero Section)
  - Muestra tu nombre, rol, biografía
  - Iconos de redes sociales (GitHub, correos)
  - Avatar/foto de perfil

### 2. **Proyectos** (`/proyectos`)
- **Archivo**: `app/routes/proyectos.tsx`
- **Contenido**:
  - Título: "Mis Proyectos"
  - Descripción: "Una colección de mis trabajos más recientes. Haz clic en cualquiera de ellos para ver más detalles."
  - Grid de 3 columnas con tus proyectos
  - Cada tarjeta muestra:
    - Imagen
    - Título
    - Descripción breve
    - Tags/tecnologías
    - Botones para demo y código

### 3. **Sobre Mi** (`/sobre-mi`)
- **Archivo**: `app/routes/sobre-mi.tsx`
- **Contenido**:
  - Foto de perfil grande
  - Nombre y rol
  - Sección "Quién soy y qué hago"
  - Formación y Certificaciones
  - Experiencia Laboral (tarjetas con contador en 21Inmobiliaria y Legalcont SPA)
  - Contacto Profesional (enlaces a GitHub, correos)

### 4. **Contacto** (`/contacto`)
- **Archivo**: `app/routes/contacto.tsx`
- **Contenido**:
  - Título centrado: "Contáctame"
  - Formulario con:
    - Campo de nombre
    - Campo de correo
    - Área de mensaje
    - Botón "Enviar mensaje" (alineado a la derecha)
  - Sección inferior: "O contáctame por vía"
    - LinkedIn
    - GitHub (https://github.com/kaliyx)
    - WhatsApp

## Navegación

El navbar ahora usa React Router Link en lugar de anclas HTML, lo que permite navegación sin recargar la página completa.

**Estructura del Navbar:**
- Inicio
- Proyectos
- Sobre Mi
- Contacto

## Archivo de Datos

Todo tu contenido personal se gestiona desde un solo archivo:
- **Archivo**: `app/data/portfolio.ts`

Para actualizar tu información, edita este archivo:
```typescript
export const portfolio: Portfolio = {
  name: 'Israel Jesús Poblete Gajardo',
  role: 'Ingenieria en informatica',
  bio: '...',
  avatarUrl: '...', // Cambia por tu foto real
  socials: [...],   // Tus redes
  projects: [...],  // Tus proyectos/experiencia
  nav: [...]        // Configuración del navbar
};
```

## Próximos Pasos Sugeridos

1. **Actualizar Avatar**: Cambia `avatarUrl` en `portfolio.ts` por tu foto real
2. **Agregar Proyectos Reales**: Reemplaza los proyectos de ejemplo con tus proyectos reales
3. **Configurar Formulario de Contacto**: Integra un backend o servicio como Formspree/EmailJS
4. **Personalizar WhatsApp**: Actualiza el enlace de WhatsApp con tu número real
5. **LinkedIn**: Actualiza el enlace de LinkedIn con tu perfil real

## Servidor de Desarrollo

Para iniciar el servidor:
```bash
npm run dev
```

Accede a: http://localhost:5173/

## Build de Producción

Para crear el build:
```bash
npm run build
```

## Tecnologías Utilizadas

- React Router 7 (navegación)
- Ant Design (componentes UI)
- TypeScript (tipado)
- Vite (bundler)
