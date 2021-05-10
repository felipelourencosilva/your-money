import React from 'react';

import { FiX } from "react-icons/fi";
import { useHistory } from 'react-router';

import "./PositiveBalance.css";

const PositiveBalance = ({positiveBalance, handleDeleteBalance}) => {

    const history = useHistory()

    const handlePositiveBalanceDetails = () => {
        history.push(`/${positiveBalance.amount}/${positiveBalance.description === '' ? 'This value has no description' : positiveBalance.description}`)
    }

    return (
        <div className="positive-balance">
            <p className="us-positive">U$</p>
            <p className="positive-balance-amount" onClick={handlePositiveBalanceDetails}>{positiveBalance.amount}</p>
            <FiX onClick={() => handleDeleteBalance(positiveBalance.id)} className="positive-x"/>
        </div>
    );
}
 
export default PositiveBalance;