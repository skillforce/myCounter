import React from 'react';
import s from './Tablet.module.css';

const {tablet, tabletTop} = s;

type TabletPropsType = {
    countValue: number
    maxValue:number
}


export const Tablet = (pr: TabletPropsType) => {
    const {countValue, maxValue} = pr;

    const tabletClass = countValue < maxValue ? tablet : tabletTop
    return (
        <div className={tabletClass}>
            {countValue}
        </div>
    )
}