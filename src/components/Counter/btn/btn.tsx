import React, {Dispatch, SetStateAction} from 'react';
import s from './btn.module.css';

const{resetBtn, resetBtnOff,incBtn, incBtnOff,setBtn}= s;

type BtnPropsType ={
    btnOnOf?:boolean
    setBtnOnOf?:Dispatch<SetStateAction<boolean>>
    startValue?:number
    resetCountValue?:() => void
    countValue: number
    updateCountValue?: () => void
    typeBtn:'reset'|'inc'|'set'
    maxValue?:any
    inMaxValue:number
    inStartValue?:number
    setStartValue?: Dispatch<SetStateAction<number>>
    setMaxValue?: Dispatch<SetStateAction<number>>
}


export const Btn = (pr:BtnPropsType) => {

    const {resetCountValue, countValue,updateCountValue,
        typeBtn,
        maxValue, inMaxValue, inStartValue,setStartValue,
        setMaxValue,
        btnOnOf, setBtnOnOf} = pr;

    const resetBtnClass = countValue > 0 ? resetBtn : resetBtnOff
    const disResetBtn = countValue === 0
    const incClass = countValue < inMaxValue ? incBtn : incBtnOff
    const disInc = countValue >= inMaxValue
    console.log(disInc)

    const onClickSet=()=>{
         if(resetCountValue) {
             resetCountValue()
         }
        if(setBtnOnOf){
            setBtnOnOf(true);
        }
    }



    const resetButton =typeBtn==='reset'? <div className={resetBtnClass}>
        <button disabled={disResetBtn} onClick={resetCountValue}>reset</button>
    </div> : '';

    const incButton = typeBtn==='inc'? <div className={incClass}>
        <button disabled={disInc} onClick={updateCountValue}>inc</button>
    </div> : '';
    const setButton = typeBtn==='set'? <div className={setBtn}>
        <button disabled={btnOnOf} onClick={onClickSet}>set</button>
    </div> : '';

    return (<div>
        {resetButton}
         {incButton}
            {setButton}
        </div>
    )
}