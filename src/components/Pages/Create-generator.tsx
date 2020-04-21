import React, { FunctionComponent } from "react"
import moment from "moment"

const Generator: FunctionComponent<{}> = () => {
    moment.updateLocale('cs', {
        weekdays: [
            "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"
        ]
    });
    const getDaysArrayByMonth = (i: number) => {
        const arrDays = [];
        const addDaysName = [];
        arrDays.push(<td>{i + 1}</td>);
        addDaysName.push(<td>{moment().dates(i + 1).format('dddd')}</td>)
        return { arrDays, addDaysName };
    }
    const renderRow = () => {
        const list = []
        for (let i = 0; i < moment().daysInMonth(); i++) {
            const sloup = <tr>
                <td className="col-md-auto">{getDaysArrayByMonth(i).arrDays}</td>
                <td className="col-md-auto">{getDaysArrayByMonth(i).addDaysName}</td>
            </tr>
            list.push(sloup)
        }
        return list
    }
    return (
        <div className="form-group">
            <tbody>
                {renderRow()}
            </tbody>
        </div>
    )
}

export default Generator