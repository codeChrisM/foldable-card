import React from "react";

export default function InsideCard({ handleClose }) {
  return (
    <div className="inside">
      <iframe
        title="Happy Birthday Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Feliz cumpleaños</p>
      <button onClick={handleClose}>Cerrar tarjeta</button>
    </div>
  );
}
