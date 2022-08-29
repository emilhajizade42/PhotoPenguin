import React from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import TrashContent from '../../Components/MainPageContents/TrashContent/TrashContent'
import Main from '../../Layouts/Main/Main'
import Navbar from '../../Layouts/Navbar/Navbar'

function Trash() {
  return (
    <>
      <Navbar />
      <Main>
        <Sidebar />
        <TrashContent />
      </Main>
    </>
  )
}

export default Trash
