import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({ description: '' })

  const handleOnNewTodo = (e) => {
    e.preventDefault()
    if (description.trim().length > 0) {
      onNewTodo({ id: new Date().getTime(), description, done: false })
      onResetForm()
    }
  }

  return (
    <form onSubmit={handleOnNewTodo}>
      <input
        onChange={onInputChange}
        name="description"
        type="text"
        placeholder="Agregar un Todo"
        className="form-control"
        value={description}
      />
      <button className="btn btn-primary mt-2">Agregar</button>
    </form>
  )
}
