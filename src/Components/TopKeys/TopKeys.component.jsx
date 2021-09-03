import React from "react";
import { TOP_KEYS } from "../../Constants/keys.constants";
import { OPERATION_TYPE } from '../../Constants/global.constant';
import ButtonKey from "../ButtonKey/ButtonKey.component";

const TopKeys = ({ handleKeyClick }) => {

    return (
        <div className="top-keys">
            { TOP_KEYS.map( ( item, index ) => (
                <ButtonKey key={index} value={item.value} onClick={(value) => handleKeyClick( value, OPERATION_TYPE)} />
            )) }
        </div>
    )
};

export default TopKeys;
