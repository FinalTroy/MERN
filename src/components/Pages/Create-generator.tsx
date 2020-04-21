import React, { FunctionComponent } from "react"
import moment from "moment"

interface IProps {
    trainerList: any[];
    exercises: any[];
}
const Generator: FunctionComponent<IProps> = (props: IProps) => {
    moment.updateLocale('cs', {
        weekdays: [
            "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"
        ]
    });
    const getDaysArrayByMonth = (i: number) => {
        const arrDays = [];
        const addDaysName = [];
    arrDays.push(<td>{i + 1}.{moment().month()}</td>);
        addDaysName.push(<td>{moment().dates(i + 1).format('dddd')}</td>)
        return { arrDays, addDaysName };
    }
    const renderRow = () => {
        const list = []
        for (let i = 0; i < moment().daysInMonth(); i++) {
            const sloup = <tr>
                <td className="col-md-auto">{getDaysArrayByMonth(i).arrDays}</td>
                <td className="col-md-auto">{getDaysArrayByMonth(i).addDaysName}</td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{props.trainerList.map(trainer => {
                        return <option value={trainer._id}>{trainer.trainer}</option>
                    })}</select>
                </td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{props.trainerList.map(trainer => {
                        return <option value={trainer._id}>{trainer.trainer}</option>
                    })}</select>
                </td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{props.exercises.map(exercise => {
                        return <option value={exercise._id}>{exercise.description}</option>
                    })}</select>
                </td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{props.exercises.map(exercise => {
                        return <option value={exercise._id}>{exercise.description}</option>
                    })}</select>
                </td>
            </tr>
            list.push(sloup)
        }
        return list
    }
    const printForm = () => {
        window.print()
    }
    return (
        <div className="form-group">
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Datum</th>
                        <th>Den</th>
                        <th>Ranni</th>
                        <th>Odpoledni</th>
                        <th>Dopoledne</th>
                        <th>Odpoledne</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRow()}
                </tbody>
            </table>
            <button onClick={printForm}>TISK</button>
        </div>
    )
}

export default Generator