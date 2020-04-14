import { Link } from 'react-router-dom';
import React from 'react';

interface IPropsExercise {
    exercise: {
        description: string;
        duration: number;
        _id: number;
    }
    deleteExercise(exercise: number): void
}
const ExerciseList = (props: IPropsExercise) =>
    <tr>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <Link to="#top" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</Link>
        </td>
    </tr>

export default ExerciseList;