import './index.css'
import { star } from '../../../Assets/Icons'
export default function Choose() {
  const data = [
    'Data itkisinə əlvida',
    'Yaddaşa qənaət et ',
    'Sevimli şəkillərini seç',
  ]
  return (
    <div className="home-choose">
      <h2>Niyə bizi seçməlisiniz?</h2>
      <ul>
        {data?.map((item, i) => (
          <li key={`choose=${i}`}>
            <img src={star} alt="star" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
