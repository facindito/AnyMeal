import { useCallback, useState } from 'react'
import Hero from '../components/Hero'
import ListOfMeals from '../components/ListOfMeals'
import Meal from '../components/meal'
import SearchForm from '../components/SearchForm'
import useMeals from '../hooks/useMeals'
import useRandomMeal from '../hooks/useRandomMeal'

export default function Home() {
  const [keyword, setKeyword] = useState()
  const { randomMeal } = useRandomMeal()
  const { meals } = useMeals({ keyword })

  const handleSubmit = useCallback(({ search }) => {
    setKeyword(search)
  })

  return (
    <main className='max-w-4xl mx-auto'>
      <Hero />
      <section
        id='list'
        className='flex flex-col flex-1 gap-4 px-4 overflow-hidden'
      >
        <header className='flex flex-col md:flex-row gap-4 justify-between items-start md:items-center'>
          <SearchForm onSubmit={handleSubmit} />
          <button className='px-4 py-2 bg-yellow-300 rounded-full text-yellow-900 font-semibold'>
            Filters
          </button>
        </header>
        <ListOfMeals meals={meals} />
        {randomMeal && !meals && <Meal meal={randomMeal} />}
      </section>
    </main>
  )
}
