import React from "react";
import s from './Number.module.css'

type NumberType = {
    value: number | null
    maxValue:number
    minValue:number
    error:boolean
}

export function Number(props: NumberType) {
    if (!props.error && props.value === null) {
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
                className={props.value !== null && props.value >= props.maxValue ||
                (props.value !== null && props.value <= props.minValue && props.value !== 0) ?
                    s.maxNumber : ''}>{props.value}</div>
        )
    }

}