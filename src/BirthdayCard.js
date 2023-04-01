import React, { useState } from "react";
import "./index.css";
import InsideCard from "./InsideCard";

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
          <img src="../img/Runner1.jpg" alt="runner close up"></img>
          <img src="./src/img/Runner1.jpg" alt="runner close up"></img>
          <img src="src/img/Runner1.jpg" alt="runner close up"></img>
          <img src="../../src/img/Runner1.jpg" alt="runner close up"></img>
          <img src=".././src/img/Runner1.jpg" alt="runner close up"></img>
          <button onClick={handleClick}>Open</button>
          <h1>Happy Birthday</h1>
        </div>
        <InsideCard handleClose={handleClose} />
      </div>
    </div>
  );
}

export default BirthdayCard;
