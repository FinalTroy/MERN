// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    trainer:{
        trainer: string;
        _id: string
    }
    deleteExercise(id: string): void
}
const TrainerList = (props: IProps) =>{
    return(
    <tr>
        <td className="col-1">{props.trainer.trainer}</td>
        <td className="col-1">
            <Link to="#top" onClick={() => { props.deleteExercise(props.trainer._id) }}>delete</Link>
        </td>
    </tr>)
}
export default TrainerList;