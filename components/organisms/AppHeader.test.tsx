/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AppHeader from './AppHeader';
import { portfolio } from '../../app/data/portfolio';
import { MemoryRouter } from 'react-router';

describe('AppHeader', () => {
  it('debe renderizar items de navegación desde portfolio.nav', () => {
    render(
      <MemoryRouter>
        <AppHeader />
      </MemoryRouter>
    );
    // comprobar al menos el primer label de la navegación
    const firstNavLabel = portfolio.nav[0].label;
    expect(screen.getByText(firstNavLabel)).toBeInTheDocument();
  });
});
