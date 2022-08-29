import React from 'react'
import FavoritesConent from '../../Components/MainPageContents/FavoritesConent/FavoritesConent'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import Main from '../../Layouts/Main/Main'
import Navbar from '../../Layouts/Navbar/Navbar'

function Favorites() {
  return (
    <>
        <Navbar/>
        <Main>
            <Sidebar/>
            <FavoritesConent/>
        </Main>
    </>
  )
}

export default Favorites