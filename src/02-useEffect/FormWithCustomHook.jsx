import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formState

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
      <hr />
      <form>
        <input
          onChange={onInputChange}
          className="form-control"
          type="text"
          placeholder="username"
          name="username"
          value={username}
        />
        <input
          onChange={onInputChange}
          className="form-control mt-2"
          type="password"
          name="password"
          placeholder="password"
          value={password}
        />
        <input
          onChange={onInputChange}
          className="form-control mt-2"
          type="email"
          name="email"
          placeholder="example@example.com"
          value={email}
        />
      </form>
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  )
}
