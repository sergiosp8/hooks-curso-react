import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas useForm', () => {
  const initialForm = {
    name: 'Sergio',
    email: 'sergiosp8@gmail.com'
  }
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  })
  test('debe de cambiar el nombre del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current

    const newValue = 'Juan'
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
    })
    expect(result.current.name).toEqual(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('debe de resetear el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current

    const newValue = 'Juan'
    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    expect(result.current.formState.name).toEqual(initialForm.name)
    expect(result.current.name).toEqual(initialForm.name)
  })
})
