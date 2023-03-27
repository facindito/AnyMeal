export default function Hero({ handleClick }) {
  return (
    <section className='min-h-screen px-4 flex flex-col-reverse justify-center items-center gap-4 md:justify-between md:flex-row '>
      <div className='flex flex-col items-center gap-4 md:items-start'>
        <h1 className='font-bold text-3xl text-center max-w-[50ch] md:text-4xl md:text-left'>
          All your favorite meals in one place
        </h1>
        <button
          onClick={handleClick}
          className='py-2 px-4 mt-4 bg-yellow-400 rounded-full w-fit text-yellow-900 font-semibold'
        >
          See Meals <span className='animate-bounce'>↓</span>
        </button>
      </div>

      <img
        src='./img/Male-chef-cooking-in-kitchen.svg'
        alt='Chef'
        className='aspect-video object-cover overflow-hidden '
      />
    </section>
  )
}
