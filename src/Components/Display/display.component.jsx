import React from 'react'
import './display.component.scss'

const Display = ({ data }) => {
    return (
        <div className="display">
            <div className="result">{ data.result }</div>
            <div className="history">{ data.history }</div>
        </div>
    )
}

export default Display
