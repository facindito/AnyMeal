import { useState } from 'react'
import { CATEGORIES } from '../utils/constants'

export default function Filters({ setFilter }) {
  const [active, setActive] = useState(null)
  const handleClick = ({ category }) => {
    setFilter({ category })
    setActive(category)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-yellow-400 text-lg font-semibold'>Categories</h2>
      <ul className='flex flex-wrap gap-4'>
        {CATEGORIES.map((category) => (
          <li
            key={category}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              active === category
                ? 'bg-yellow-300 text-yellow-900'
                : 'hover:bg-yellow-300 hover:text-yellow-900 transition-colors'
            }`}
            onClick={() => handleClick({ category })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
