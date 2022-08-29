import './index.css'
import { Link } from 'react-router-dom'
import { favorite } from '../../../Assets/Images'
export default function Favorite() {
  return (
    <section className="home-favorite">
      <Link to={'/favorites'}>Sevimli şəkillərinizi seçin ...</Link>
      <figure className="swing">
        <img src={favorite} width="200" alt="Favorite" />
      </figure>
    </section>
  )
}
