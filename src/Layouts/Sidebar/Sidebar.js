import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../context'
import './index.css'
function Sidebar() {
  const { mobSidebarVisible } = useContext(MyContext)
  return (
    <>
      <div
        className={`sidebar ${
          mobSidebarVisible ? 'sidebar_visible' : 'sidebar_none'
        }`}
      >
        <ul>
          <li>
            <Link to={'/'}>
              <i className="fa-regular fa-image" />
              Photos
            </Link>
          </li>
          <li>
            <Link to={'/favorites'}>
              <i className="fa-regular fa-star" />
              Favorites
            </Link>
          </li>
          <li>
            <Link to={'/alboms'}>
              <i className="fa-solid fa-book-bookmark" />
              Alboms
            </Link>
          </li>
          <li>
            <Link to={'/archive'}>
              <i className="fa-solid fa-folder-open" />
              Archive
            </Link>
          </li>
          <li>
            <Link to={'/trash'}>
              <i className="fa-regular fa-trash-can" />
              Trash
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
