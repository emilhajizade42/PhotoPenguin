import './index.css'
import { useParams, Link } from 'react-router-dom'
import Signup from '../../Components/RegisterPageContents/Signup'
import Signin from '../../Components/RegisterPageContents/Signin'

const Register = () => {
  let { type } = useParams()
  return (
    <section className="container__register">
      <div>
        <Link
          className={type === 'login' && 'active-register'}
          to={'/register/login'}
        >
          Login
        </Link>
        <Link
          className={type === 'signup' && 'active-register'}
          to={'/register/signup'}
        >
          Sign up
        </Link>
      </div>
      <div>{type === 'login' ? <Signin /> : <Signup />}</div>
    </section>
  )
}

export default Register
