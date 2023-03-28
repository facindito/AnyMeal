import { useContext, useEffect } from 'react'
import { MealsContext } from '../context/meals'
import getMeals from '../services/getMeals'

export default function useMeals({ keyword }) {
  const { meals, setMeals } = useContext(MealsContext)

  useEffect(() => {
    if (!keyword) return
    const fetchData = async () => {
      const { meals } = await getMeals({ keyword })
      setMeals(meals)
    }
    fetchData()
  }, [keyword])

  return { meals }
}
