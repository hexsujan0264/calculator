import React from "react";
import { TOP_KEYS } from "../../Constants/keys.constants";
import ButtonKey from "../ButtonKey/ButtonKey.component";

const TopKeys = () => {
    return (
        <div className="top-keys">
            { TOP_KEYS.map( ( item, index ) => (
                <ButtonKey key={index} value={item.value} />
            )) }
        </div>
    )
};

export default TopKeys;
