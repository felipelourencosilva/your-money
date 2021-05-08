import React, { useState } from "react";

import Balances from "./Balances";

import "./Organize.css";
import PositiveBalance from "./PositiveBalance";

const Organize = ({handleAddBalance}) => {

  const [inputAmount, setInputAmount] = useState("")
  const [inputDescription, setInputDescription] = useState("")

    const handleInputChangeAmount = (e) => {
      setInputAmount(e.target.value)
    }

    const handleInputChangeDescription = (e) => {
      setInputDescription(e.target.value)
    }

    const handleAddBalanceClick = () => {
      handleAddBalance(inputAmount, inputDescription)
      setInputAmount('')
      setInputDescription('')
    }

  return (
      <div className="organize-container">
        <div className="organize">
          <div className="your-balance-container">
            <p className="your-balance">Your Balance:</p>
            <p className="your-money">
              <span className="money-us">U$</span> 247.36
            </p>
          </div>
          <div className="add-amount">
            <div className="amount-and-button">
              <input onChange={handleInputChangeAmount} className="amount" type="number" value={inputAmount} placeholder="Amount" />
              <button onClick={handleAddBalanceClick} className="button">+</button>
            </div>
            <input
              onChange={handleInputChangeDescription}
              className="add-description"
              type="text"
              placeholder="Add a description"
              value={inputDescription}
            />
          </div>
        </div>
      </div>
  );
};

export default Organize;
