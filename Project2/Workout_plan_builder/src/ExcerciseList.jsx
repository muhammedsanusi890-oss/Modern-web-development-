
import ExcerciseItem from './ExcerciseItem'


export default function ExcerciseList({ excercises, onDelete }) {
    return (
        <div className="excercise-list">
            <h1>Excercise List</h1>
            {excercises.map((excercise) => (
                <ExcerciseItem key={excercise.id} excercise={excercise} onDelete={onDelete} />
            ))}
        </div>

    )
}
