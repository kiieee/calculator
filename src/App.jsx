import './App.css'
import React, { useState } from 'react';
import { evaluate, hasNumericValue } from 'mathjs';

function App() {
  const [display, setDisplay] = useState('');  // initial state

  const handleClick = (value) => {
    setDisplay(display + value); // update state upon clicking a button on the calculator
  };

  const handleEquals = () => { 
      const result = evaluate(display);
      setDisplay(result.toString()); 
  }; // upon pressing equals, use mathjs evaluate function to evaluate the calculation within the display's state - then make it a string

  const handleClear = () => {
    setDisplay('');
  }; // clear button sets display to nothing

  const numberButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] // create array of numbers 0-9 but in the order you'd see them on a calculator

  return (
    <div className="calc">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="numberBtns"> {numberButton.map((digit) => ( <button onClick={() => handleClick(digit)}>{digit}</button>))} </div> 
        <div className="operationBtns"> 
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('*')}>×</button>
          <button onClick={() => handleClick('/')}>÷</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleEquals}>=</button>
          <button onClick={handleClear}>Clear</button>
          </div>
      </div>
    </div> 
  )
}

// line 25 -> shows display formed via react state
// line 27 -> maps over numbers array and for each one runs the handleClick in order to display each number onto the display, using the onClick attribute from jsdom
// lines 29-33 -> uses math.js in order to make the operations buttons, well, perform the operations
// lines 34-35 -> uses the handleEquals and handleClear functions to perform their appropriate actions

export default App

