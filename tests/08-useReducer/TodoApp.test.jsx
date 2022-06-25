import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer'
import { useTodos } from '../../src/hooks/useTodos'

jest.mock('../../src/hooks/useTodos')

describe('Pruebas <TodoApp/>', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Hacer la compra', done: false },
      { id: 2, description: 'Hacer la limpieza', done: true }
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  })
  test('Debe de mostrar el componente <TodoAdd/>', () => {
    render(<TodoApp />)

    expect(screen.getByText('Hacer la compra')).toBeTruthy()
    expect(screen.getByText('Hacer la limpieza')).toBeTruthy()
    expect(screen.getByRole('textbox', { placeholder: 'Agregar Todo' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Agregar' })).toBeTruthy()
  })
})
