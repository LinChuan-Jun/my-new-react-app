// 從 React 套件中引入 React 和 useState 函數
import React, { useState } from "react";
// 引入自定義的 Board 元件
import Board from "./Board";
// 引入外部的 CSS 文件
import "./tictactoe.css";

// 定義一個名為 TicTacToe 的函數元件
function TicTacToe() {
  // 使用 useState 函數來創建一個名為 history 的狀態變量，初始值為一個包含 9 個 null 值的數組
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 使用 useState 函數來創建一個名為 currentMove 的狀態變量，初始值為 0
  const [currentMove, setCurrentMove] = useState(0);
  // 根據 currentMove 的值從 history 中獲取當前的 squares 狀態
  const currentSquares = history[currentMove];
  // 根據 currentMove 的值判斷下一個玩家是 "X" 還是 "O"
  const xIsNext = currentMove % 2 === 0;

  // 定義一個名為 handlePlay 的函數，用於處理每次的落子操作
  const handlePlay = (nextSquares) => {
    // 根據當前的 history 和 nextSquares 創建新的 history
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // 更新 history 狀態變量為新的 history
    setHistory(nextHistory);
    // 更新 currentMove 狀態變量為新的 history 長度減 1
    setCurrentMove(nextHistory.length - 1);
  };

  // 定義一個名為 jumpTo 的函數，用於跳轉到指定的步驟
  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  // 根據 history 狀態變量創建一個包含所有步驟的數組
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步";
    } else {
      description = "遊戲開始";
    }
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  // 返回 JSX，這部分代碼將會渲染到網頁上
  return (
    <div className="game">
      {/* 渲染包含棋盤的 div 元素 */}
      <div className="game-board">
        {/* 渲染 Board 元件，並將 xIsNext、currentSquares 和 handlePlay 作為屬性傳遞給它 */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      {/* 渲染包含遊戲歷程的 div 元素 */}
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// 將 TicTacToe 函數元件作為預設導出
export default TicTacToe;
