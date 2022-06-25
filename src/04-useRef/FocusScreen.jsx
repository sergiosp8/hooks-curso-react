import { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef()

  const onClickSelectInput = () => {
    inputRef.current.select()
  }
  return (
    <>
      <h1>Focus Screen</h1>

      <hr />
      <input ref={inputRef} className="form-control" type="text" name="" id="" placeholder="Ingrese su nombre" />
      <button className="btn btn-primary mt-2" onClick={onClickSelectInput}>
        Set Focus
      </button>
    </>
  )
}
