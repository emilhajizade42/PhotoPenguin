import React from 'react'
import AlbomsContent from '../../Components/MainPageContents/AlbomsContent/AlbomsContent'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import Main from '../../Layouts/Main/Main'
import Navbar from '../../Layouts/Navbar/Navbar'

function Alboms() {
  return (
    <>
        <Navbar/>
        <Main>
            <Sidebar/>
            <AlbomsContent/>
        </Main>
    </>
  )
}

export default Alboms