import { useCallback, useState } from 'react'
import Hero from '../components/Hero'
import ListOfMeals from '../components/ListOfMeals'
import Meal from '../components/meal'
import SearchForm from '../components/SearchForm'
import useMeals from '../hooks/useMeals'
import useRandomMeal from '../hooks/useRandomMeal'

export default function Home() {
  const [keyword, setKeyword] = useState(null)
  const { randomMeal } = useRandomMeal()
  const { meals } = useMeals({ keyword })

  const handleSubmit = useCallback(({ search }) => {
    setKeyword(search)
  })

  return (
    <>
      <section className='bg-yellow-200 rounded-b-3xl mb-8'>
        <Hero />
      </section>
      <div className='bg-yellow-100'>
        <section className='flex gap-4 max-w-5xl mx-auto'>
          <aside className='p-4 hidden md:flex'>
            <h2 className='font-lifesavers font-bold text-2xl'>Recipes</h2>
          </aside>
          <section className='flex flex-col flex-1 gap-4 p-4 overflow-hidden'>
            <header className='flex flex-col md:flex-row gap-4 justify-between items-start md:items-center'>
              <SearchForm onSubmit={handleSubmit} className='' />
              <button className='px-4 py-2 bg-white rounded-full'>
                Sort by:
              </button>
            </header>
            <ListOfMeals meals={meals} />
            {randomMeal && !meals && <Meal meal={randomMeal} />}
          </section>
        </section>
      </div>
    </>
  )
}
