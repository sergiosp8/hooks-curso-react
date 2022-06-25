import React, { useCallback, useState } from 'react'
import { Hijo } from './Hijo'

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10, 100, 200]
  const [valor, setValor] = useState(0)

  const incrementarFather = useCallback((num) => {
    console.log('  Padre: incrementarFather  ')
    setValor((prev) => prev + num)
  }, [])

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor}</p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementarFather} />
      ))}
      {/* <Hijo /> */}
    </div>
  )
}
