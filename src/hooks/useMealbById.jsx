import { useState } from 'react'
import { useEffect } from 'react'
import getMealById from '../services/getMealById'

export default function useMealbById({ id }) {
  const [meal, setMeal] = useState()

  useEffect(() => {
    getMealById({ id }).then((newMeal) => setMeal(newMeal))
  }, [id])

  return { meal }
}
