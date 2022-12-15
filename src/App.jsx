import { useCallback, useState } from 'react'
import Header from './components/Header'
import ListOfMeals from './components/ListOfMeals'
import Meal from './components/meal'
import MealCard from './components/MealCard'
import SearchForm from './components/SearchForm'
import useMeals from './hooks/useMeals'
import useRandomMeal from './hooks/useRandomMeal'

function App() {
  const [keyword, setKeyword] = useState(null)
  const { randomMeal } = useRandomMeal()
  const { meals } = useMeals({ keyword })

  const handleSubmit = useCallback(({ search }) => {
    setKeyword(search)
  })

  return (
    <main className='min-h-screen'>
      <Header />
      {/* {randomMeal && <Meal meal={randomMeal} />} */}
      {randomMeal && <MealCard meal={randomMeal} />}
      <section className='flex flex-col gap-4 max-w-5xl mx-auto p-4'>
        <SearchForm onSubmit={handleSubmit} />
        <ListOfMeals meals={meals} />
      </section>
    </main>
  )
}

export default App
