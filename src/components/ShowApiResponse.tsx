import "./ShowApiResponse.css";
import { useState } from "react";

export function ShowApiResponse() {
  // useStateなどを使って変数を追加してみましょう

  return (
    <div>
      <h2>2. APIレスポンス取得</h2>
      <p>APIからデータを取得し表示してみましょう。</p>
      <button
        onClick={() => {
          // APIからデータを取得し表示してみましょう。
        }}
      >
        取得
      </button>
    </div>
  );
}
