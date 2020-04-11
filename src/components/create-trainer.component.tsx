import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import axios from 'axios';

interface IProps {
    username: string
}
const CreateTrainer:FunctionComponent<IProps> = (props: IProps) => {    

    const [trainer, setTrainer] = useState<string>('')
    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        // this.setState({
        //     username: e.target.value
        // })
        setTrainer(e.target.value)
    }
    console.log(trainer)
    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const user = {
        //     username: this.state.username,
        // }

        axios.post('http://localhost:5000/users/add', trainer)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        // this.setState({
        //     username: ''
        // })
        setTrainer('')
    }

    
        return(<div>
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
            </div>)
    
}
export default CreateTrainer