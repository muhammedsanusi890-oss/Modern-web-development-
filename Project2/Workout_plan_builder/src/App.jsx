import { useState } from 'react'
import './App.css'
import ExcerciseForm from './ExcerciseForm'
import ExcerciseList from './ExcerciseList'
import WorkoutSummary from './WorkoutSummary'

function App() {
  const [excercises, setExcercises] = useState([])

  function handleAddExcercise(newExcercise) {
    setExcercises([...excercises, newExcercise])
  }

  function handleDeleteExcercise(excerciseToDelete) {
    setExcercises(excercises.filter((excercise) => excercise.day !== excerciseToDelete.day))
  }

  return (
    <main className="App">
      <ExcerciseForm onAddExcercise={handleAddExcercise} />
      <WorkoutSummary excercises={excercises} />
      <ExcerciseList excercises={excercises} onDelete={handleDeleteExcercise} />
    </main>
  )
}

export default App
