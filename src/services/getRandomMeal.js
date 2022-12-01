import getMealMapper from '../mapper/getMeal'

export default async function getRandomMeal() {
  try {
    const resp = await fetch(`${import.meta.env.VITE_APP_API_URL}`)

    if (!resp.ok) {
      throw new Error('failed to connect API')
    }
    const data = await resp.json()
    const meal = getMealMapper({ data })
    return { meal }
  } catch (error) {
    console.log(error)
  }
}
