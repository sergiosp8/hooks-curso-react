import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: 'sergiosp8',
    email: 'sergiosp8@gmail.com'
  })

  const { username, email } = form

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }

  useEffect(() => {}, [form])

  return (
    <>
      <h1>Simple Form </h1>
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
          type="email"
          name="email"
          placeholder="example@example.com"
          value={email}
        />
      </form>
      {username === 'sergiosp88' && <Message />}
    </>
  )
}
