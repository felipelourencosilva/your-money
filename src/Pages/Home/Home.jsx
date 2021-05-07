import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-phrase">
        <p>
          Control <br />
          your <span className="phrase-money">money</span>
          <br />
          at home
        </p>
      </div>
      <div className="home-image">
            <img src="/image.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
