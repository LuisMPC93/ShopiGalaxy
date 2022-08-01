import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {NewsLetter} from "./components/ui/NewsLetter/NewsLetter";

test('renders a newsletter section', () => {
  render(<App />);
  const linkElement = screen.getByText('¡Únete a nuestras novedades y promociones!');
  expect(linkElement).toBeInTheDocument();
});

test("Test form submit and validation error", () => {
  const onSubmit = jest.fn();
  const { getByText } = render(<NewsLetter testSubmit={onSubmit} />);

  fireEvent.click(screen.getByText("Suscribirme"));
  expect(onSubmit).toHaveBeenCalled();
});

test("Test form submit and validation correct", () => {
  const onSubmit = jest.fn();
  render(<NewsLetter testSubmit={onSubmit}/>);

  fireEvent.change(screen.getByPlaceholderText("Ingresa tu nombre"), {target: {value: 'Luis'}})
  expect(screen.getByPlaceholderText("Ingresa tu nombre").value).toBe('Luis')

  fireEvent.change(screen.getByPlaceholderText("Ingresa tu mail"), {target: {value: 'luis@example.com'}})
  expect(screen.getByPlaceholderText("Ingresa tu mail").value).toBe('luis@example.com')
  fireEvent.click(screen.getByText("Suscribirme"));
  expect(onSubmit).toHaveBeenCalled();
});