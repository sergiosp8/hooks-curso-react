import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 2)}</pre>

      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: '1', name: 'sergio sosa', email: 'sergiosp@gmail.com' })}
      >
        Establecer usuario
      </button>
    </>
  )
}
