import { useState } from 'react'

export default function ExcerciseItem({ excercise, onDelete }) {
  const [detailsVisible, setDetailsVisible] = useState(false)

  return (
    <article className="excercise-item">
      <div>
        <h2>Day {excercise.day}</h2>
        <h3>{excercise.name}</h3>
        {detailsVisible && (
          <div className="stats">
            <p>Sets: {excercise.sets}</p>
            <p>Reps: {excercise.reps}</p>
            <p>Weight: {excercise.weight}</p>
          </div>
        )}
      </div>
      <div className="excercise-actions">
        <button
          type="button"
          className="details-toggle"
          aria-expanded={detailsVisible}
          onClick={() => setDetailsVisible((visible) => !visible)}
        >
          {detailsVisible ? 'Hide details' : 'Show details'}
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(excercise)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}