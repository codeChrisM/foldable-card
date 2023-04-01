import React from "react";

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
                <img src="./src/img/Runner2.jpg"></img>

      <p>A Very Special Happy Birthday!</p>
      <button onClick={handleClose}>Close card</button>
    </div>
  );
}