// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    trainer: {
        trainer: string;
        _id: string
    }
    deleteExercise(id: string): void
}
const TrainerList = (props: IProps) => {
    return (
        <tr className="row justify-content-center">
            <td className="col-md-auto">{props.trainer.trainer}</td>
            <td className="col-md-auto">
                <Link to="#top" onClick={() => { props.deleteExercise(props.trainer._id) }}>delete</Link>
            </td>
        </tr>)
}
export default TrainerList;