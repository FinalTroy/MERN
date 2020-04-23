// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import ColorShower from '../Custom/ColorShower';
import { IColor } from '../Create-trainer';

interface IProps {
    trainer: {
        trainer: string;
        _id: string
    }
    color: IColor;
    deleteTrainer(id: string): void
}
const TrainerList = (props: IProps) => {
    return (
        <tr className="row justify-content-center">
            <td className="col-md-auto">{props.trainer.trainer}</td>
            <ColorShower color={props.color} />
            <td className="col-md-auto">
                <Link to="#top" onClick={() => { props.deleteTrainer(props.trainer._id) }}>delete</Link>
            </td>
        </tr>)
}
export default TrainerList;