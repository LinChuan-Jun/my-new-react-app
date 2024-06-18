// 從 React 套件中引入 React 和 useState 函數
import React, { useState } from "react";
// 引入自定義的 MyDisplay 元件
import MyDisplay from "./MyDisplay";
// 引入自定義的 MyButton 元件
import MyButton from "./MyButton";
// 引入外部的 CSS 文件
import "./MyCalculator.css";

// 定義一個名為 MyCalculator 的函數元件
function MyCalculator() {
  // 使用 useState 函數來創建一個名為 result 的狀態變量，初始值為 "0"
  const [result, setResult] = useState("0");

  // 定義一個名為 handleClick 的函數，用於處理按鈕的點擊事件
  const handleClick = (value) => {
    // 根據點擊的按鈕值進行不同的處理
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        // 如果 result 的值為 "0"，則將其設置為按鈕的值
        // 否則，將按鈕的值追加到 result 之後
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        // 使用 eval 函數計算 result 的值，並將結果設置為新的 result
        setResult(eval(result).toString());
        break;
      case "c":
        // 清空 result 的值
        setResult("");
        break;
      case "+/-":
        // 將 result 的值轉換為數字，取反後再設置為新的 result
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        // 將 result 的值轉換為數字，除以 100 後再設置為新的 result
        setResult(parseInt(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  // 返回 JSX，這部分代碼將會渲染到網頁上
  return (
    <div className="calculator">
      {/* 渲染 MyDisplay 元件，並將 result 狀態變量的值傳遞給它 */}
      <MyDisplay result={result} />
      {/* 渲染 MyButton 元件，並將 handleClick 函數作為 buttonClicked 屬性傳遞給它 */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

// 將 MyCalculator 函數元件作為預設導出
export default MyCalculator;
