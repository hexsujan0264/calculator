import React from "react";
import { NUMERIC_KEYS } from "../../Constants/keys.constants";
import ButtonKey from "../ButtonKey/ButtonKey.component";
import "./NumericKeys.component.scss";

const NumericKeys = ({ handleKeyClick = () => {} }) => {

    return (
        <div className="numeric-keys">
            {NUMERIC_KEYS.map((item, index) => (
                <ButtonKey key={index} value={item.value} onClick={( value ) => handleKeyClick( value, NUMERIC_KEYS )} />
            ))}
        </div>
    );
};

export default NumericKeys;
