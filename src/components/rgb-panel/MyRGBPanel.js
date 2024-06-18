// 從 React 套件中引入 React 和 useState 函數
import React from "react";
import { useState } from "react";
// 引入自定義的 MySlider 元件
import MySlider from "./MySlider";

// 定義一個名為 MyRGBPanel 的函數元件
function MyRGBPanel() {
  // 使用 useState 函數來創建 r, g, b 三個狀態變量，初始值都為 128
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  // 定義三個函數分別用來更新 r, g, b 的值
  const updateR = (v) => setR(v);
  const updateG = (v) => setG(v);
  const updateB = (v) => setB(v);

  // 定義一個用於設置 RGB 面板樣式的對象
  const rgbCss = {
    border: "1px solid blue", // 設置邊框顏色為藍色
    borderRadius: "20px", // 設置邊框圓角
    width: "300px", // 設置寬度
    display: "flex", // 設置為 flex 布局
    flexDirection: "column", // 設置 flex 布局的方向為列方向
    padding: "20px", // 設置內邊距
    justifyContent: "center", // 設置主軸對齊方式為居中
    alignItems: "center", // 設置交叉軸對齊方式為居中
    margin: "auto", // 設置自動外邊距，將元素置於容器中央
  };

  // 返回 JSX，這部分代碼將會渲染到網頁上
  return (
    <>
      {/* 渲染一個 div 元素，並應用 rgbCss 樣式 */}
      <div style={rgbCss}>
        {/* 標題元素，顯示 "目前色彩"，字體顏色設置為紅色 */}
        <h2 style={{ color: "red" }}>目前色彩</h2>
        {/* 顯示一個 div，用於展示當前的 RGB 顏色 */}
        <div
          style={{
            width: "250px", // 設置寬度
            height: "100px", // 設置高度
            backgroundColor: `rgb(${r}, ${g}, ${b})`, // 設置背景顏色為當前 RGB 顏色
          }}
        />
        {/* 顯示 "R: " 並渲染一個 MySlider 元件，當滑動條改變時調用 updateR 函數 */}
        <span>R: </span>
        <MySlider onChange={updateR} />
        {/* 顯示 "G: " 並渲染一個 MySlider 元件，當滑動條改變時調用 updateG 函數 */}
        <span>G: </span>
        <MySlider onChange={updateG} />
        {/* 顯示 "B: " 並渲染一個 MySlider 元件，當滑動條改變時調用 updateB 函數 */}
        <span>B: </span>
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

// 將 MyRGBPanel 函數元件作為預設導出
export default MyRGBPanel;
