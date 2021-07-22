import React from 'react';
import s from './Tablet.module.css';

const {tablet, tabletTop} = s;

type TabletPropsType = {
    countValue: number
    maxValue: number
}


export const Tablet = (pr: TabletPropsType) => {
    const {countValue, maxValue} = pr;
    return (
        <div className={+countValue < maxValue ? tablet : tabletTop}>
            {countValue}
        </div>
    )
}