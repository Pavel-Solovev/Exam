import React, {useEffect, useState} from 'react';
import {Button} from "./components/Button";
import {InputNumber} from "./components/InputNumber";
import s from './Params.module.css'

type ParamsPropsType = {
    minValue:number
    maxValue:number
    setValueMax: (value:number)=> void
    setValueMin: (value:number)=> void
    setNumberValue:(value:number)=>void
    error:boolean
    setError:(value:boolean)=> void
}

export const Params = ({
                           setNumberValue,
                           setValueMax,
                           setValueMin,
                           ...props
}: ParamsPropsType) => {
    const [maxValueParams, setMaxValueParams] = useState(0)
    const [minValueParams, setMinValueParams] = useState(0)
    const valueError = () => maxValueParams === minValueParams ? props.setError(true) : props.setError(false)

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterMaxValueParams')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValueParams(newValue)
        }
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterMaxValueParams', JSON.stringify(maxValueParams))
        valueError()
    }, [maxValueParams, valueError])

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterMinValueParams')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMinValueParams(newValue)
        }
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterMinValueParams', JSON.stringify(minValueParams))
        valueError()
    }, [minValueParams, valueError])

    const setNumbers = () => {
        if (minValueParams > 0) {
            setValueMax(maxValueParams)
            setNumberValue(minValueParams)
            setValueMin(minValueParams)
        } else {
            setValueMax(maxValueParams)
            setNumberValue(0)
            setValueMin(minValueParams)
        }
    }

    return (
        <div className={s.scoreboardParams}>
            <InputNumber
                label={'MaxNumber for clicker:'}
                id={'MaxNumber'}
                value={maxValueParams}
                setValue={setMaxValueParams}
                min={minValueParams}
            />
            <InputNumber
                label={'MinNumber for clicker:'}
                id={'MinNumber'}
                value={minValueParams}
                setValue={setMinValueParams}
                max={maxValueParams}
            />
            <div className={s.buttons}>
                <Button
                    disabled={(maxValueParams === props.maxValue && minValueParams === props.minValue) ||
                        props.error}
                    name={'Set'}
                    callBack={setNumbers}
                />
            </div>
        </div>
    );
};