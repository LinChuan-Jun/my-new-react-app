// 從 React 套件中引入 useState 函數
import { useState } from "react";

// 定義一個名為 MySlider 的函數元件，接收一個名為 onChange 的屬性
function MySlider({ onChange }) {
  // 使用 useState 函數來創建一個名為 value 的狀態變量，初始值為 128
  const [value, setValue] = useState(128);

  // 定義一個名為 handleChange 的函數，用於處理 input 元素的 onChange 事件
  const handleChange = (e) => {
    // 更新 value 的值為當前 input 的值
    setValue(e.target.value);

    // 如果傳入了 onChange 函數，則調用 onChange 並傳遞當前 input 的值
    if (onChange) {
      onChange(e.target.value);
    }
  };

  // 返回 JSX，這部分代碼將會渲染到網頁上
  return (
    <div>
      {/* 
        定義一個 range 類型的 input 元素，類似於滑動條
        設定最小值為 0，最大值為 255，寬度為 200
        值為狀態變量 value，當值改變時會調用 handleChange 函數
      */}
      <input
        type="range"
        width="200"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      />
      {/* 顯示當前滑動條的值 */}
      <span>{value}</span>
    </div>
  );
}

// 將 MySlider 函數元件作為預設導出
export default MySlider;
