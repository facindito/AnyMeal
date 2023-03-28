import { useContext, useEffect } from 'react'
import { MealsContext } from '../context/meals'
import getFilterMeal from '../services/getFilterMeal'

export default function useFilters({ filter }) {
  const { meals, setMeals } = useContext(MealsContext)

  useEffect(() => {
    if (!filter) return

    if (filter['category']) {
      getFilterMeal({ tag: 'c', value: filter.category }).then((meals) =>
        setMeals(meals)
      )
    }
  }, [filter])

  return { filterMeals: meals }
}
