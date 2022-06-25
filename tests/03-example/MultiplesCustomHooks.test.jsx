import { fireEvent, render, screen } from '@testing-library/react'
import MultiplesCustomHooks from '../../src/03-example/MultiplesCustomHooks'
import { useCounter, useFetch } from '../../src/hooks'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultiplesCustomHooks/>', () => {
  const mockIncrement = jest.fn()
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('el componente debe ser igual al snapshot', () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

    const container = render(<MultiplesCustomHooks />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el componente por defecto', () => {
    render(<MultiplesCustomHooks />)

    expect(screen.getByText('Loading...'))
    expect(screen.getByText('Breaking Bad Quotes'))
    // screen.debug()
  })

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'sergio',
          quote: 'hola'
        }
      ],
      isLoading: false,
      hasError: null
    })
    render(<MultiplesCustomHooks />)
    expect(screen.getByText('hola')).toBeTruthy()
    expect(screen.getByText('sergio')).toBeTruthy()

    // screen.debug()
  })

  test('debde de llamar la funcion increment', () => {
    render(<MultiplesCustomHooks />)
    const nextButton = screen.getByRole('button')
    fireEvent.click(nextButton)
    expect(mockIncrement).toHaveBeenCalled()
    // screen.debug()
  })
})
