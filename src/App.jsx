import { useEffect, useState } from 'react'

function App() {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`${import.meta.env.VITE_APP_API_URL}`)

        if (!resp.ok) {
          throw new Error('failed to connect API')
        }
        const data = await resp.json()
        setMeals(data.meals[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='min-h-screen grid place-content-center'>
      <h1 className='text-5xl font-bold mb-4 text-center'>Any Meal</h1>
      <article className='flex gap-4'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='text-2xl'>{meals.strMeal}</h2>
          <div className='w-60'>
            <img src={meals.strMealThumb} alt='' />
          </div>
        </div>
        <div>
          {Array.from({ length: 20 }, (_, i) => {
            let Ingredient = `strIngredient${i + 1}`
            let Measure = `strMeasure${i + 1}`
            if (meals[Ingredient]) {
              return (
                <div className='flex gap-4'>
                  <span className='font-bold capitalize'>
                    {meals[Ingredient]}
                  </span>
                  <span className='ml-auto'>{meals[Measure]}</span>
                </div>
              )
            }
          })}
        </div>
      </article>
    </div>
  )
}

export default App
