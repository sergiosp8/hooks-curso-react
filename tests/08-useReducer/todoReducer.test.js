import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Prueba todoReducer', () => {
  const initialState = [{ id: 1, text: 'Hacer ejercicio', done: false }]
  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('debe de agregar un todo', () => {
    const action = {
      type: 'ADD_TODO',
      payload: {
        id: 2,
        description: 'Hacer la compra',
        done: false
      }
    }
    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('debe de eliminar un todo', () => {
    const newState = todoReducer(initialState, {
      type: 'DELETE_TODO',
      payload: 1
    })
    expect(newState.length).toBe(0)
  })

  test('debe de cambiar el estado de un todo', () => {
    const newState = todoReducer(initialState, {
      type: 'TOGGLE_TODO',
      payload: 1
    })
    expect(newState[0].done).toBe(true)
  })
})
