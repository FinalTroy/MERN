import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import Exercise from './List/Lists';

const ExercisesList: FunctionComponent<{}> = () => {
    const [exercises, setExercises] = useState<any[]>([])
    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                setExercises(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteExercise = (id: number) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        setExercises(exercises.filter(el => el._id !== id))
    }

    const exerciseList = () => {
        return exercises.map(exercise => {
            return <Exercise exercise={exercise} deleteExercise={deleteExercise} key={exercise._id} />
        })
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}

export default ExercisesList