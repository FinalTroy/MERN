import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import axios from 'axios';

const CreateTrainer: FunctionComponent<{}> = () => {

    const [trainer, setTrainer] = useState<string>('')
    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setTrainer(e.target.value)
    }
    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', trainer)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setTrainer('')
    }

    return (
        <div>
            <h3>Create New Trainer</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={trainer}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Trainer" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )

}
export default CreateTrainer