import React, { useContext, useState } from "react";
import { CalcContext } from "../context/CalcContext";


function Toggle() {
const {toggleNumberSystem, numberSystem} = useContext(CalcContext)

  return (
    <div className="toggle-container">
        <span className="eng">ENG</span>
      <button
        className={`toggle-btn ${numberSystem === 'en-IN' ? "toggled" : ""}`}
        onClick={toggleNumberSystem}
      >
        <div className="thumb"></div>
      </button>
      <span className="nep">NEP</span>
    </div>
  );
}

export default Toggle;
