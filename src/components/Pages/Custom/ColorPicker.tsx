import { FC } from "react"
import React from "react"
import { IColor } from "../Create-trainer"
import ColorShower from "./ColorShower"
interface IProps {
    color: IColor;
    setColor(color: IColor): void;
}
const ColorPicker: FC<IProps> = (props: IProps) => {
    const {
        color,
        setColor
    } = props
    return (
        <div className="colorPicker">
            <ColorShower color={color} />
            <input type="range" min="1" max="255" step="1" value={color.first} onChange={(e) => { setColor({ ...color, first: e.target.value }) }} />
            <p>{color.first}#</p>
            <input type="range" min="1" max="255" step="1" value={color.second} onChange={(e) => { setColor({ ...color, second: e.target.value }) }} />
            <p>{color.second}#</p>
            <input type="range" min="1" max="255" step="1" value={color.third} onChange={(e) => { setColor({ ...color, third: e.target.value }) }} />
            <p>{color.third}#</p>
        </div>
    )
}

export default ColorPicker