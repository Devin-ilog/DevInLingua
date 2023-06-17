import { render, screen } from "@testing-library/react"
import Home from "../index"
import useTheacherList from "../../../hooks/useTeacherList"

jest.mock("../../../hooks/useTeacherList")

const mockUseTeacherList = useTheacherList

const renderComponent = () => {
  const dados = [{
    id: 1,
    name: 'Bruno Costa',
    languagens: [
      'Inglês',
      'Português'
    ]
  },
  {
    id: 2,
    name: 'Emanuela P.',
    languagens: [
      'Inglês',
      'Português'
    ]
  }]
  mockUseTeacherList.mockReturnValue({
    teachers: dados,
    error: null
  })

  render(<Home />)
}

describe("<Home />", () => {
  test("should render the teacher's cards ", () => {
    renderComponent()

    expect(screen.getByText('Bruno Costa')).toBeInTheDocument()
  })
})