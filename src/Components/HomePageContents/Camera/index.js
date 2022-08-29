import './index.css'
import { camera } from '../../../Assets/Icons'
import { Link } from 'react-router-dom'
export default function Camera() {
  return (
    <section className="home-camera">
      <Link to={'/photos'}>Ən əziz xatirələrini bizimlə paylaş ...</Link>
      <img src={camera} alt="camera" />
    </section>
  )
}
