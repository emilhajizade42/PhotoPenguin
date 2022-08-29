import './index.scss'
import { close, cardimg2 } from '../../../Assets/Images'
const Polaroid = ({ setOpen, photo }) => {
  return (
    <div className="container_palaroid">
      <span>
        <img
          onClick={() => {
            setOpen(false)
          }}
          src={close}
          alt="X"
        />
      </span>
      <figure>
        <img src={photo} />
      </figure>
      <div>
        <div>
          <i className="fa-regular fa-star" />
          <i className="fa-solid fa-folder-open" />
          <i className="fa-regular fa-trash-can" />
        </div>
      </div>
    </div>
  )
}

export default Polaroid
