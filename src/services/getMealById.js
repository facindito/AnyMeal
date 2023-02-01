import getMealMapper from '../mapper/getMeal'

export default async function getMealById({ id }) {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/lookup.php?i=${id}`
    )
    if (!resp.ok) {
      throw new Error('failed to connect API')
    }
    const data = await resp.json()
    const [meal] = data.meals && getMealMapper({ data })
    return { meal }
  } catch (error) {
    throw new Error(error.message)
  }
}
