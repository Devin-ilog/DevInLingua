import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../index"
import { BrowserRouter } from 'react-router-dom';

const renderComponent = () => {
  render(<Header />, {wrapper: BrowserRouter})
}

describe("<Header />", () => {
  test("should show Header", () => {
    renderComponent()

    expect(screen.getByTitle('Cabeçalho com menu de navegação')).toBeInTheDocument()
  })

  test("should show home link at logo", () => {
    renderComponent()

    const linkLogo = screen.getByRole('link', {name: /DevInLingua/i})

    expect(linkLogo).toBeInTheDocument()
    expect(linkLogo).toHaveAttribute("href")

    fireEvent.click(linkLogo);
    expect(window.location.pathname).toBe('/');
  })

  test("should show icon calendar", () => {
    renderComponent()

    const calendarIcon = screen.getByRole('link', {name: 'icon-calendar'})
    
    expect(calendarIcon).toBeInTheDocument()
    expect(calendarIcon).toHaveAttribute("href")

    fireEvent.click(calendarIcon);
    expect(window.location.pathname).toBe('/aulas-agendadas');

  })
})