import { Link } from 'react-router-dom'
import MealCard from './MealCard'

export default function ListOfMeals({ meals }) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start'>
      {meals &&
        meals.map((meal) => (
          <li key={meal.id} className='h-full'>
            <Link
              to={`/recipe/${meal.id}`}
              className='flex flex-col justify-start items-center gap-4 border p-2 rounded-md border-yellow-400 hover:scale-105 transition-transform ease-in-out h-full '
            >
              <MealCard meal={meal} />
            </Link>
          </li>
        ))}
    </ul>
  )
}
