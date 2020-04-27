// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import ColorShower from '../Custom/ColorShower';
import { IColor } from '../Create-trainer';

interface IProps {
    trainer: {
        trainer: string;
        color: IColor;
        _id: string
    }
    deleteTrainer(id: string): void
}
const TrainerList = (props: IProps) => {
    return (
        <div className="row justify-content-center container-sm trainer-list">
            <div className="col-md-auto">{props.trainer.trainer}</div>
            <ColorShower color={props.trainer.color} />
            <div className="col-md-auto">
                <Link to="#top" onClick={() => { props.deleteTrainer(props.trainer._id) }}>delete</Link>
            </div>
        </div>)
}
export default TrainerList;