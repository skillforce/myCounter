import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {start} from 'repl';


const App = () => {
    let [countValue, setCountValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)

    let [inStartValue, setInStartValue] = useState<number>(0);
    let [inMaxValue, setInMaxValue] = useState<number>(5);

    let [btnOnOf, setBtnOnOf] = useState<boolean>(true);

    const updateCountValue = () => {
        if (countValue < inMaxValue) {
            let newNum = ++countValue;
            setCountValue(newNum)
        }
    }

    const resetCountValue = () => {
        setCountValue(inStartValue);
        setMaxValue(inMaxValue);
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
