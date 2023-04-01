import React, { useState } from "react";
import "./index.css";

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
        <div className="inside">  
        {/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ make this it's own Component_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/}
          <iframe
            title="Happy Birthday Video"
            src="https://www.youtube.com/embed/fTbEpGZyseA?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
          <p>Happy Birthday</p>
          {showButton && (
              <button onClick={handleClose}>Cerrar tarjeta</button>
              )}

{/*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ make this it's own Component_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/}
        </div>
      ) : (
        <div className="front">
          <h1>Happy Birthday!</h1>
          <button onClick={handleClick}>Open Card</button>
        </div>
      )}
    </div>
  );
}   

export default BirthdayCard;
