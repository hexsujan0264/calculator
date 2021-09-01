import React from 'react'
import { NUMERIC_KEYS } from '../../Constants/keys.constants'
import ButtonKey from '../ButtonKey/ButtonKey.component'
import './NumericKeys.component.scss'

const NumericKeys = () => {
    return (
        <div className="numeric-keys">
            {NUMERIC_KEYS.map((item, index)=>(
                <ButtonKey key={index} value={item.value} />
            ))}
        </div>
    )
}

export default NumericKeys
