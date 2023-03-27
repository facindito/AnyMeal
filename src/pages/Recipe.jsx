import { useParams } from 'react-router-dom'
import Meal from '../components/meal'
import useMealbById from '../hooks/useMealbById'

export default function Recipe() {
  const { id } = useParams()
  const { meal } = useMealbById({ id })
  return (
    <main className='max-w-4xl mx-auto'>
      {meal && <Meal meal={meal.meal} />}
    </main>
  )
}
