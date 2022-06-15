import * as React from 'react';
import { useState } from "react";

export function TicTacToe() {
  return (
    <div>
      <h1>Fun game</h1>
      <Board />
      {/* <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox /> */}
    </div>
  );
}

function Board(){
  const [board, setBoard] = useState([
    null, 
    null,
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null]);
const [isXTurn, setIsXTurn] = useState(true);

const decideWinner = (board) => {
  const lines = [
[0, 1, 2],
[3, 4, 4],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[6, 7, 8],
[0, 4, 8],
[2, 4, 6],
  ];

  for (let i=0; i < lines.length; i++){
    const [a, b, c] = lines[i];

    if(board[a] === board[b] && board[b] === board[c]) {
      console.log(lines[i], a, b, c);
      console.log(board);
      console.log("Winner", board[a]);
      return board[a];
    }
  }
  return null;
  };

  const winner = decideWinner(board);

const handleClick = (index) => {
  console.log(index);

  if (!winner && !board[index]){  
  const boadCopy = [ ...board];
  boadCopy[index] = isXTurn ? "X" : "O";
  setBoard(boadCopy); 
  setIsXTurn ( !isXTurn);
  }
};

    return (
    <div className="board">
      {board.map(( val, index) => (
      <GameBox val={val} onPlayerClick= {() => handleClick(index)}/>
      ))}
     <h1> Winner is: {winner} </h1>
    </div>
  );
}

function GameBox({val, onPlayerClick}){
  // const [val, setVal] = useState("");
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return(
     <div style={styles} 
     onClick={onPlayerClick} className="game-box">
    {val}
    </div>
      );
}