import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(10)
    expect(typeof increment).toBe('function')
    expect(typeof decrement).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('debe de iniciar el estado en el valor pasado', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter } = result.current

    expect(counter).toBe(100)
  })

  test('debe de incrementar el contador en 1', () => {
    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    act(() => {
      increment()
      increment(5)
    })

    expect(result.current.counter).toBe(106)
  })

  test('debe de decrementar el contador en 1', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => {
      decrement()
      decrement(5)
    })

    expect(result.current.counter).toBe(94)
  })

  test('debe de resetear el contador', () => {
    const { result } = renderHook(() => useCounter(100))
    const { reset, decrement } = result.current

    act(() => {
      decrement()
      reset()
    })

    expect(result.current.counter).toBe(100)
  })
})
