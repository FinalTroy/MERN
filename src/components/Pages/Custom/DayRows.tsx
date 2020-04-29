import React, { FC, ChangeEvent, useState, useEffect } from "react"
import moment from "moment"
import { IColor } from "../Create-trainer"

interface IProps {
    index: number;
    trainerList: any[];
    exercises: any[];
}
const ownSelect = (value:any, color: IColor, handler: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined) => {    
    return (
        <td className="col-md-auto" style={{ backgroundColor: `rgb(${color.first},${color.second},${color.third})` }}>
            <select className="col-md-auto form-control" onChange={handler} >
                {value.map((x:any) => { return <option value={x.trainer ? x.trainer : x._id} key={x._id} >{x.trainer ? x.trainer : x.description}</option> })}
            </select>
        </td>
    )
}
const DayRows: FC<IProps> = (props: IProps) => {
    const {
        index,
        trainerList,
        exercises
    } = props
    const [morningColor, setMorningColor] = useState<IColor>({ first: '52', second: '58', third: '64' })
    const [morningTrainer, setMorningTrainer] = useState<string>()
    const [afternoonColor, setAfternoonColor] = useState<IColor>({ first: '52', second: '58', third: '64' })
    const [afternoonTrainer, setAfternoonTrainer] = useState<string>()
    useEffect(() => {
        if (!morningTrainer && trainerList.length !== 0) {
            setMorningTrainer(trainerList.filter(x => x.trainer)[0].trainer)
        }
        trainerList.find(x => x.trainer === morningTrainer ? setMorningColor(x.color) : null)
    }, [morningTrainer, trainerList])

    useEffect(() => {
        if (!afternoonTrainer && trainerList.length !== 0) {
            setAfternoonTrainer(trainerList.filter(x => x.trainer)[0].trainer)
        }
        trainerList.find(x => x.trainer === afternoonTrainer ? setAfternoonColor(x.color) : null)
    }, [afternoonTrainer, trainerList])

    const changeHandlerMorning = (e: ChangeEvent<HTMLSelectElement>) => {
        setMorningTrainer(e.target.value)
        trainerList.find(x => x.trainer === e.target.value ? setMorningColor(x.color) : null)
    }

    const changeHandlerAfternoon = (e: ChangeEvent<HTMLSelectElement>) => {
        setAfternoonTrainer(e.target.value)
        trainerList.find(x => x.trainer === e.target.value ? setAfternoonColor(x.color) : null)
    }
    return <tr key={index.toString()}>
        <td className="col-md-auto table-dark">{index + 1}.{moment().month()}</td>
        <td className="col-md-auto table-dark">{moment().date(index + 1).format('dddd')}</td>
        {ownSelect(trainerList, morningColor, changeHandlerMorning)}
        {ownSelect(trainerList, afternoonColor, changeHandlerAfternoon)}
        {ownSelect(exercises, morningColor, changeHandlerMorning)}
        {ownSelect(exercises, afternoonColor, changeHandlerAfternoon)}
    </tr>
}



export default DayRows;