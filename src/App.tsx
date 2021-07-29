import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {CounterNew} from './components/CounterNew/CounterNew';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {BtnNew} from './components/CounterNew/btn/btnNew';

export const PATH = {
    First_ver: '/first',
    Second_ver: '/second',
}


const App = () => {
    let [countValue, setCountValue] = useState<number>(0)
    let [countValueN, setCountValueN] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(5)
    let [maxValueN, setMaxValueN] = useState<number>(5)


    let [startValue, setStartValue] = useState<number>(0)
    let [startValueN, setStartValueN] = useState<number>(0)

    let [inStartValue, setInStartValue] = useState<number>(0);
    let [inStartValueN, setInStartValueN] = useState<number>(0);


    let [inMaxValue, setInMaxValue] = useState<number>(5);
    let [inMaxValueN, setInMaxValueN] = useState<number>(5);

    let [btnOnOf, setBtnOnOf] = useState<boolean>(true);
    let [btnOnOfN, setBtnOnOfN] = useState<boolean>(true);

    const inStartValueLS = () => {
        let inStartValue = localStorage.getItem('InStartValue')
        if (inStartValue) {
            let newInStart = JSON.parse(inStartValue);
            setInStartValue(newInStart);
        }
    }

    const inStartValueLSN = () => {
        let inStartValue = localStorage.getItem('InStartValueN')
        if (inStartValue) {
            let newInStart = JSON.parse(inStartValue);
            setInStartValueN(newInStart);
        }
    }


    const inMaxValueLS = () => {
        let inMaxValue = localStorage.getItem('InMaxValue')
        if (inMaxValue) {
            let newInMax = JSON.parse(inMaxValue);
            setInMaxValue(newInMax);
        }
    }

    const inMaxValueLSN = () => {
        let inMaxValue = localStorage.getItem('InMaxValueN')
        if (inMaxValue) {
            let newInMax = JSON.parse(inMaxValue);
            setInMaxValueN(newInMax);
        }
    }


    const countValueLS = () => {
        let countValue = localStorage.getItem('countValue')
        if (countValue) {
            let newCountValue = JSON.parse(countValue);
            setCountValue(newCountValue);
        }
    }

    const countValueLSN = () => {
        let countValue = localStorage.getItem('countValueN')
        if (countValue) {
            let newCountValue = JSON.parse(countValue);
            setCountValueN(newCountValue);
        }
    }


    useEffect(() => {
        inStartValueLS()
        inStartValueLSN()
        inMaxValueLS()
        inMaxValueLSN()
        countValueLS()
        countValueLSN()

    }, [])


    const updateCountValue = () => {
        if (countValue < inMaxValue) {
            let newNum = ++countValue;
            setCountValue(newNum)
            localStorage.setItem('countValue', JSON.stringify(newNum));
        }
    }

    const updateCountValueN = () => {
        if (countValueN < inMaxValueN) {
            let newNum = ++countValueN;
            setCountValueN(newNum)
            localStorage.setItem('countValueN', JSON.stringify(newNum));
        }
    }

    const resetCountValue = () => {
        setCountValue(inStartValue);
        setMaxValue(inMaxValue);
        localStorage.setItem('countValue', JSON.stringify(inStartValue))
    }

    const resetCountValueN = () => {
        setCountValueN(inStartValueN);
        setMaxValueN(inMaxValueN);
        localStorage.setItem('countValueN', JSON.stringify(inStartValue))
    }

    const [btnVer, setBtnVer] = useState(true);


    return (<div>
            <HashRouter>
                <div className={'BtnToChangeRoute'}>
                    <BtnNew btnOnOf={btnOnOf}
                            countValue={countValue}
                            typeBtn={'ChangeBtn'}
                            inMaxValue={inMaxValue}
                            inStartValue={inStartValue}
                            btnVer={btnVer}
                            setBtnVer={setBtnVer}/>
                </div>


                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={PATH.First_ver}/>}/>

                    <Route path={PATH.First_ver} render={() => <Counter inStartValue={inStartValue}
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
                    />}/>
                    <Route path={PATH.Second_ver} render={() => <CounterNew inStartValue={inStartValueN}
                                                                            setInStartValue={setInStartValueN}
                                                                            inMaxValue={inMaxValueN}
                                                                            setInMaxValue={setInMaxValueN}
                                                                            startValue={startValueN}
                                                                            setStartValue={setStartValueN}
                                                                            setMaxValue={setMaxValueN}
                                                                            maxValue={maxValueN}
                                                                            countValue={countValueN}
                                                                            updateCountValue={updateCountValueN}
                                                                            resetCountValue={resetCountValueN}
                                                                            btnOnOf={btnOnOfN}
                                                                            setBtnOnOf={setBtnOnOfN}
                    />}/>

                </Switch>
            </HashRouter>
        </div>
    );
}


export default App;
