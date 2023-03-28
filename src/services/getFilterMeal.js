import getMealMapper from '../mapper/getMeal'

export default async function getFilterMeal({ tag, value }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/filter.php?${tag}=${value}`
    )
    if (!response.ok) {
      throw new Error('failed to connect API')
    }
    const data = await response.json()
    return data.meals.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      img: meal.strMealThumb,
    }))
  } catch (error) {
    throw new Error(error.message)
  }
}
