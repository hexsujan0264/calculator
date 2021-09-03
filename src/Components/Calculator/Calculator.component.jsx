import React from 'react';
import useCalculator from '../../Hooks/useCalculator.hook';
import ArithmeticWrapper from '../ArithmeticWrapper/ArithmeticWrapper.component';
import Controls from '../Controls/Controls.component';
import Display from '../Display/display.component';
import './Calculator.component.scss';

const Calculator = () => {
    const { result, history, handleKey } = useCalculator();
    
    return (
        <div className='calculator'>
            <Display data={ { result, history } } />
            <div className="keypad">
                <ArithmeticWrapper handleKeyClick={handleKey}/>
                <Controls handleKeyClick={handleKey}/>
            </div>
        </div>
    )
}

export default Calculator
