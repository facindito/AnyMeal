import { Link } from 'react-router-dom'
import MealCard from './MealCard'

export default function ListOfMeals({ meals }) {
  return (
    <ul className='grid grid-cols-list gap-4 items-start'>
      {meals &&
        meals.map((meal) => (
          <li key={meal.id} className=''>
            <Link to={`/recipe/${meal.id}`}>
              <MealCard meal={meal} />
            </Link>
          </li>
        ))}
    </ul>
  )
}
