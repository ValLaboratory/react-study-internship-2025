import { useState } from "react";
import "./Counter.css";

export function Counter() {
  // Note:
  // 変数countには、現在のカウント数値が入っている
  // setCount(n)を呼び出すと、カウント数値を設定できる
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>1. カウンター</h2>
      <p>+1ボタンを押すと数値が増える様にしてみましょう。</p>

      {/* カウント数値の表示 */}
      <span className="counter-result">{count}</span>

      {/* カウントアップボタン */}
      <button
        onClick={() => {
          console.log("ボタンがクリックされました");

          // ボタンが押されたらカウントアップするように実装してみましょう
        }}
      >
        +1
      </button>
    </div>
  );
}
