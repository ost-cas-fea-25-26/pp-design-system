import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Button } from '../components/Button';

describe('Button component', () => {
    it('renders the button with provided label', () => {
        render(<Button label="Click me" />);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('applies primary class when primary is true', () => {
        render(<Button label="Primary" primary />);
        const button = screen.getByRole('button', { name: /primary/i });
        expect(button.className).toContain('storybook-button--primary');
        expect(button.className).not.toContain('storybook-button--secondary');
    });

    it('applies secondary class when primary is false', () => {
        render(<Button label="Secondary" />);
        const button = screen.getByRole('button', { name: /secondary/i });
        expect(button.className).toContain('storybook-button--secondary');
    });

    it('applies correct size class', () => {
        render(<Button label="Large" size="large" />);
        const button = screen.getByRole('button', { name: /large/i });
        expect(button.className).toContain('storybook-button--large');
    });

    it('applies backgroundColor style when provided', () => {
        render(<Button label="Styled" backgroundColor="#FFFFFF" />);
        const button = screen.getByRole('button', { name: /styled/i });
        expect(button).toHaveStyle({ backgroundColor: '#FFFFFF' });
    });

    it('calls onClick when clicked', () => {
        const handleClick = vi.fn();
        render(<Button label="Click me" onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button', { name: /click me/i }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
