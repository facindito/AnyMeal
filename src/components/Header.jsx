import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='sticky w-full p-4 top-0 bg-white shadow-sm z-10'>
      <div className='max-w-5xl mx-auto flex justify-center items-center'>
        <NavLink to='/' className='text-2xl font-bold flex-1'>
          Any Meal
        </NavLink>
        <nav className='flex gap-2'>
          <NavLink to='/favorites'>Favorites</NavLink>
          {/* <a href='!#'>Login</a>
          <a href='!#'>Register</a> */}
        </nav>
      </div>
    </header>
  )
}
