import React, {ChangeEventHandler, Dispatch, SetStateAction} from 'react';
import s from './setTablet.module.css';

const {setTablet, maxValueCl, startValueCl, maxValueClError, startValueClError} = s;

type TabletPropsType = {
    setBtnOnOf: Dispatch<SetStateAction<boolean>>
    inStartValue: number
    setInStartValue: (newX: any) => void
    inMaxValue: number
    setInMaxValue: (newX: any) => void
}


export const SetTablet = (pr: TabletPropsType) => {
    const {
        setInStartValue, inStartValue,
        setInMaxValue, inMaxValue, setBtnOnOf
    } = pr;


    const onChangeInMaxValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.currentTarget.value) {
            console.log('max value change')
            setInMaxValue(+e.currentTarget.value);
        } else {
            setInMaxValue('');
        }
        setBtnOnOf(false);
    }

    const onChangeInStartValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.currentTarget.value) {
            console.log('start value change')
            setInStartValue(e.currentTarget.value);
        } else {
            setInStartValue('');
        }
        setBtnOnOf(false);
    }

    const MaxValueInputClass = inMaxValue ? maxValueCl : maxValueClError;
    const StartValueInputClass = inStartValue > -1 ? startValueCl : startValueClError;

    return (
        <div className={setTablet}>
            <div className={MaxValueInputClass}>max value: <input type="text" value={inMaxValue}
                                                                  onChange={onChangeInMaxValue}/></div>
            <div className={StartValueInputClass}>start value: <input type="text" value={inStartValue}
                                                                      onChange={onChangeInStartValue}/></div>
        </div>
    )
}