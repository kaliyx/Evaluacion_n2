/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SocialIconLink from './SocialIconLink';
import { MailOutlined } from '@ant-design/icons';

describe('SocialIconLink', () => {
    const mockProps = {
        href: 'mailto:test@example.com',
        icon: <MailOutlined />
    };

    it('debe renderizar el ancla con href correcto', () => {
        render(<SocialIconLink {...mockProps} />);

        const anchor = screen.getByRole('link');
        expect(anchor).toBeInTheDocument();
        expect(anchor).toHaveAttribute('href', 'mailto:test@example.com');
    });

    it('debe renderizar el botón con el icono', () => {
        render(<SocialIconLink {...mockProps} />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
