import React from "react";
import runner from "./img/Runner2.jpg";

export default function InsideCard({ handleClose }) {
  return (
    <div className="inside">
      <iframe
        title="Happy Birthday Video"
        src="https://www.youtube.com/embed/fTbEpGZyseA?autoplay=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <img class="runner2" src={runner} alt="runner action"></img>

      <p className="inside-text">Wishing you a very Happy Birthday! <br></br>May it be overrun with fun!</p>
      <button className="inside-button" onClick={handleClose}>Close</button>
    </div>
  );
}
