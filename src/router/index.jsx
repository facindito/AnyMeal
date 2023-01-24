import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/recipe/:id',
        element: <Recipe />,
      },
    ],
  },
])
