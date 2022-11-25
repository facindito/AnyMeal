import { useEffect, useState } from 'react'
import getRandomMeal from '../services/getRandomMeal'

export default function useRandomMeal() {
  const [randomMeal, setRandomMeal] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getRandomMeal()
      setRandomMeal(data.meals[0])
    }
    fetchData()
  }, [])

  return { randomMeal }
}
