import React, { FunctionComponent, useState, useEffect } from "react"
import axios from 'axios';
import moment from "moment"

interface IProps {
    exercises: any[];
}
const Generator: FunctionComponent<IProps> = (props: IProps) => {

    const [trainerList, setTrainerList] = useState<any[]>([])  
    useEffect(() => {
        axios.get('http://localhost:5000/users/')
          .then(res => {
            setTrainerList(res.data)
          })
          .catch(err => console.log(err))
      },[])
    moment.updateLocale('cs', {
        weekdays: [
            "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"
        ]
    });
    
    const renderRow = () => {
        const list = []
        for (let i = 0; i < moment().daysInMonth(); i++) {
            list.push( <tr key={i.toString()}>
                <td className="col-md-auto">{i + 1}.{moment().month()}</td>
                <td className="col-md-auto">{moment().date(i + 1).format('dddd')}</td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{trainerList.map(trainer => {
                        return <option value={trainer._id} key={trainer._id}>{trainer.trainer}</option>
                    })}</select>
                </td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{trainerList.map(trainer => {
                        return <option value={trainer._id} key={trainer._id}>{trainer.trainer}</option>
                    })}</select>
                </td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{props.exercises.map(exercise => {
                        return <option value={exercise._id} key={exercise._id}>{exercise.description}</option>
                    })}</select>
                </td>
                <td className="col-md-auto">
                    <select className="col-md-auto form-control">{props.exercises.map(exercise => {
                        return <option value={exercise._id} key={exercise._id}>{exercise.description}</option>
                    })}</select>
                </td>
            </tr>)
        }
        return list
    }
        return (
        <div className="form-group">
            <h3 className="text-center">Rozpis sluzeb</h3>
            <table className="table">
                <thead className="thead-dark">
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
            <button className="btn btn-primary btn-lg float-right" onClick={() => window.print()}>TISK</button>
        </div>
    )
}

export default Generator