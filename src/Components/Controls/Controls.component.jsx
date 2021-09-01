import React from 'react'
import { CONTROL_KEYS } from '../../Constants/keys.constants';
import ButtonKey from '../ButtonKey/ButtonKey.component';
import './Controls.component.scss'

const Controls = () => {
    return (
        <div className="controls">
            {CONTROL_KEYS.map((item, index)=>(
                <ButtonKey key={index} value={item.value} className={item.className} />
            ))}
        </div>
    )
}

export default Controls;
