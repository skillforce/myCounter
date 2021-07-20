import React from 'react';
import s from './IncBtn.module.css';

const {incBtn, incBtnOff} = s;

type IncBtnPropsType = {
    updateCountValue: () => void
    countValue: number
}


export const IncBtn = (pr: IncBtnPropsType) => {
    const {updateCountValue, countValue} = pr;


    const incClass = countValue < 5 ? incBtn : incBtnOff
    const disInc = countValue >= 5


    return (
        <div className={incClass}>
            <button disabled={disInc} onClick={updateCountValue}>inc</button>
        </div>
    )
}