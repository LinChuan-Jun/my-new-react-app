// 從 React 套件中引入 React 函數
import React from 'react';
// 引入外部的 CSS 文件
import './MyCalculator.css';

// 定義一個名為 MyButton 的函數元件，接收 props 作為參數
function MyButton(props){
    // 返回一個 div 元素，並設置 className 為 'board'
    return(
        <div className='board'>計算機按鈕面板</div>
    );
}

// 將 MyButton 函數元件作為預設導出
export default MyButton;
