import { useEffect, useState } from 'react'

export const Message = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      const coords = { x: e.clientX, y: e.clientY }
      setCords(coords)
    }
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(cords)}
    </>
  )
}
