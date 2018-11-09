import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <div className="grid-hour">
          <div className="hour">00:</div>
          <div className="grid-text">Hour</div>
        </div>
        <div className="grid-minute">
          <div className="minute">30:</div>
          <div className="grid-text">Minute</div>
        </div>
        <div className="grid-second">
          <div className="second">00</div>
          <div className="grid-text">Second</div>
        </div>
      </div>
    </div>
  );
}

export default App;
