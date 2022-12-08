import { useEffect, useState } from 'react'
import getMeals from '../services/getMeals'

export default function useMeals({ keyword }) {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    if (keyword === '') return
    const fetchData = async () => {
      const { meals } = await getMeals({ keyword })
      setMeals(meals)
    }
    fetchData()
  }, [keyword])

  return { meals }
}
