import { useState } from 'react'
import { CONTROL_TYPE, OPERATION_TYPE } from '../Constants/global.constant';
import { NUMERIC_KEYS } from '../Constants/keys.constants';

let prevValue = '';
let newValue = '';
let isOperation = false;
let previousOperation = null;
let currentOperation = null;

const useCalculator = () => {
    const [result, setResult] = useState('0');
    const [history, setHistory] = useState('');
    
    const handleKey = ( value, type ) => {
        switch( type ){
            case NUMERIC_KEYS:
                handleNumeric( value );
                break;

            case OPERATION_TYPE:
                handleOperation( value );
                break;

            case CONTROL_TYPE:
                handleControl( value );
                break;

            default:
                break;
        }
    }

    const handleNumeric = ( value ) => {
        if( value === 'del' ) {
            handleControl( value );
            return;
        }

        if( prevValue === '' ) {
            setHistory('');
        }

        if( value === '.' && newValue.indexOf('.') > -1 ) {
            return;
        }

        newValue += value;
        setResult( newValue );
    }

    const handleOperation = ( value ) => {
        if( value === 'C' ) {
            clearAll();
        }
    }

    const handleControl = ( value ) => {
        // if( value === '=' && isOperation ) {
        //     doOperation();
        //     setResult( prevValue );
        //     setHistory( history + result );
        //     isOperation = false;
        //     return;
        // }

        // if( ! isOperation ) {
            // prevValue = newValue;
            // }
        // currentOperation = value;
        // doOperation();
        // // newValue = '';
        // isOperation = true;
        // setResult( prevValue );
        // setHistory( history + result + value );
    }

    const doOperation = () => {
        if( isOperation ) {
            prevValue = eval( prevValue + currentOperation + newValue );
        }
    }

    const clearAll = () => {
        clearResult();
        clearValues();
        setHistory('');
    }

    const clearResult = () => {
        setResult('0');
    }

    const clearValues = () => {
        prevValue = '';
        newValue = '';
        isOperation = false;
        currentOperation = null;
        previousOperation = null;
    }

    return {
        result,
        history,
        handleKey,
    }
}

export default useCalculator
