export default function getMealMapper({ data }) {
  //  if (data.meals === null) return
  return data.meals.map((meal) => {
    const ingredients = Object.entries(meal)
      .filter(([key, value]) => key.startsWith('strIngredient') && value)
      .map(([, value]) => value)

    const measure = Object.entries(meal)
      .filter(
        ([key, value]) => key.startsWith('strMeasure') && value && value !== ' '
      )
      .map(([, value]) => value)

    const tags = meal.strTags?.split(',')
    const cantIngredients = ingredients.length
    return {
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      area: meal.strArea,
      instructions: meal.strInstructions,
      img: meal.strMealThumb,
      tags,
      video: meal.strYoutube,
      ingredients,
      cantIngredients,
      measure,
    }
  })
}
