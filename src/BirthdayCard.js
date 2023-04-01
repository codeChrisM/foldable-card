import React, { useState } from "react";
import "./index.css";
import InsideCard from "./InsideCard";

function BirthdayCard() {
  const [opened, setOpened] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setOpened(true);
    setShowButton(false);
  };

  const handleClose = () => {
    setOpened(false);
    setShowButton(true);
  };

  return (
    <div className={`birthday-card${opened ? " opened" : ""}`}>
      {opened ? (
        <InsideCard handleClose={handleClose} />
      ) : (
        <div className="front">
          <button onClick={handleClick}>Abrir tarjeta</button>
          <h1>¡Feliz cumpleaños!</h1>
        </div>
      )}
    </div>
  );
}

export default BirthdayCard;
