import React from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch({ isToggled, onToggle, id }) {
  return (
    <label className="switch">
      <input type="checkbox" id={id} checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
}
