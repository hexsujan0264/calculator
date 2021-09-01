import React from 'react'
import NumericKeys from '../NumericKeys/NumericKeys.component'
import TopKeys from '../TopKeys/TopKeys.component'

const ArithmeticWrapper = () => {
    return (
        <div className="arithmetic-wrapper">
            <TopKeys />
            <NumericKeys/>
        </div>
    )
}

export default ArithmeticWrapper;
