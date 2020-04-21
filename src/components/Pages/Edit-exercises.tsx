import React, { ChangeEvent, FormEvent, FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';

interface IProps {
    match: any;
}
const EditExercise: FunctionComponent<IProps> = (props: IProps) => {

    const [description, setDescription] = useState<string>('')
    const [duration, setDuration] = useState<number>(0)
    useEffect(() => {
        console.log(props.match.params.id)
        axios.get(`http://localhost:5000/exercises/${props.match.params.id}`)
            .then(res => {
                setDescription(res.data.description)
                setDuration(res.data.duration)
            })
            .catch(err => console.log(err))
    }, [props.match.params.id])

    const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }
    const onChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
        setDuration(Number(e.target.value))
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const exercise = {
            description: description,
            duration: duration,
        }
        axios.post(`http://localhost:5000/exercises/update/${props.match.params.id}`, exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        window.location.href = '/'
    }

    return (
        <div>
            <h3>Edit Exercise Log</h3>
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
                        value="Edit Exercise Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}

export default EditExercise;