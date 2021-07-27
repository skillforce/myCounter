import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';


const App = () => {
    let [countValue, setCountValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)

    let [inStartValue, setInStartValue] = useState<number>(0);
    let [inMaxValue, setInMaxValue] = useState<number>(5);

    let [btnOnOf, setBtnOnOf] = useState<boolean>(true);

    const inStartValueLS = () => {
        let inStartValue = localStorage.getItem('InStartValue')
        if (inStartValue) {
            let newInStart = JSON.parse(inStartValue);
            setInStartValue(newInStart);
        }
    }
    const inMaxValueLS = () => {
        let inMaxValue = localStorage.getItem('InMaxValue')
        if (inMaxValue) {
            let newInMax = JSON.parse(inMaxValue);
            setInMaxValue(newInMax);
        }
    }
    const countValueLS = () => {
        let countValue = localStorage.getItem('countValue')
        if (countValue) {
            let newCountValue = JSON.parse(countValue);
            setCountValue(newCountValue);
        }
    }


    useEffect(() => {
        inStartValueLS()
        inMaxValueLS()
        countValueLS()

    }, [])


    const updateCountValue = () => {
        if (countValue < inMaxValue) {
            let newNum = ++countValue;
            setCountValue(newNum)
            localStorage.setItem('countValue', JSON.stringify(newNum));
        }
    }

    const resetCountValue = () => {
        setCountValue(inStartValue);
        setMaxValue(inMaxValue);
        localStorage.setItem('countValue', JSON.stringify(inStartValue))
    }


    return (
        <Counter inStartValue={inStartValue}
                 setInStartValue={setInStartValue}
                 inMaxValue={inMaxValue}
                 setInMaxValue={setInMaxValue}
                 startValue={startValue}
                 setStartValue={setStartValue}
                 setMaxValue={setMaxValue}
                 maxValue={maxValue}
                 countValue={countValue}
                 updateCountValue={updateCountValue}
                 resetCountValue={resetCountValue}
                 btnOnOf={btnOnOf}
                 setBtnOnOf={setBtnOnOf}
        />
    );
}


export default App;
