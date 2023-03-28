import { createContext, useContext, useState } from 'react'

export const MealsContext = createContext()
const initialState = JSON.parse(window.localStorage.getItem('favorites')) || []
export function MealsProvider({ children }) {
  const [meals, setMeals] = useState()
  const [favorites, setFavorites] = useState(initialState)

  function toggleFavorite({ meal }) {
    const draft = favorites.some((favorite) => favorite.id === meal.id)
      ? favorites.filter((favorite) => favorite.id !== meal.id)
      : favorites.concat(meal)
    setFavorites(draft)
    window.localStorage.setItem('favorites', JSON.stringify(draft))
  }

  return (
    <MealsContext.Provider
      value={{ meals, setMeals, favorites, toggleFavorite }}
    >
      {children}
    </MealsContext.Provider>
  )
}

export function useFavorite() {
  const { favorites, toggleFavorite } = useContext(MealsContext)
  return { favorites, toggleFavorite }
}
