import React from "react";
import s from './Button.module.css'

type ButtonType = {
    name:string
    callBack: () => void
    disabled?: boolean
}


export function Button(props: ButtonType) {
    const onClickHandler = ()=>{
        props.callBack()
    }
    return (
        <button className={s.Button} disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    )
}