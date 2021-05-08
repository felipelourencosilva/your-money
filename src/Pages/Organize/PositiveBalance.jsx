import React from 'react';

import "./PositiveBalance.css";

const PositiveBalance = ({positiveBalance}) => {
    return (
        <div className="positive-balance">
            <p className="us-positive">U$</p>
            <p>{positiveBalance.amount}</p>
        </div>
    );
}
 
export default PositiveBalance;