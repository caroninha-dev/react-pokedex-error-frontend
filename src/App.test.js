import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderizar um código de erro na tag `<h1>`', () => {
  render(<App />);

  const errorCode = screen;

  expect(errorCode).toBeInTheDocument();
});
