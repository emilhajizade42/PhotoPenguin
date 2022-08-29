import React from 'react'
import ArchiveContent from '../../Components/MainPageContents/ArchiveContent/ArchiveContent'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import Main from '../../Layouts/Main/Main'
import Navbar from '../../Layouts/Navbar/Navbar'

function Archive() {
  return (
    <>
      <Navbar />
      <Main>
        <Sidebar />
        <ArchiveContent />
      </Main>
    </>
  )
}

export default Archive
