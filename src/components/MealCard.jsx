export default function MealCard({ meal }) {
  return (
    <article className='flex flex-col gap-4 max-w-5xl mx-auto border-2 border-yellow-400 rounded-md hover:scale-105 transition transform ease-in-out'>
      <div className='flex flex-row justify-start items-center gap-4 p-4 rounded-md'>
        <picture className='h-40 rounded-md overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={meal.img}
            alt={meal.name}
          />
        </picture>
        <div className='flex flex-col gap-4 max-w-xs'>
          <h2 className='text-lg font-bold px-4 text-yellow-400'>
            {meal.name}
          </h2>
          <ul className='flex'>
            <label
              htmlFor='area'
              className='category border-r border-yellow-200 px-4 text-xs cursor-pointer'
            >
              Area
              <li className='area font-bold text-base'>{meal.area}</li>
            </label>
            <label
              htmlFor='category'
              className='category px-4 text-xs cursor-pointer'
            >
              Category
              <li className='category font-bold text-base'>{meal.category}</li>
            </label>
          </ul>
        </div>
      </div>
    </article>
  )
}
