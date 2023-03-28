import { Link } from 'react-router-dom'
import { useFavorite } from '../context/meals'
import MealCard from './MealCard'

export default function ListOfMeals({ meals }) {
  const { favorites, toggleFavorite } = useFavorite()
  console.log(favorites)
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start'>
      {meals &&
        meals.map((meal) => (
          <li
            key={meal.id}
            className='h-full hover:scale-105 transition-transform ease-in-out relative'
          >
            <Link
              to={`/recipe/${meal.id}`}
              className='flex flex-col justify-start items-center gap-4 border px-2 py-6 rounded-md border-yellow-400 h-full relative'
            >
              <MealCard meal={meal} />
            </Link>

            <button
              className='absolute w-8 h-8 text-xl bottom-4 right-4 flex items-center justify-center  rounded-full shadow-md text-black bg-yellow-200'
              onClick={() => toggleFavorite({ meal })}
            >
              {favorites.some((favorite) => favorite.id === meal.id)
                ? '★'
                : '☆'}
            </button>
          </li>
        ))}
    </ul>
  )
}
