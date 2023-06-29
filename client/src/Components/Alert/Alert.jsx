import React from "react";
import "./Alert.css";

export default function Alert() {
  function hidePopup() {
    var popup = document.querySelector(".popup");
    popup.style.display = "none";
  }

  return (
    <div id="popup" className="popup">
      <span
        className="close"
        onClick={() => {
          hidePopup();
        }}
      >
        &times;
      </span>
      <div className="popup-content">
        <p>Pop-up content goes here.</p>
        <div className="timer"></div>
      </div>
    </div>
  );
}
