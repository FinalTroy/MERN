import React, { FunctionComponent, useState, useEffect } from "react"
import axios from 'axios';
import moment from "moment"
import DayRows from "./Custom/DayRows";

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
    }, [])
    moment.updateLocale('cs', {
        weekdays: [
            "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"
        ]
    });
    const renderRow = () => {
        const list = []
        for (let i = 0; i < moment().daysInMonth(); i++) {
            list.push(<DayRows index={i} trainerList={trainerList} exercises={props.exercises} key={i} />)
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
                    {!!trainerList && renderRow()}
                </tbody>
            </table>
            <button className="btn btn-primary btn-lg float-right" onClick={() => window.print()}>TISK</button>
        </div>
    )
}

export default Generator