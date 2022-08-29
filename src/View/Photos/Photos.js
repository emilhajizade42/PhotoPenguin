import React from 'react'
import PhotoContent from '../../Components/MainPageContents/PhotoContent/PhotoContent'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import Main from '../../Layouts/Main/Main'
import Navbar from '../../Layouts/Navbar/Navbar'

function Photos() {
  return (
    <>
        <Navbar/>
        <Main>
            <Sidebar/>
            <PhotoContent/>
        </Main>
    </>
  )
}

export default Photos