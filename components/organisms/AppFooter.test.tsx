/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AppFooter from './AppFooter';
import { portfolio } from '../../app/data/portfolio';

describe('AppFooter', () => {
  it('debe mostrar el nombre del portafolio en el footer', () => {
    render(<AppFooter />);
    expect(screen.getByText(new RegExp(portfolio.name))).toBeInTheDocument();
  });
});
