export default async function getRandomMeal() {
  try {
    const resp = await fetch(`${import.meta.env.VITE_APP_API_URL}`)

    if (!resp.ok) {
      throw new Error('failed to connect API')
    }
    const data = await resp.json()

    return { data }
  } catch (error) {
    console.log(error)
  }
}
