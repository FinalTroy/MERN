import React, { ChangeEvent, FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import TrainerList from './Lists/TrainerList';

interface IProps {
}
const CreateTrainer: FunctionComponent<IProps> = (props: IProps) => {
    
    const [trainer, setTrainer] = useState<string>('')
    const [trainerList, setTrainerList] = useState<any[]>([])

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
          .then(res => {
            setTrainerList(res.data)
          })
          .catch(err => console.log(err))
      },[trainer])

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setTrainer(e.target.value)
    }
    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', { trainer: trainer })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setTrainer('')
    }
    
  const deleteTrainer = (id: string) => {
    axios.delete(`http://localhost:5000/users/${id}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    setTrainerList(trainerList.filter(tl => tl._id !== id))
}
    return (
        <div>
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
            <div style={{ textAlign: 'center' }}>
                <h3>List of trainers</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Trainer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainerList.map(trainer =>  <TrainerList trainer={trainer} deleteTrainer={deleteTrainer} key={trainer._id} />)}
                    </tbody>
                </table>
            </div>
        </div>

    )

}
export default CreateTrainer