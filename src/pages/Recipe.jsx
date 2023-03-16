import { useParams } from 'react-router-dom'
import Meal from '../components/meal'
import useMealbById from '../hooks/useMealbById'

export default function Recipe() {
  const { id } = useParams()
  const { meal } = useMealbById({ id })
  return (
    <main className='min-h-screen  p-4 w-full'>
      {meal && <Meal meal={meal.meal} />}
    </main>
  )
}
