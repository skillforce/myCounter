import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

const App = () => {

    const [countValue, setCountValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

    const updateCountValue = () => {
        if (countValue < maxValue) {
            let newNum = countValue + 1;
            setCountValue(newNum)
        }
    }

    const resetCountValue = () => {
        setCountValue(startValue);
    }

    const updateMaxValue = (newNum: number) => {
        setMaxValue(newNum)
    }


return (
    <Counter maxValue={maxValue}
             updateMaxValue={updateMaxValue}
             countValue={countValue}
             updateCountValue={updateCountValue}
             resetCountValue={resetCountValue}
    />
);
}

export default App;
