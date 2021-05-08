import React from 'react';

import "./NegativeBalance.css"

const NegativeBalance = ({negativeBalance}) => {
    return (
        <div className="negative-balance">
            <p className="us-negative">U$</p>
            <p className="balance-amount">{negativeBalance.amount}</p>
        </div>
    );
}
 
export default NegativeBalance;