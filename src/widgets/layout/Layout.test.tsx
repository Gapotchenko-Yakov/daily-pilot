import { renderWithTestProviders } from '@/shared/lib/tests';
import { screen } from '@testing-library/react';
import Layout from './Layout';

test('renders button', () => {
  renderWithTestProviders(<Layout>Layout</Layout>);
  const elements = screen.getAllByText(/Главная/i);
  expect(elements.length).toBeGreaterThan(0);
});
