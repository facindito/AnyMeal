export default function Meal({ meal }) {
  return (
    <article className='flex flex-col gap-4 max-w-5xl mx-auto p-4 bg-white rounded-md'>
      <h1 className='text-3xl font-bold text-center md:text-5xl font-lifesavers'>
        {meal.name}
      </h1>
      <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
        <section className='h-80 rounded-md overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={meal.img}
            alt={meal.name}
          />
        </section>
        <section className='mr-auto md:mb-auto'>
          <h2 className='mb-4 text-xl font-bold'>Ingredients</h2>
          <ul className='md:columns-2 accent-yellow-600'>
            {Array.from({ length: meal.cantIngredients }, (_, i) => {
              return (
                <li key={i} className='flex gap-2'>
                  <input
                    type='checkbox'
                    id={`${meal.ingredients[i]}`}
                    className='peer/check w-4'
                  />
                  <label
                    htmlFor={`${meal.ingredients[i]}`}
                    className='peer-checked/check:line-through decoration-yellow-600'
                  >
                    {meal.measure && (
                      <span className='font-bold'>{`${meal.measure[i]} `}</span>
                    )}
                    <span className='capitalize'>{meal.ingredients[i]}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
      <section className='p-4'>
        <h2 className='mb-4 text-xl font-bold'>Instructions</h2>
        <p className='whitespace-pre-wrap'>{meal.instructions}</p>
      </section>
    </article>
  )
}
