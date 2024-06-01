import './App.css'
import Books from './components/Books'
import Characters from './components/Characters'
import HomePage from './components/HomePage'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Movies from './components/Movies'
import Potions from './components/Potions'
import Spells from './components/Spells'
import BookDescription from './components/BookDescription'
import CharCardDescription from './components/CharCardDescription'

const Applayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/books/',
        element: <Books />,
      },
      {
        path: '/characters/',
        element: <Characters />,
      },
      {
        path: '/movies/',
        element: <Movies />,
      },
      {
        path: '/potions',
        element: <Potions />,
      },
      {
        path: '/spells/',
        element: <Spells />,
      },
      {
        path: '/books/:bookId',
        element: <BookDescription />,
      },
      {
        path: '/characters/:charId',
        element: <CharCardDescription />,
      },
    ],
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
