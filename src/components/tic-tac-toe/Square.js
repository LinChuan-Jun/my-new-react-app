// 從 React 套件中引入 React 函數
import React from "react";
// 引入外部的 CSS 文件
import "./tictactoe.css";

// 定義一個名為 Square 的函數元件，接收 value 和 onSquareClick 作為屬性
function Square({ value, onSquareClick }) {
  // 返回一個按鈕元素，當按鈕被點擊時調用 onSquareClick 函數
  return (
    <button className="square" onClick={onSquareClick}>
      {/* 顯示方格的值 */}
      {value}
    </button>
  );
}

// 將 Square 函數元件作為預設導出
export default Square;
