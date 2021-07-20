import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

const App = () => {

    const [countValue, setCountValue] = useState<number>(0)

    const updateCountValue = () => {
        if (countValue < 5) {
            let newNum = countValue + 1;
            setCountValue(newNum)
        }
    }

    const resetCountValue = () => {
        setCountValue(0);
    }

    return (
        <Counter countValue={countValue}
                 updateCountValue={updateCountValue}
                 resetCountValue={resetCountValue}
        />
    );
}

export default App;
