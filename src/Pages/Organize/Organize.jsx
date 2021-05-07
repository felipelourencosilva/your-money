import React from "react";

import "./Organize.css";

const Organize = () => {
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
            <input className="amount" type="number" placeholder="Amount" />
            <button className="button">+</button>
          </div>
          <input
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
