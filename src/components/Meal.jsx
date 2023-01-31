export default function Meal({ meal }) {
  const imgClass = `flex justify-center items-center bg--[url(${meal.img})]`
  return (
    <article className='flex flex-col gap-8 p-4 bg-white rounded-md'>
      <h1 className='text-3xl font-bold text-center md:text-5xl font-lifesavers'>
        {meal.name}
      </h1>
      <section className={imgClass}>
        <picture className='max-w-xs rounded-md overflow-hidden'>
          <img
            className='object-cover w-full aspect-square'
            src={meal.img}
            alt={meal.name}
          />
        </picture>
      </section>
      <section>
        <h2 className='mb-4 text-xl font-bold'>Ingredients</h2>
        <ul className='max-w-prose md:columns-2 accent-yellow-600'>
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
      <section>
        <h2 className='mb-4 text-xl font-bold'>Instructions</h2>
        <p className='whitespace-pre-wrap max-w-prose'>{meal.instructions}</p>
      </section>
    </article>
  )
}
