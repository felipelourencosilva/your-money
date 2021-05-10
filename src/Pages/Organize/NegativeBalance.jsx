import React from 'react';

import { FiX } from "react-icons/fi";
import { useHistory } from 'react-router';

import "./NegativeBalance.css"

const NegativeBalance = ({negativeBalance, handleDeleteBalance}) => {

    const history = useHistory()

    const handleNegativeBalanceDetails = () => {
        history.push(`/${negativeBalance.amount}/${negativeBalance.description}`)
    }

    return (
        <div className="negative-balance">
            <p className="us-negative">U$</p>
            <p onClick={handleNegativeBalanceDetails} className="negative-balance-amount">{negativeBalance.amount}</p>
            <FiX onClick={() => handleDeleteBalance(negativeBalance.id)} className="negative-x"/>
        </div>
    );
}
 
export default NegativeBalance;