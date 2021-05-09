import React from "react";

import PositiveBalance from "./PositiveBalance";
import NegativeBalance from "./NegativeBalance";

import "./Balances.css";

const Balances = ({ positiveBalances, negativeBalances, handleDeleteBalance}) => {
  return (
    <div className="balances-container">
      <div className="balances">
        <div className="positive-balance-container">
          {positiveBalances.map((positiveBalance) => (
            <PositiveBalance
              positiveBalance={positiveBalance}
              key={positiveBalance.id}
              handleDeleteBalance={handleDeleteBalance}
            />
          ))}
        </div>
        <div className="mid-line"></div>
        <div className="negative-balance-container">
          {negativeBalances.map((negativeBalance) => (
            <NegativeBalance
              negativeBalance={negativeBalance}
              key={negativeBalance.id}
              handleDeleteBalance={handleDeleteBalance}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Balances;
