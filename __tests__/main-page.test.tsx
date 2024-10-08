import { render, screen } from '@testing-library/react';
import MainPage from '../src/app/page';

test('should h1 Enes Tekin to be in the document ', () => {
  render(<MainPage />);
  const text = screen.getByRole('heading', { name: 'Enes Tekin' });
  expect(text).toBeInTheDocument();
});
