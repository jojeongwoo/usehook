import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const [isCircle, setIsCircle] = useState(true);
  const nameInput = useRef(null);

  const changeShape = () => {
    setIsCircle(!isCircle);
  }

  const clearInput = () => {
    nameInput.current.value = "";
  }

  return (
    <div className="App">
      <div className={isCircle ? "circle" : "square"}></div>
      <button className="shape" onClick={changeShape}>Change Shape</button>

      <input type="text" placeholder="What your name?" ref={nameInput}/>
      <button onClick={clearInput}>submit</button>
    </div>
  );
}

export default App;
