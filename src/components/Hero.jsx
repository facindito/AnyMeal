export default function Hero() {
  return (
    <section className='flex flex-col md:justify-center items-center gap-4 bg-inherit max-w-5xl mx-auto p-4 md:flex-row sm:min-h-screen'>
      <h1 className='font-lifesavers font-extrabold text-3xl text-center max-w-[75ch] md:text-5xl md:text-left'>
        {'All your\nfavorite meals\nin one place'}
      </h1>
      <img
        src='./img/Male-chef-cooking-in-kitchen.svg'
        alt='Chef'
        className='aspect-video object-cover overflow-hidden '
      />
    </section>
  )
}
