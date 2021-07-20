import React from 'react';
import {Tablet} from './Tablet/Tablet';
import s from './Counter.module.css'
import {Btn} from './btn/btn';
import {SetTablet} from './setTablet/setTablet';

const {counter, btn, counterFlex} = s;

type CounterPropsType = {
    countValue: number
    updateCountValue: () => void
    resetCountValue: () => void
    updateMaxValue:(newNum:number)=>void
    maxValue:number
}


export const Counter = (pr: CounterPropsType) => {

    const {countValue, updateCountValue, resetCountValue,updateMaxValue, maxValue} = pr;

    return (<div className={counterFlex}>
            <div className={counter}>
                <Tablet maxValue={maxValue} countValue={countValue}/>
                <div className={btn}>
                    <Btn maxValue={maxValue} countValue={countValue} typeBtn={'inc'} updateCountValue={updateCountValue}/>
                    <Btn countValue={countValue} typeBtn={'reset'} resetCountValue={resetCountValue}/>
                </div>
            </div>
            <div className={counter}>
                <SetTablet updateMaxValue={updateMaxValue} maxValue={maxValue} />
                <div className={btn}>
                    <Btn updateMaxValue={updateMaxValue} countValue={countValue} typeBtn={'set'} updateCountValue={updateCountValue}/>
                </div>
            </div>
        </div>
    )
}






