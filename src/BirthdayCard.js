import React, { useState } from "react";
import "./index.css";
import InsideCard from "./InsideCard";
import runner from "./img/Runner1.jpg";

function BirthdayCard() {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <div className="birthday-card-container">
      <div className={`birthday-card${opened ? " opened" : ""}`}>
        <div className="front">
          <img class="runner" src={runner} alt="runner close up"></img>
          <button onClick={handleClick}>Open</button>
          <h1>Happy Birthday <br/>Dad! </h1>
        </div>
        <InsideCard handleClose={handleClose} />
      </div>
    </div>
  );
}

export default BirthdayCard;
