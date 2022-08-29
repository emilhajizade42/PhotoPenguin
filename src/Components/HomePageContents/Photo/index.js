import { useEffect } from 'react'
import { penguin1, penguin2, blur } from '../../../Assets/Images/index'
import hoverEffect from 'hover-effect'
import './index.css'

export default function Photo() {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.5,
      image1: penguin1,
      image2: penguin2,
      displacementImage: blur,
    })
  }, [])

  return (
    <section className="landing">
      <article className="intro">
        <h1>Maraqlıdır</h1>
        <p>
          Pinqvinlər suyun altında gözlərinə dəyən işığın bükülməsinin qarşısını
          alan buynuz qişalara sahibdirlər. Bu, pinqvinlərə suyun altında aydın
          görməyə imkan verir, onlara ov etməyə və yırtıcılardan qaçmağa kömək
          edir.
        </p>
        <button>Fotolara keç</button>
      </article>
      <div className="distortion"></div>
    </section>
  )
}
