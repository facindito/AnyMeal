import useRandomMeal from './hooks/useRandomMeal'

function App() {
  const { randomMeal } = useRandomMeal()

  return (
    <main className='min-h-screen'>
      <header className='sticky w-full p-4 top-0 bg-white shadow-sm'>
        <div className='max-w-5xl mx-auto flex justify-center items-center'>
          <h1 className='text-2xl font-bold flex-1'>Any Meal</h1>
          <nav className='flex gap-2'>
            <a href='!#'>Favorites</a>
            <a href='!#'>Login</a>
            <a href='!#'>Register</a>
          </nav>
        </div>
      </header>
      <article className='flex flex-col gap-4 max-w-5xl mx-auto p-4'>
        <h1 className='text-2xl font-bold text-center'>{randomMeal.strMeal}</h1>
        <div className='flex flex-col justify-center items-center gap-4 md:flex-row '>
          <div className='h-80 rounded-md overflow-hidden'>
            <img
              className='object-cover w-full h-full'
              src={randomMeal.strMealThumb}
              alt=''
            />
          </div>
          <div className='mr-auto md:mb-auto'>
            <h2 className='mb-4 text-xl font-bold'>Ingredients</h2>
            <ul className='md:columns-2 '>
              {Array.from({ length: 20 }, (_, i) => {
                let Ingredient = `strIngredient${i + 1}`
                let Measure = `strMeasure${i + 1}`
                if (randomMeal[Ingredient]) {
                  return (
                    <li key={i} className='flex gap-2'>
                      <input
                        type='checkbox'
                        id={`ingredient-${i + 1}`}
                        className='peer/check w-4'
                      />
                      <label
                        htmlFor={`ingredient-${i + 1}`}
                        className='peer-checked/check:line-through'
                      >
                        <span className='font-bold'>{`${randomMeal[Measure]} `}</span>
                        <span className='capitalize'>
                          {randomMeal[Ingredient]}
                        </span>
                      </label>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </article>
    </main>
  )
}

export default App
