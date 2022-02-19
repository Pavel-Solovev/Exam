import React from "react";
import s from './Number.module.css'

type NumberType = {
    value: number
    maxValue:number
    minValue:number
    error:boolean
}

export function Number(props: NumberType) {
    const max = localStorage.getItem('counterMaxValueParams')
    const min = localStorage.getItem('counterMinValueParams')

    if (max && min && !props.error &&
        (JSON.parse(max) !== props.maxValue || JSON.parse(min) !== props.minValue)) {
        return (
            <div className={s.messageInput}>set val</div>
        )
    }
    if (props.error)
    {
        return (
            <div className={s.messageError}>err.</div>
        )
    }
    else {
        return (
            <div
                className={props.value >= props.maxValue ||
                (props.value <= props.minValue && props.value !== 0) ?
                    s.maxNumber : ''}>{props.value}</div>
        )
    }

}