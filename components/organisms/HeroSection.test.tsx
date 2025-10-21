/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from './HeroSection';
import { portfolio } from '../../app/data/portfolio';

describe('HeroSection', () => {
  it('debe renderizar nombre y rol del portfolio', () => {
    render(<HeroSection />);
    expect(screen.getByText(portfolio.name)).toBeInTheDocument();
    expect(screen.getByText(portfolio.role)).toBeInTheDocument();
  });

  it('debe renderizar iconos sociales (al menos uno)', () => {
    render(<HeroSection />);
    // Los SocialIconLink renderan botones dentro de anchors
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(1);
  });
});
