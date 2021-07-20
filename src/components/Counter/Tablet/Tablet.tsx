import React from 'react';
import s from './Tablet.module.css';

const {tablet, tabletTop} = s;

type TabletPropsType = {
    countValue: number
}


export const Tablet = (pr: TabletPropsType) => {
    const {countValue} = pr;

    const tabletClass = countValue < 5 ? tablet : tabletTop
    return (
        <div className={tabletClass}>
            {countValue}
        </div>
    )
}