import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('pink');

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="ali" style={{ backgroundColor: color }}>
      <button onClick={() => handleClick('red')}>Red</button>
      <button onClick={() => handleClick('green')}>Green</button>
      <button onClick={() => handleClick('blue')}>Blue</button>
    </div>
  );
}

export default App;
