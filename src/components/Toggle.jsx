import React, { useState } from "react";

function Toggle() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="toggle-container">
        <span className="eng">ENG</span>
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb"></div>
      </button>
      <span className="nep">NEP</span>
    </div>
  );
}

export default Toggle;
