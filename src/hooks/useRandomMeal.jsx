import { useEffect, useState } from 'react'
import getRandomMeal from '../services/getRandomMeal'

export default function useRandomMeal() {
  const [randomMeal, setRandomMeal] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { meal } = await getRandomMeal()
      setRandomMeal(meal)
    }
    fetchData()
  }, [])

  return { randomMeal }
}
