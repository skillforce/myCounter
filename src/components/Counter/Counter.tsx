import React, {Dispatch, SetStateAction} from 'react';
import {Tablet} from './Tablet/Tablet';
import s from './Counter.module.css'
import {Btn} from './btn/btn';
import {SetTablet} from './setTablet/setTablet';

const {counter, btn, counterFlex} = s;

type CounterPropsType = {
    btnOnOf: boolean
    setBtnOnOf: Dispatch<SetStateAction<boolean>>
    inStartValue: number
    setInStartValue: (newX: any) => void
    inMaxValue: number
    setInMaxValue: (newX: any) => void
    countValue: number
    updateCountValue: () => void
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    resetCountValue: () => void
    maxValue: number
    startValue: number
}


export const Counter = (pr: CounterPropsType) => {

    const {
        countValue, updateCountValue, resetCountValue,
        maxValue,
        startValue, setStartValue, setMaxValue,
        setInStartValue, inStartValue,
        setInMaxValue, inMaxValue,
        btnOnOf, setBtnOnOf
    } = pr;

    return (<div className={counterFlex}>
            <div className={counter}>
                <Tablet maxValue={maxValue} countValue={countValue}/>
                <div className={btn}>
                    <Btn inMaxValue={inMaxValue} maxValue={maxValue} countValue={countValue} typeBtn={'inc'}
                         updateCountValue={updateCountValue}/>
                    <Btn inMaxValue={inMaxValue} countValue={countValue} typeBtn={'reset'} resetCountValue={resetCountValue}/>
                </div>
            </div>
            <div className={counter}>
                <SetTablet setBtnOnOf={setBtnOnOf}
                    setInStartValue={setInStartValue}
                           setInMaxValue={setInMaxValue}
                           inMaxValue={inMaxValue}
                           inStartValue={inStartValue}/>
                <div className={btn}>
                    <Btn btnOnOf={btnOnOf}
                         setBtnOnOf={setBtnOnOf}
                         resetCountValue={resetCountValue}
                         setMaxValue={setMaxValue}
                         countValue={countValue}
                         typeBtn={'set'}
                         inMaxValue={inMaxValue}
                         inStartValue={inStartValue}
                         setStartValue={setStartValue}
                         startValue={startValue}/>
                </div>
            </div>
        </div>
    )
}






