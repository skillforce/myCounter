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

    const start_max_value = inStartValue < inMaxValue;
    const onChangeInMaxValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.currentTarget.value) {

            setInMaxValue(+e.currentTarget.value);
        } else {
            setInMaxValue('');
        }
        setBtnOnOf(false);
    }

    const onChangeInStartValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.currentTarget.value) {
            setInStartValue(e.currentTarget.value);
        } else {
            setInStartValue('');
        }
        setBtnOnOf(false);
    }

    const MaxValueInputClass = inMaxValue && start_max_value ? maxValueCl : maxValueClError;
    const StartValueInputClass = inStartValue > -1 && start_max_value ? startValueCl : startValueClError;

    return (
        <div className={setTablet}>
            <div className={MaxValueInputClass}>max value: <input type="number" value={inMaxValue}
                                                                  onChange={onChangeInMaxValue}/></div>
            <div className={StartValueInputClass}>start value: <input type="number" value={inStartValue}
                                                                      onChange={onChangeInStartValue}/></div>
        </div>
    )
}