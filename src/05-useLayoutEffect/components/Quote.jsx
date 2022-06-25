import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ author, quote }) => {
  const refParrafoQuote = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { width, height } = refParrafoQuote.current.getBoundingClientRect()
    setBoxSize({ width, height })
  }, [quote])

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={refParrafoQuote} className="mb-1 ">
          {author}
        </p>
        <footer className="blockquote-footer">{quote}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
