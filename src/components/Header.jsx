import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='w-full bg-[#252525] '>
      <div className='max-w-4xl mx-auto flex justify-between items-center border-b-2 border-yellow-200 py-2 px-4'>
        <NavLink to='/' className='text-2xl font-semibold'>
          AM
        </NavLink>
        <NavLink className='hover:text-yellow-400' to='/favorites'>
          Favorites
        </NavLink>
      </div>
    </header>
  )
}
