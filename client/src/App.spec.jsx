import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

describe("<App />", () => {
  test("should render the <Header /> component", () => {
    render(<App />, {wrapper: BrowserRouter})
    
    expect(screen.getByTitle("Cabeçalho com menu de navegação")).toBeInTheDocument()
  })
  
  test("should render the <Footer /> component", () => {
    render(<App />, {wrapper: BrowserRouter})

    expect(screen.getByTitle("Rodapé com links para redes sociais")).toBeInTheDocument()
  })
})