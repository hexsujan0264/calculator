import React from 'react'
import './ButtonKey.component.scss'

const ButtonKey = (props) => {
    const { value, className, onClick = null } = props;

    return (
        <button className={`btn-key ${className? className: ''}`} onClick={() => onClick( value )}>{value}</button>   
    )
}

export default ButtonKey
