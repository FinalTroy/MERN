// import { Link } from 'react-router-dom';
import React from 'react';

interface IProps {
        trainer: string;
        key: number;
    
    // deleteExercise(props: number): void
}
const TrainerList = (props: IProps) =>
    <tr>
        <td>{props.trainer}</td>
        {/* <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <Link to="#top" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</Link>
        </td> */}
    </tr>

export default TrainerList;