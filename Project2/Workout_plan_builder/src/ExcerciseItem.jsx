export default function ExcerciseItem({ excercise, onDelete }) {
  return (
    <div className="excercise-item">
      <div>
        <h2>Day {excercise.day}</h2>
        <h3>{excercise.name}</h3>
        <div className="stats">
          <p>Sets: {excercise.sets}</p>
          <p>Reps: {excercise.reps}</p>
          <p>Weight: {excercise.weight}</p>
        </div>
      </div>
      <button onClick={() => onDelete(excercise)}>Delete</button>
    </div>
  )
}