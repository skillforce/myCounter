import React from 'react';
import s from './ResetBtn.module.css';


const {resetBtn, resetBtnOff} = s;

type ResetBtnPropsType = {
    resetCountValue: () => void
    countValue: number
}

export const ResetBtn = (pr: ResetBtnPropsType) => {

    const {resetCountValue, countValue} = pr;

    const resetBtnClass = countValue > 0 ? resetBtn : resetBtnOff
    const disResetBtn = countValue === 0

    return (
        <div className={resetBtnClass}>
            <button disabled={disResetBtn} onClick={resetCountValue}>reset</button>
        </div>
    )
}