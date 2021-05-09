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
      <div className="photos-links">
        <p>Images:</p>
        <ul>
          <li className="photo-link">figma.com/community/file/890095002328610853</li>
          <li className="photo-link">figma.com/community/file/968803933274255367</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
