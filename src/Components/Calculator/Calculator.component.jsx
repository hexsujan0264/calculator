import React from 'react';
import ArithmeticWrapper from '../ArithmeticWrapper/ArithmeticWrapper.component';
import Controls from '../Controls/Controls.component';
import Display from '../Display/display.component';
import './Calculator.component.scss';

const Calculator = () => {
    return (
        <div className='calculator'>
            <Display />
            <div class="keypad">
                <ArithmeticWrapper />
                <Controls/>
            </div>
        </div>
    )
}

export default Calculator
