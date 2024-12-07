import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [circlePosition, setCirclePosition] = useState({ top: '50%', left: '50%' });

  const handleCircleClick = () => {
    setClickCount(clickCount + 1);

    // Generate random position
    const randomTop = Math.random() * 80 + 10; // circle within 10%-90% vertically
    const randomLeft = Math.random() * 80 + 10; // circle within 10%-90% horizontally
    setCirclePosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div className="App">
      <h1>Circle Click Counter</h1>
      <div
        className="circle"
        style={{
          position: 'absolute',
          top: circlePosition.top,
          left: circlePosition.left,
        }}
        onClick={handleCircleClick}
      />
      <p>You have clicked the circle {clickCount} times!</p>
    </div>
  );
}

export default App;
