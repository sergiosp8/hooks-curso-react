import { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('heavyStuff')
  }

  return `heavyStuff ${iterationNumber}`
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(10000)
  const [show, setShow] = useState(true)

  const messageMorize = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter : <Small value={counter} />
      </h1>
      <hr />

      <h4>{messageMorize}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-danger" onClick={() => setShow(!show)}>
        Show / Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
