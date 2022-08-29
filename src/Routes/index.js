import Alboms from '../View/Alboms/Alboms'
import Archive from '../View/Archive/Archive'
import Favorites from '../View/Favorites/Favorites'
import Photos from '../View/Photos/Photos'
import Trash from '../View/Trash/Trash'
import Register from '../View/Register'
import Home from '../View/Home'

const routes = [
  {
    id: 1,
    path: '/photos',
    element: <Photos />,
  },
  {
    id: 2,
    path: '/index',
    element: <Home />,
  },
  {
    id: 3,
    path: '/',
    element: <Home />,
  },
  {
    id: 4,
    path: '/favorites',
    element: <Favorites />,
  },
  {
    id: 5,
    path: '/archive',
    element: <Archive />,
  },
  {
    id: 6,
    path: '/trash',
    element: <Trash />,
  },
  {
    id: 7,
    path: '/register/:type',
    element: <Register />,
  },
  {
    id: 8,
    path: '/alboms',
    element: <Alboms />,
  },
]

export { routes }
