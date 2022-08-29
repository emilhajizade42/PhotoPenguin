import React, { useContext, useRef } from 'react'
import { MyContext } from '../../context'
import { logo } from '../../Assets/Images'
import './index.css'
function Navbar() {
  const { mobSidebarVisible, setMobSidebarVisible } = useContext(MyContext)
  const inp_file = useRef()
  let files
  const click_inp_file = () => inp_file.current.click()
  const upload_file = (e) => {
    console.log(e.target.files)
    ;[...e.target.files].forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = (e) => {
        console.log(e.target.result)
        files = {
          title: 'json-server',
          img: e.target.result,
        }
        console.log('datammm')
        console.log(JSON.stringify(files))
        fetch('http://localhost:3000/images', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'json-server',
            img: `${e.target.result}`,
          }),
        })
          .then((response) => response.json())
          .then((files) => {
            console.log('Success:', files)
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }
      reader.readAsDataURL(file)
    })
    //send post request
  }
  return (
    <>
      <nav>
        <h1 className="navbar_logo ">
          <i
            className="fa-solid fa-bars"
            onClick={() => {
              setMobSidebarVisible(!mobSidebarVisible)
            }}
          ></i>
          <img width="56px" src={logo} alt="Logo" />
          <span>Photo Penguin</span>
        </h1>
        {/* <input className="navbar_search" type="text" ></input> */}
        <div className="navbar_box">
          <input
            className="d-none"
            type="file"
            multiple
            ref={inp_file}
            onChange={(e) => {
              upload_file(e)
            }}
          ></input>
          <div className="navbar_box_upload" onClick={click_inp_file}>
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            <span>File upload</span>
          </div>
          {/* <img
            className="navbar_box_profile"
            width={'30px'}
            height={'30px'}
            src={penguinLogo}
            alt="profile"
          /> */}
        </div>
      </nav>
      <div className="nav_holder"></div>
    </>
  )
}

export default Navbar
