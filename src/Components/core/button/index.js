import './index.css'

const Button = ({ type, children, disabled }) => {
  return (
    <button
      className={`container__button ${disabled && 'disabled'}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
