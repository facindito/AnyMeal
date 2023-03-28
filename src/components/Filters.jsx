import { useState } from 'react'
import { CATEGORIES } from '../utils/constants'

export default function Filters({ filter, setFilter }) {
  const [active, setActive] = useState(null)
  const handleClick = ({ category }) => {
    setFilter({ category })
    setActive(category)
  }

  return (
    <div className='flex flex-col gap-4 p-2 border-dashed border-2 rounded-md border-yellow-400'>
      <h2 className='text-yellow-400 text-lg font-semibold ml-4'>Categories</h2>
      <ul className='flex flex-wrap gap-4'>
        {CATEGORIES.map((category) => (
          <li
            key={category}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              active === category && filter
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
