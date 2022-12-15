export default function ListOfMeals({ meals }) {
  return (
    <ul>{meals && meals.map((meal) => <li key={meal.id}>{meal.name}</li>)}</ul>
  )
}
