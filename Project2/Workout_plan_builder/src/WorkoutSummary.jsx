export default function WorkoutSummary({ excercises = [] }) {
  const totalExercises = excercises.length
  const totalSets = excercises.reduce((sum, exercise) => sum + (Number(exercise.sets) || 0), 0)
  const totalReps = excercises.reduce((sum, exercise) => sum + (Number(exercise.reps) || 0), 0)
  const totalWeight = excercises.reduce((sum, exercise) => sum + (Number(exercise.weight) || 0), 0)
  const activeDays = new Set(excercises.map((exercise) => Number(exercise.day) || 1)).size

  return (
    <section className="workout-summary">
      <h2>Workout Summary</h2>

      <div className="summary-grid">
        <div className="summary-card">
          <span>Total Workouts</span>
          <strong>{totalExercises}</strong>
        </div>

        <div className="summary-card">
          <span>Total Sets</span>
          <strong>{totalSets}</strong>
        </div>

        <div className="summary-card">
          <span>Total Reps</span>
          <strong>{totalReps}</strong>
        </div>

        <div className="summary-card">
          <span>Weight Lifted</span>
          <strong>{totalWeight} lb</strong>
        </div>

        <div className="summary-card summary-card-wide">
          <span>Training Days</span>
          <strong>{activeDays}</strong>
        </div>
      </div>
    </section>
  )
}
