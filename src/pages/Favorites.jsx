import ListOfMeals from '../components/ListOfMeals'
import { useFavorite } from '../context/meals'

export default function Favorites() {
  const { favorites } = useFavorite()
  return (
    <main className='grid place-content-center min-h-screen mt-4'>
      <h1 className='font-lifesavers font-extrabold text-2xl'>Favorites</h1>
      {favorites && <ListOfMeals meals={favorites} />}
    </main>
  )
}
