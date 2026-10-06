import { useState } from 'react'

export default function ExcerciseForm({ onAddExcercise }) {
  const [excercise, setExcercise] = useState({
    day: 1,
    name: '',
    sets: '',
    reps: '',
    weight: ''
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (!excercise.name.trim()) {
      return
    }

    const sets = excercise.sets === '' ? 0 : Number(excercise.sets)
    const reps = excercise.reps === '' ? 0 : Number(excercise.reps)
    const weight = excercise.weight === '' ? 0 : Number(excercise.weight)

    if (Number.isNaN(sets) || Number.isNaN(reps) || Number.isNaN(weight)) {
      return
    }

    const newExcercise = {
      ...excercise,
      day: excercise.day,
      sets,
      reps,
      weight
    }

    if (onAddExcercise) {
      onAddExcercise(newExcercise)
    }

    setExcercise({
      day: excercise.day + 1,
      name: '',
      sets: '',
      reps: '',
      weight: ''
    })
  }

  return (
    <div>
      <h1>Excercise Form</h1>
      <div className="excercise-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="excercise-input"
            placeholder="Workout Name"
            value={excercise.name}
            onChange={(e) => setExcercise({ ...excercise, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Number of Sets"
            className="excercise-input"
            value={excercise.sets}
            onChange={(e) => setExcercise({ ...excercise, sets: e.target.value })}
          />

          <input
            type="number"
            placeholder="Reps"
            className="excercise-input"
            value={excercise.reps}
            onChange={(e) => setExcercise({ ...excercise, reps: e.target.value })}
          />

          <input
            type="number"
            placeholder="Weight"
            className="excercise-input"
            value={excercise.weight}
            onChange={(e) => setExcercise({ ...excercise, weight: e.target.value })}
          />

          <button type="submit">Add Excercise</button>
        </form>
      </div>
    </div>
  )
}