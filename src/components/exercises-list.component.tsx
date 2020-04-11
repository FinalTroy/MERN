import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface IPropsExercise {
    exercise: {
        description: string;
        duration: number;
        _id: number;
    }
    deleteExercise(exercise :number): void
}
const Exercise = (props: IPropsExercise) => (
    <tr>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#top" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  )
interface IState {
    exercises: any[]
}
export default class ExercisesList extends Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props)

        this.deleteExercise = this.deleteExercise.bind(this);
        this.exerciseList = this.exerciseList.bind(this);

        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteExercise(id: number) {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(exercise => {
            return <Exercise exercise={exercise} deleteExercise={this.deleteExercise} key={exercise._id} />
        })
    }

    render() {
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
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}