import MealCard from './MealCard'

export default function ListOfMeals({ meals }) {
  return (
    <ul className='grid grid-cols-list gap-4 items-start'>
      {meals &&
        meals.map((meal) => (
          <li key={meal.id} className=''>
            <MealCard meal={meal} />
          </li>
        ))}
    </ul>
  )
}
