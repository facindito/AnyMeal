export default function MealCard({ meal }) {
  return (
    <article className='flex flex-col gap-4 max-w-5xl mx-auto'>
      <div className='flex flex-col justify-center items-center gap-4 md:flex-row bg-white p-4 rounded-md'>
        <picture className='h-40 rounded-md overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={meal.img}
            alt={meal.name}
          />
        </picture>
        <div className='flex flex-col gap-4 max-w-xs'>
          <h1 className='text-sm font-bold px-4'>{meal.name}</h1>
          <ul className='flex'>
            <label
              htmlFor='area'
              className='category border-r border-green-600 px-4 text-xs'
            >
              Area
              <li className='area font-bold text-base'>{meal.area}</li>
            </label>
            <label htmlFor='category' className='category px-4 text-xs'>
              Category
              <li className='category font-bold text-base'>{meal.category}</li>
            </label>
          </ul>
        </div>
      </div>
    </article>
  )
}
