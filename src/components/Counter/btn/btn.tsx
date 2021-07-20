import React from 'react';
import s from './btn.module.css';

const{resetBtn, resetBtnOff,incBtn, incBtnOff,setBtn}= s;

type BtnPropsType ={
    resetCountValue?:() => void
    countValue: number
    updateCountValue?: () => void
    typeBtn:'reset'|'inc'|'set'
    updateMaxValue?:(newNum:number)=>void
    maxValue?:any
}


export const Btn = (pr:BtnPropsType) => {

    const {resetCountValue, countValue,updateCountValue,typeBtn,maxValue} = pr;

    const resetBtnClass = countValue > 0 ? resetBtn : resetBtnOff
    const disResetBtn = countValue === 0
    const incClass = countValue < maxValue ? incBtn : incBtnOff
    const disInc = countValue >= maxValue

    const resetButton =typeBtn==='reset'? <div className={resetBtnClass}>
        <button disabled={disResetBtn} onClick={resetCountValue}>reset</button>
    </div> : '';

    const incButton = typeBtn==='inc'? <div className={incClass}>
        <button disabled={disInc} onClick={updateCountValue}>inc</button>
    </div> : '';
    const setButton = typeBtn==='set'? <div className={setBtn}>
        <button >set</button>
    </div> : '';

    return (<div>
        {resetButton}
         {incButton}
            {setButton}
        </div>
    )
}