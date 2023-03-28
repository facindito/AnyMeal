import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { MealsProvider } from '../context/meals'

const Layout = () => {
  return (
    <MealsProvider>
      <Header />
      <Outlet />
    </MealsProvider>
  )
}

export default Layout
