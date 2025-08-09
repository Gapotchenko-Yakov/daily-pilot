import { render } from '@testing-library/react';
import { TestProviders } from './TestProviders';

export const renderWithTestProviders = (jsxElement: React.ReactNode) => {
  return render(<TestProviders>{jsxElement}</TestProviders>);
};
