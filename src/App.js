import React from 'react';

import './App.css';

function App() {
  return (
    <div className="statictimer">
     <div className="timer">Timer</div>
     <div className="statictimer__digital"> 00:30:00</div>
     <div className="statictimer__HMS">
     <div className="statictimer__HMS__Hour">Hour</div>
     <div className="statictimer__HMS__Minute">Minute</div>
     <div className="statictimer__HMS__Second">Second</div>
     </div>
    </div>
  );
}

export default App;
