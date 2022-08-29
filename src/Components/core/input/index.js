import './index.css'
import { useState, useRef } from 'react'

const Input = (props) => {
  const [error, setError] = useState(false)
  const inputRef = useRef(null)
  const inputType = props.type
  const handleError = () => {
    if (inputType === 'text') {
      setError(inputRef.current.value.length === 0)
      props.setPrevent(inputRef.current.value.length === 0)
      return
    }
    if (inputType === 'email') {
      setError(
        !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputRef.current.value),
      )
      props.setPrevent(
        !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputRef.current.value),
      )

      return
    }
    if (inputType === 'password') {
      setError(inputRef.current.value.length < 8)
      props.setPrevent(inputRef.current.value.length < 8)

      return
    }
  }
  return (
    <label className={` container__input ${error && 'error_input'}`}>
      <p>{props.label}</p>
      <input ref={inputRef} onInput={() => handleError()} {...props} />
    </label>
  )
}

export default Input
