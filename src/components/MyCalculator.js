// 從 React 套件中引入 React 和 useState 函數
import React, { useState } from 'react';
// 引入自定義的 MyDisplay 元件
import MyDisplay from './MyDisplay';
// 引入自定義的 MyButton 元件
import MyButton from './MyButton';
// 引入外部的 CSS 文件
import './MyCalculator.css';

// 定義一個名為 MyCalculator 的函數元件
function MyCalculator(){
    // 返回 JSX，這部分代碼將會渲染到網頁上
    return(
        <div className='calculator'>
            {/* 渲染 MyDisplay 元件 */}
            <MyDisplay />
            {/* 渲染 MyButton 元件 */}
            <MyButton />
        </div>
    );
}

// 將 MyCalculator 函數元件作為預設導出
export default MyCalculator;
