import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './setTablet.module.css';

const {setTablet, tabletTop, maxValueCl, startValue} = s;

type TabletPropsType = {
    maxValue:number
    updateMaxValue:(newNum:any)=>void
}


export const SetTablet = (pr: TabletPropsType) => {
    const {maxValue,updateMaxValue} = pr;


    const onChangeMaxValue:ChangeEventHandler<HTMLInputElement>=(e)=>{
        let newMaxValue = e.currentTarget.value;
            updateMaxValue(newMaxValue);
        }




    return (
        <div className={setTablet}>
            <div className={maxValueCl}>max value: <input type="text" value={maxValue} onChange={onChangeMaxValue}/> </div>
            <div className={startValue}>start value: <input type="text"/></div>
        </div>
    )
}