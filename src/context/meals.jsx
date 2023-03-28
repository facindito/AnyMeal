import { createContext, useContext, useState } from 'react'

export const MealsContext = createContext()

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState()
  const [favorites, setFavorites] = useState([])

  function toggleFavorite({ meal }) {
    if (favorites.some((favorite) => favorite.id === meal.id)) {
      setFavorites((favorites) =>
        favorites.filter((favorite) => favorite.id !== meal.id)
      )
    } else {
      setFavorites((favorites) => [...favorites, meal])
    }
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
