import Header from './components/Header'
import Meal from './components/meal'
import useRandomMeal from './hooks/useRandomMeal'

function App() {
  const { randomMeal } = useRandomMeal()

  return (
    <main className='min-h-screen'>
      <Header />
      {randomMeal && <Meal meal={randomMeal} />}
    </main>
  )
}

export default App
