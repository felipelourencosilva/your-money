import React from 'react';

import { FiX } from "react-icons/fi";

import "./PositiveBalance.css";

const PositiveBalance = ({positiveBalance, handleDeleteBalance}) => {
    return (
        <div className="positive-balance">
            <p className="us-positive">U$</p>
            <p>{positiveBalance.amount}</p>
            <FiX onClick={() => handleDeleteBalance(positiveBalance.id)} className="positive-x"/>
        </div>
    );
}
 
export default PositiveBalance;