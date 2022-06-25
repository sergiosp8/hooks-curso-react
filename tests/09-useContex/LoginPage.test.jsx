import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Pruebas LoginPage', () => {
  test('Debe de mostrar el componente <LoginPage/>', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('null')

    // screen.debug()
  })

  test('debe de llamar al setUSer cuando se hace click en el boton', () => {
    const setUser = jest.fn()
    const userMock = { id: '1', name: 'sergio sosa', email: 'sergiosp@gmail.com' }
    render(
      <UserContext.Provider value={{ user: null, setUser }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(setUser).toHaveBeenCalledWith(userMock)
  })
})
