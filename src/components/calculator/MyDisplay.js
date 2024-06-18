// 從 React 套件中引入 React 函數
import React from 'react';

// 定義一個名為 MyDisplay 的函數元件，接收 props 作為參數
function MyDisplay(props) {
    // 返回一個 div 元素，並設置 className 為 'display'，顯示 props.result 的值
    return <div className='display'>{props.result}</div>
}

// 將 MyDisplay 函數元件作為預設導出
export default MyDisplay;
