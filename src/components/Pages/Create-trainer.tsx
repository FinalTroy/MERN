import React, { ChangeEvent, FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import TrainerList from './Lists/TrainerList';
import ColorPicker from './Custom/ColorPicker';

interface IProps {
}
export interface IColor {
    first: string;
    second: string;
    third: string
}
const CreateTrainer: FunctionComponent<IProps> = (props: IProps) => {

    const [trainer, setTrainer] = useState<string>('')
    const [trainerList, setTrainerList] = useState<any[]>([])
    const [color, setColor] = useState<IColor>({ first: '1', second: '1', third: '1' })

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(res => {
                setTrainerList(res.data)
            })
            .catch(err => console.log(err))
    }, [trainer])

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setTrainer(e.target.value)
    }
    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', { trainer: trainer, color: color })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setTrainer('')
        setColor({ first: '0', second: '0', third: '0'})
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
                <form className="form-group formTrainer" onSubmit={onSubmit}>
                    <div className="justify-content-center">
                        <div className="row justify-content-center">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control col-md-4 userName"
                            value={trainer}
                            onChange={onChangeUsername}
                        />
                        </div>
                        <ColorPicker color={color} setColor={setColor} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Trainer" className="btn btn-dark float-right" />
                    </div>
                </form>
            </div>
            <div className="row justify-content-center">
                <h3>List of trainers</h3>
                {trainerList.map(trainer => <TrainerList trainer={trainer} deleteTrainer={deleteTrainer} key={trainer._id} />)}
            </div>
        </div>
    )

}
export default CreateTrainer