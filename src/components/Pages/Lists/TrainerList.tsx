// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    trainer: {
        trainer: string;
        _id: string
    }
    deleteTrainer(id: string): void
}
const TrainerList = (props: IProps) => {
    return (
        <tr className="row justify-content-center">
            <td className="col-md-auto">{props.trainer.trainer}</td>
            <td className="col-md-auto">
                <Link to="#top" onClick={() => { props.deleteTrainer(props.trainer._id) }}>delete</Link>
            </td>
        </tr>)
}
export default TrainerList;