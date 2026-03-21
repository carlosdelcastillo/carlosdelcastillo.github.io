import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

describe('ui/button', () => {
  test('buttonVariants returns default classes', () => {
    const classes = buttonVariants();
    expect(classes).toContain('bg-primary');
    expect(classes).toContain('h-10');
  });

  test('renders button with variant and size', () => {
    render(
      <Button variant="outline" size="sm">
        Click me
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button.className).toContain('border');
    expect(button.className).toContain('h-9');
  });

  test('renders asChild', () => {
    render(
      <Button asChild>
        <a href="/docs">Docs</a>
      </Button>
    );

    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs');
  });
});

describe('ui/card', () => {
  test('renders full card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Card footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Card title')).toBeInTheDocument();
    expect(screen.getByText('Card description')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
    expect(screen.getByText('Card footer')).toBeInTheDocument();
  });

  test('renders fallback title content when empty', () => {
    render(<CardTitle />);
    expect(screen.getByText('Card title')).toBeInTheDocument();
  });
});
