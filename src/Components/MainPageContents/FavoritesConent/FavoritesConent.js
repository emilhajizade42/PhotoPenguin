import React, { useState } from 'react'
import Polaroid from '../../core/polaroid'
// bu import da silinecek ..............
import {
  img4,
  img5,
  img7,
  img8,
  img9,
  img10,
} from '../../../Assets/Images/delete'
import '../PhotoContent/index.css'

export default function FavoritesConent() {
  const [open, setOpen] = useState(false)
  const [photo, setPhoto] = useState(null)
  // const photos silinecekk ....
  const photos = [img9, img10, img5, img4, img7, img8]
  const generateImages = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i += 2) {
      newArr.push(array.slice(i, i + 2))
    }
    return newArr
  }
  const images = generateImages(photos)
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="photo_content">
        {/* BU HISSE SILINECEK .... */}
        {images.map((chunk, index) => (
          <div key={index}>
            {chunk.map((item, index) => (
              <figure
                onClick={() => {
                  setOpen(true)
                  setPhoto(item)
                }}
                key={index}
              >
                <img src={item} alt={'photo'} key={index} />
              </figure>
            ))}
          </div>
        ))}
        {/* .................. */}
      </div>
      {open && <Polaroid setOpen={setOpen} photo={photo} />}
    </section>
  )
}
