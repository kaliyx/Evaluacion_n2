/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from './ProjectsSection';
import { portfolio } from '../../app/data/portfolio';

describe('ProjectsSection', () => {
  it('debe renderizar el título de la sección', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/Experiencia Laboral/i)).toBeInTheDocument();
  });

  it('debe renderizar al menos un ProjectCard basado en portfolio.projects', () => {
    render(<ProjectsSection />);
    const firstProjectTitle = portfolio.projects[0].title;
    expect(screen.getByText(firstProjectTitle)).toBeInTheDocument();
  });
});
