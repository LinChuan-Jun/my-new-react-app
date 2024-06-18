// 從 React 套件中引入 React 函數
import React from "react";
// 引入自定義的 Square 元件
import Square from "./Square";
// 引入外部的 CSS 文件
import "./tictactoe.css";

// 定義一個名為 Board 的函數元件，接收 xIsNext、squares 和 onPlay 作為屬性
function Board({ xIsNext, squares, onPlay }) {
  // 定義一個名為 handleClick 的函數，用於處理每個方格的點擊事件
  const handleClick = (i) => {
    // 創建下一步的 squares 狀態
    const nextSquares = squares.slice();
    // 根據 xIsNext 的值設置下一步的方格為 "X" 或 "O"
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // 調用 onPlay 函數並傳遞 nextSquares
    onPlay(nextSquares);
  };

  // 根據 xIsNext 的值設置狀態訊息
  let status = "下一個玩家: " + (xIsNext ? "X" : "O");

  // 返回 JSX，這部分代碼將會渲染到網頁上
  return (
    <>
      {/* 顯示狀態訊息 */}
      <div className="status">{status}</div>
      {/* 渲染第一行的三個 Square 元件 */}
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      {/* 渲染第二行的三個 Square 元件 */}
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      {/* 渲染第三行的三個 Square 元件 */}
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// 將 Board 函數元件作為預設導出
export default Board;
