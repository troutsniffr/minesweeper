import './App.css';
import React, { useState } from 'react';


function App() {

const makeRow = () => Array.from(Array(10), () => "o");

let myCheckersBoard = Array.from(Array(10), () => makeRow());

myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";
myCheckersBoard[getRandom(10)][getRandom(10)] = "X";

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function tileClick() {
};

return (
  <div className="App">
    <h1>Minesweeper</h1>
  <pre className="board">
    {myCheckersBoard.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <label key={cellIndex} className="cell">
            <input type="checkbox" />
            <span>{cell} </span>
          </label>
        ))}
      </div>
    ))}
  </pre>
  </div>
);
};

export default App;
