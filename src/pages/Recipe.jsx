import { useParams } from 'react-router-dom'

export default function Recipe() {
  const { id } = useParams()
  return (
    <main className='grid place-content-center min-h-screen'>
      <h1 className='font-lifesavers font-extrabold text-2xl'>Recipe:{id}</h1>
    </main>
  )
}
