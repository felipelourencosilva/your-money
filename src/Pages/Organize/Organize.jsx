import React, { useState } from "react";

import Balances from "./Balances";

import "./Organize.css";
import PositiveBalance from "./PositiveBalance";

const Organize = ({handleAddBalance}) => {

  const [inputDataAmount, setInputDataAmount] = useState("")
  const [inputDataDescription, setInputDataDescription] = useState("")

    const handleInputChangeAmount = (e) => {
      setInputDataAmount(e.target.value)
    }

    const handleInputChangeDescription = (e) => {
      setInputDataDescription(e.target.value)
    }

    const handleAddBalanceClick = () => {
      handleAddBalance(inputDataAmount, inputDataDescription)
      setInputDataAmount('')
      setInputDataDescription('')
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
              <input onChange={handleInputChangeAmount} className="amount" type="number" placeholder="Amount" />
              <button onClick={handleAddBalanceClick} className="button">+</button>
            </div>
            <input
              onChange={handleInputChangeDescription}
              className="add-description"
              type="text"
              placeholder="Add a description"
            />
          </div>
        </div>
      </div>
  );
};

export default Organize;
