import React, { SyntheticEvent, ChangeEvent, FunctionComponent, useState } from 'react';
import axios from 'axios';

const CreateExercise: FunctionComponent<{}> = () => {

    const [description, setDescription] = useState<string>('')
    const [duration, setDuration] = useState<number>(0)

    const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }
    const onChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
        setDuration(Number(e.target.value))
    }

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        const exercise = {
            description: description,
            duration: duration,
        }
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        window.location.href = '/'
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={onChangeDuration}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Exercise Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )

}

export default CreateExercise;