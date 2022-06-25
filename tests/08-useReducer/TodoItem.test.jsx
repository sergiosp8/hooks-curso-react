import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('Prueba al componente <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Hacer la compra',
    done: false
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('el componente debe ser igual al snapshot', () => {
    const wrapper = render(<TodoItem todo={todo} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar el todo pendiente de completar', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).not.toContain('text-decoration-line-through')
  })

  test('debe de mostrar el todo completado', () => {
    todo.done = true
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('text-decoration-line-through')
  })

  test('el elemento span debe de llamar a la funcion toggleTodo al hacer click', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

    const spanElement = screen.getByLabelText('span')
    fireEvent.click(spanElement)

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('verificar que la funcion onDeleteTodo sea llamada al hacer click en el boton borrar', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})
