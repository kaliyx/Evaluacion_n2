/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
    const mockProps = {
        title: 'Test Project',
        description: 'Project description',
        tags: ['react', 'ts'],
        imageUrl: '/project.jpg',
        liveUrl: 'https://example.com',
        repoUrl: 'https://github.com'
    };

    it('debe renderizar el componente correctamente', () => {
        render(<ProjectCard {...mockProps} />);

        expect(screen.getByText('Test Project')).toBeInTheDocument();
        expect(screen.getByText('Project description')).toBeInTheDocument();
    });

    it('debe mostrar la imagen con el src y alt correctos', () => {
        render(<ProjectCard {...mockProps} />);

        const image = screen.getByAltText('Test Project');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/project.jpg');
    });

    it('debe renderizar las etiquetas (tags)', () => {
        render(<ProjectCard {...mockProps} />);

        expect(screen.getByText('react')).toBeInTheDocument();
        expect(screen.getByText('ts')).toBeInTheDocument();
    });

    it('debe renderizar botones de acciones cuando hay liveUrl y repoUrl', () => {
        render(<ProjectCard {...mockProps} />);

        expect(screen.getByText('Demo')).toBeInTheDocument();
        expect(screen.getByText('Código')).toBeInTheDocument();
    });
});
