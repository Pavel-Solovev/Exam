import React from "react";
import {Number} from "./components/Number";
import {Button} from "./components/Button";
import s from './Clicker.module.css'

type ClickerType = {

    title: string
    numberValue: number | null
    maxValue: number
    minValue:number
    onClick: (value: number) => void
    error:boolean
}

export function Clicker({
    numberValue,
    maxValue,
    minValue,
    ...props
                        }: ClickerType) {



    const Plus = () => numberValue !== null && numberValue < maxValue  && props.onClick(numberValue+1)
    const Minus = () => numberValue !== null && numberValue > minValue && props.onClick(numberValue-1)
    const Reset = () => numberValue !== null && numberValue >= minValue && minValue <= 0 ?
        props.onClick(0) : props.onClick(minValue)


    return (
        <div>
            <div className={s.scoreboardClicker}>
                <Number value={numberValue} maxValue={maxValue} minValue={minValue} error={props.error}/>
            </div>
            <div className={s.buttons}>
                <Button
                    disabled={numberValue !== null && numberValue >= maxValue || numberValue === null || props.error}
                    name={'+'}
                    callBack={Plus}
                />
                <Button
                    disabled={numberValue !== null &&  numberValue > maxValue || numberValue === minValue ||
                        maxValue <= minValue || numberValue === null || props.error}
                    name={'-'}
                    callBack={Minus}
                />
                <Button
                    disabled={numberValue === 0 || (numberValue === minValue && numberValue > 0) ||
                        maxValue <= minValue || numberValue === null || props.error}
                    name={'Reset'}
                    callBack={Reset}
                />
            </div>
        </div>
    )
}