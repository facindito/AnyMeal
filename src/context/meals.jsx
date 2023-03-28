import { createContext, useState } from 'react'

export const MealsContext = createContext()

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState()

  return (
    <MealsContext.Provider value={{ meals, setMeals }}>
      {children}
    </MealsContext.Provider>
  )
}
