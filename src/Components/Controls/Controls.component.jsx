import React from 'react'
import { CONTROL_TYPE } from '../../Constants/global.constant';
import { CONTROL_KEYS } from '../../Constants/keys.constants';
import ButtonKey from '../ButtonKey/ButtonKey.component';
import './Controls.component.scss'

const Controls = ({ handleKeyClick }) => {

    return (
        <div className="controls">
            {CONTROL_KEYS.map((item, index)=>(
                <ButtonKey key={index} value={item.value} className={item.className} onClick={(value) => handleKeyClick(value, CONTROL_TYPE)} />
            ))}
        </div>
    )
}

export default Controls;
