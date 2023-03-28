export default function MealCard({ meal }) {
  return (
    <article className='flex flex-col justify-start items-center gap-4 border-2 p-2 rounded-md border-yellow-400 hover:scale-105 transition-transform ease-in-out'>
      <h2 className='text-lg font-bold text-yellow-400'>{meal.name}</h2>
      <picture className='h-40 rounded-md overflow-hidden'>
        <img
          className='object-cover w-full h-full'
          src={meal.img}
          alt={meal.name}
        />
      </picture>
      {meal.area && meal.category && (
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
      )}
    </article>
  )
}
