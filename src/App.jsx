import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
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
      <section className='bg-yellow-400'>
        <Hero />
      </section>
      <div className='bg-yellow-100'>
        <section className='flex gap-4 max-w-5xl mx-auto p-4'>
          <aside className='p-4'>
            <h2 className='font-lifesavers font-bold text-2xl'>Recipes</h2>
          </aside>
          <section className='flex flex-col flex-1 gap-4 p-4'>
            <header className='flex gap-4 justify-between items-center'>
              <SearchForm onSubmit={handleSubmit} className='' />
              <button className='px-4 py-2 bg-white rounded-full'>
                Sort by:
              </button>
            </header>
            <ListOfMeals meals={meals} />
            {randomMeal && !meals && <MealCard meal={randomMeal} />}
          </section>
        </section>
      </div>
    </main>
  )
}

export default App
