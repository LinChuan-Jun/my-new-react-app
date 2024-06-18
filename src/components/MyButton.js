// 從 React 套件中引入 React 函數
import React from "react";
// 引入外部的 CSS 文件
import "./MyCalculator.css";

// 定義一個名為 MyButton 的函數元件，接收 props 作為參數
function MyButton(props) {
  // 定義一個名為 handelClick 的函數，用於處理按鈕的點擊事件
  const handelClick = (e) => {
    // 調用 props 傳遞過來的 buttonClicked 函數，並傳遞當前按鈕的值
    props.buttonClicked(e.target.value);
    // alert(e.target.value); // 可以用來調試，彈出當前按鈕的值
  }

  // 返回 JSX，這部分代碼將會渲染到網頁上
  return (
    <div className="board">
      {/* 渲染按鈕面板，每個按鈕都有相應的 className 和點擊事件處理函數 */}
      <div>
        <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
        <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
        <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
        <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
      </div>
      <div>
        <button className="btn" value="7" onClick={handelClick}>7</button>
        <button className="btn" value="8" onClick={handelClick}>8</button>
        <button className="btn" value="9" onClick={handelClick}>9</button>
        <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
      </div>
      <div>
        <button className="btn" value="4" onClick={handelClick}>4</button>
        <button className="btn" value="5" onClick={handelClick}>5</button>
        <button className="btn" value="6" onClick={handelClick}>6</button>
        <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
      </div>
      <div>
        <button className="btn" value="1" onClick={handelClick}>1</button>
        <button className="btn" value="2" onClick={handelClick}>2</button>
        <button className="btn" value="3" onClick={handelClick}>3</button>
        <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
      </div>
      <div>
        <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
        <button className="btn" value="." onClick={handelClick}>.</button>
        <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
      </div>
    </div>
  );
}

// 將 MyButton 函數元件作為預設導出
export default MyButton;
