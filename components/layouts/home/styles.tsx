import React from 'react';

export class PortfolioStyles {
  // Estilo general para el Layout principal
  static layout: React.CSSProperties = {
    backgroundColor: '#fff',
    fontFamily: `'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'`,
  };

  // Estilo para la cabecera (Header)
  static header: React.CSSProperties = {
    position: 'fixed',
    zIndex: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'saturate(180%) blur(10px)', // Efecto "cristal"
    borderBottom: '1px solid #f0f0f0',
  };

  // Estilo para la sección de bienvenida (Hero)
  static heroSection: React.CSSProperties = {
    textAlign: 'center',
    padding: '120px 24px 80px 24px', // Espacio superior para el header fijo
    backgroundColor: '#ffffff',
  };

  // Estilo para el contenedor de la sección de proyectos
  static projectsSection: React.CSSProperties = {
    padding: '60px 80px',
    backgroundColor: '#f0f2f5', // Un gris suave para contraste
  };

  // Estilo para los títulos de las secciones
  static sectionTitle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '48px',
  };

  // Estilo para el pie de página (Footer)
  static footer: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#001529', // Un color oscuro de la paleta de AntD
    color: 'rgba(255, 255, 255, 0.65)',
    padding: '24px 50px',
  };

  // Estilo para la imagen dentro de ProjectCard
  static projectCardImage: React.CSSProperties = {
    height: 200,
    objectFit: 'cover',
  };
}