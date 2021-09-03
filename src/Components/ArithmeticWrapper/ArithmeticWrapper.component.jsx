import React from 'react'
import NumericKeys from '../NumericKeys/NumericKeys.component'
import TopKeys from '../TopKeys/TopKeys.component'

const ArithmeticWrapper = ( { handleKeyClick } ) => {
    return (
        <div className="arithmetic-wrapper">
            <TopKeys handleKeyClick={handleKeyClick} />
            <NumericKeys handleKeyClick={handleKeyClick}/>
        </div>
    )
}

export default ArithmeticWrapper;
