import React from 'react';

import { FiX } from "react-icons/fi";

import "./NegativeBalance.css"

const NegativeBalance = ({negativeBalance, handleDeleteBalance}) => {
    return (
        <div className="negative-balance">
            <p className="us-negative">U$</p>
            <p className="balance-amount">{negativeBalance.amount}</p>
            <FiX onClick={() => handleDeleteBalance(negativeBalance.id)} className="negative-x"/>
        </div>
    );
}
 
export default NegativeBalance;