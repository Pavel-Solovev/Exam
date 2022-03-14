import React, {useEffect, useState} from 'react';
import {Clicker} from "./Clicker";
import s from './App.module.css'
import {Params} from "./Params";

export function App() {
    const [numberValue, setNumberValue] = useState<number|null>(null)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [error,  setError] = useState<boolean>(false)

    const EffectForStorage = (title:string) => {
        let valueAsString = localStorage.getItem(title)
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNumberValue(newValue)
    }
    }

    useEffect(()=>{
        EffectForStorage('counterValueMax')
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterValueMax', JSON.stringify(maxValue))
    }, [maxValue])


    useEffect(()=>{
        EffectForStorage('counterValueMin')
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterValueMin', JSON.stringify(minValue))
    }, [minValue])


    useEffect(()=>{
        EffectForStorage('counterValueNumber')
    }, [])
    useEffect( ()=> {
        localStorage.setItem('counterValueNumber', JSON.stringify(numberValue))
    }, [numberValue])


    useEffect(()=>{
        EffectForStorage('counterValueError')
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

