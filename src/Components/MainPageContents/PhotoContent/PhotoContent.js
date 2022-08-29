import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../context'
import Polaroid from '../../core/polaroid'
// bu import da silinecek ..............
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
} from '../../../Assets/Images/delete'
import './index.css'
function PhotoContent() {
  const { photoStorage, setPhotoStorage } = useContext(MyContext)
  const [open, setOpen] = useState(false)
  const [photo, setPhoto] = useState(null)
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    try {
      fetch('http://localhost:20000/images')
        .then((res) => {
          console.log(res)
          return res.json()
        })
        .then((result) => setPhotoStorage(result))
    } catch (error) {
      console.log('no foto')
    }
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])
  // const photos silinecekk ....
  const photos = [
    img9,
    img10,
    img5,
    img6,
    img7,
    img8,
    img11,
    img12,
    img1,
    img2,
    img3,
    img4,
  ]

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
        {/* {photoStorage.length !== 0 ? (
          photoStorage.map((item, index) => (
            <img
              src={item.img}
              height={'100px'}
              width={'100px'}
              alt={'hi'}
              key={index}
            />
          ))
        ) : (
          <div>There is no photo</div>
        )} */}

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

export default PhotoContent
