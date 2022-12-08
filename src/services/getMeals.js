import getMealMapper from '../mapper/getMeal'

export default async function getMeals({ keyword }) {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/search.php?s=${keyword}`
    )
    if (!resp.ok) {
      throw new Error('failed to connect API')
    }
    const data = await resp.json()
    const meals = data.meals && getMealMapper({ data })
    return { meals }
  } catch (error) {
    console.error(error)
  }
}
