import { render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { HomePage } from '../../src/09-useContext/HomePage'

describe('Pruba en HomePage', () => {
  const user = {
    id: 1,
    name: 'Juan'
  }

  test('Debe de mostrar el componente <HomePage/> sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('null')
    // screen.debug()
  })

  test('Debe de mostrar el componente <HomePage/> con el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 2))
    // screen.debug()
  })
})
