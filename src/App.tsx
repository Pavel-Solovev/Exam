import React, {useEffect, useState} from 'react';
import {Clicker} from "./Clicker";
import s from './App.module.css'
import {Params} from "./Params";

export function App() {
    const [numberValue, setNumberValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [error,  setError] = useState<boolean>(false)


    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValueMax')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterValueMax', JSON.stringify(maxValue))
    }, [maxValue])


    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValueMin')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMinValue(newValue)
        }
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterValueMin', JSON.stringify(minValue))
    }, [minValue])


    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValueNumber')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNumberValue(newValue)
        }
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterValueNumber', JSON.stringify(numberValue))
    }, [numberValue])


    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValueError')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setError(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValueError', JSON.stringify(error))
    }, [error])

    return (<>
        <div className={s.app}>
            <Clicker
                title={'Clicker'}
                numberValue={numberValue}
                maxValue={maxValue}
                minValue={minValue}
                onClick={setNumberValue}
                error={error}
            />
        </div>
        <div className={s.app}>
            <Params
                minValue={minValue}
                maxValue={maxValue}
                setNumberValue={setNumberValue}
                setValueMax={setMaxValue}
                setValueMin={setMinValue}
                error={error}
                setError={setError}
            />
        </div>
        </>
    );
}

