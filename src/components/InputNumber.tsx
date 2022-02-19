import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputTypeProps= {
    label:string
    id:string
    value:number
    setValue: (value:number)=> void
    max?:number
    min?:number
}

export const InputNumber = (props:InputTypeProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value))
    }
    return (
        <div>
            <label form={props.id}>{props.label}</label>
            <input
                id={props.id}
                name={props.id}
                type={'number'}
                step={'1'}
                value={props.value}
                max={props.max}
                min={props.min}
                onChange={onChangeHandler}
            />
        </div>
    );
};
