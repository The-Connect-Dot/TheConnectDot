import React from "react";
import "./Alert.css";

export default function Alert() {
  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  return (
    <div id="popup" className="popup">
      <span
        className="close"
        onclick={() => {
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
