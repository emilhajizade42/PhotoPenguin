import Input from '../../core/input'
import Button from '../../core/button'
import { useState } from 'react'
import './index.css'

const Signin = () => {
  const [email, setEmail] = useState(true)
  const [password, setPassword] = useState(true)

  return (
    <div className="register__login">
      <Input
        setPrevent={setEmail}
        placeholder="email@gmail.com"
        label="E-mail"
        type="email"
      />
      <Input
        setPrevent={setPassword}
        placeholder="At least 8 characters"
        label="Password"
        type="password"
      />
      <Button disabled={email || password} type="submit">
        Login
      </Button>
    </div>
  )
}

export default Signin
