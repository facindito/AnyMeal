export default function Header() {
  return (
    <header className='sticky w-full p-4 top-0 bg-white shadow-sm md:fixed'>
      <div className='max-w-5xl mx-auto flex justify-center items-center'>
        <h1 className='text-2xl font-bold flex-1'>Any Meal</h1>
        <nav className='flex gap-2'>
          <a href='!#'>Favorites</a>
          <a href='!#'>Login</a>
          <a href='!#'>Register</a>
        </nav>
      </div>
    </header>
  )
}
