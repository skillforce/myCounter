import React from 'react';
import {Tablet} from './Tablet/Tablet';
import {IncBtn} from './incBtn/IncBtn';
import {ResetBtn} from './resetBtn/ResetBtn';
import s from './Counter.module.css'

const {counter, btn} = s;

type CounterPropsType = {
    countValue: number
    updateCountValue: () => void
    resetCountValue: () => void
}


export const Counter = (pr: CounterPropsType) => {

    const {countValue, updateCountValue, resetCountValue} = pr;

    return (<div className={counter}>
            <Tablet countValue={countValue}/>
            <div className={btn}>
                <IncBtn countValue={countValue} updateCountValue={updateCountValue}/>
                <ResetBtn countValue={countValue} resetCountValue={resetCountValue}/>
            </div>
        </div>
    )
}






