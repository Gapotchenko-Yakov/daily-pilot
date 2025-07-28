import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import React from 'react';

test('renders button', () => {
  render(<Layout>Layout</Layout>);
  const elements = screen.getAllByText('Главная');
  expect(elements.length).toBeGreaterThan(0);
});
