import React, { FC } from "react"
import { IColor } from "../Create-trainer"

interface IProps {
    color: IColor
}
const ColorShower: FC<IProps> = (props: IProps) => {
    return (
        <div className="colorShower" style={{ 
            backgroundColor: `rgb(${props.color.first},${props.color.second},${props.color.third})` 
        }} />
    )
}
export default ColorShower