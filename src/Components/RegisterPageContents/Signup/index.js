import Input from '../../core/input'
import Button from '../../core/button'
import { useState } from 'react'
import './index.css'

const Signup = () => {
  const [text, setText] = useState(true)
  const [email, setEmail] = useState(true)
  const [password, setPassword] = useState(true)
  return (
    <div className="register__signup">
      <div>
        <Input setPrevent={setText} placeholder="Emil" label="Ad" type="text" />
        <Input
          setPrevent={setText}
          placeholder="Hacizade"
          label="Soyad"
          type="text"
        />
      </div>
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
      <Button disabled={text || email || password} type="submit">
        Signup
      </Button>
    </div>
  )
}

export default Signup
