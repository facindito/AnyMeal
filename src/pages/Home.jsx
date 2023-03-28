import { useCallback, useRef, useState } from 'react'
import Filters from '../components/Filters'
import Hero from '../components/Hero'
import ListOfMeals from '../components/ListOfMeals'
import Meal from '../components/meal'
import SearchForm from '../components/SearchForm'
import useFilters from '../hooks/useFilters'
import useMeals from '../hooks/useMeals'
import useRandomMeal from '../hooks/useRandomMeal'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState(null)
  const searchSection = useRef()
  const { meals } = useMeals({ keyword })
  const { filterMeals } = useFilters({ filter })
  const { randomMeal } = useRandomMeal()

  const handleSubmit = useCallback(({ search }) => {
    setKeyword(search)
  })
  const scrollToSearch = () => searchSection.current.scrollIntoView()

  console.log({ filterMeals, meals })
  return (
    <div className='max-w-4xl mx-auto'>
      <Hero handleClick={scrollToSearch} />
      <section
        ref={searchSection}
        className='flex flex-col flex-1 gap-4 px-4 overflow-hidden'
      >
        <header className='flex flex-col gap-4 mb-4'>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-start md:items-center'>
            <SearchForm onSubmit={handleSubmit} />
            <button className='px-4 py-2 bg-yellow-300 rounded-full text-yellow-900 font-semibold'>
              Filters
            </button>
          </div>
          <Filters setFilter={setFilter} />
        </header>

        {(meals || filterMeals) && <ListOfMeals meals={meals} />}
        {/* {randomMeal && !meals && <Meal meal={randomMeal} />} */}
      </section>
    </div>
  )
}
