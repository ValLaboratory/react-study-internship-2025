---
marp: true
theme: default
paginate: true
size: 16:9
---

# Web開発入門

## React & 外部API連携

**新人開発者向け研修**

---

# 本日のアジェンダ

- **導入** - 本日のお題について説明 (5分)
- **第一章** - Webページが表示されるしくみ (10分)
- **第二章** - HTML, CSS, JavaScriptの基本文法 (20分)
- **第三章** - React (20分)
- **演習問題** - 外部APIからデータを取得しReactで表示してみよう (5分)

**合計時間：約60分**

---

# 〜第一章〜　Webページが表示されるしくみ

---

## Webページが表示されるまで

ブラウザのアドレスバーに **URL** を入力すると...

1. **DNS解決** - ドメイン名をIPアドレスに変換
2. **HTTP/HTTPSリクエスト** - サーバーにリクエスト送信
3. **サーバー処理** - リクエストを処理してレスポンス生成
4. **レスポンス受信** - HTML, CSS, JSファイルを受信
5. **レンダリング** - ブラウザがWebページを表示

---

## クライアント・サーバー通信

```
[ブラウザ] ----HTTP Request----> [Webサーバー]
     ↑                              ↓
     +-------HTTP Response----------+
              (HTML,CSS,JS)
```

**例：駅すぱあとfor webの場合**

- ユーザーが出発駅・到着駅を入力
- サーバーが経路計算を実行
- 結果をHTMLで返却して表示

---

## Webページを構成する3つの技術

| 技術           | 役割                   | 例                             |
| -------------- | ---------------------- | ------------------------------ |
| **HTML**       | 構造・内容             | 文章、見出し、リンク           |
| **CSS**        | デザイン・見た目       | 色、レイアウト、アニメーション |
| **JavaScript** | 動作・インタラクション | ボタンクリック、データ取得     |

これらが **組み合わさって** 現代のWebページが作られています！

---

# 〜第二章〜　HTML, CSS, JavaScriptの基本文法

---

## HTML（HyperText Markup Language）

**役割：** Webページの構造と内容を定義

```html
<!DOCTYPE html>
<html>
<head>
    <title>ページタイトル</title>
</head>
<body>
    <h1>見出し</h1>
    <p>段落のテキスト</p>
    <button>ボタン</button>
</body>
</html>
```

**主要タグ：** `<div>`, `<p>`, `<h1>〜<h6>`, `<button>`, `<input>`, `<img>`

---

## CSS（Cascading Style Sheets）

**役割：** HTMLの見た目・デザインを制御

```css
/* セレクタ { プロパティ: 値; } */
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}
```

---

## CSS レイアウトの基本

```css
/* Flexboxレイアウト */
.container {
  display: flex;
  justify-content: center; /* 水平中央揃え */
  align-items: center; /* 垂直中央揃え */
  gap: 20px; /* 要素間の余白 */
}

/* Grid レイアウト */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3列 */
  gap: 10px;
}
```

---

## JavaScript（ES6+）

**役割：** Webページに動的な機能を追加

```javascript
// 変数の宣言
const userName = "田中";
let counter = 0;

// 関数の定義
function greet(name) {
  return `こんにちは、${name}さん！`;
}

// アロー関数
const add = (a, b) => a + b;

// DOM操作
document.getElementById("button").addEventListener("click", () => {
  counter++;
  console.log(`クリック回数: ${counter}`);
});
```

---

## JavaScriptの配列・オブジェクト

```javascript
// 配列
const fruits = ["りんご", "バナナ", "オレンジ"];
fruits.map(fruit => `美味しい${fruit}`);

// オブジェクト
const user = {
  name: "田中太郎",
  age: 25,
  email: "tanaka@example.com",
};

// 分割代入
const { name, age } = user;
console.log(`${name}さんは${age}歳です`);
```

---

## 非同期処理（async/await）

```javascript
// 外部APIからデータを取得
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

// 使用例
fetchUserData(123).then(user => {
  console.log(user.name);
});
```

---

# 〜第三章〜　React

---

## Reactとは？

**JavaScript ライブラリ** - ユーザーインターフェース構築用

### 特徴

- **コンポーネントベース** - 再利用可能なUIパーツ
- **宣言的** - 「どうなってほしいか」を記述
- **仮想DOM** - 高速な画面更新
- **豊富なエコシステム** - ツール・ライブラリが充実

### 使用例

Facebook, Netflix, Airbnb, Instagram など多くのサービスで採用

---

## Reactコンポーネント

```jsx
// 関数コンポーネント（推奨）
function Welcome(props) {
  return <h1>こんにちは、{props.name}さん！</h1>;
}

// アロー関数での書き方
const Welcome = ({ name }) => {
  return <h1>こんにちは、{name}さん！</h1>;
};

// 使用
function App() {
  return (
    <div>
      <Welcome name="田中" />
      <Welcome name="佐藤" />
    </div>
  );
}
```

---

## JSX（JavaScript XML）

**HTML like な記法** でJavaScriptの中にUIを記述

```jsx
const element = <h1>Hello, World!</h1>;

// JavaScript式を埋め込み
const name = "React";
const element2 = <h1>Hello, {name}!</h1>;

// 複数行の場合は()で囲む
const element3 = (
  <div>
    <h1>タイトル</h1>
    <p>説明文です</p>
  </div>
);
```

**注意点：** `className`, `onClick` など、HTML属性名が一部異なる

---

## useState - 状態管理

```jsx
import { useState } from "react";

function Counter() {
  // [状態値, 更新関数] = useState(初期値)
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>
        +1
      </button>
    </div>
  );
}
```

---

## useEffect - 副作用処理

```jsx
import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  // コンポーネント初回表示時 & userIdが変わった時に実行
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, [userId]); // 依存配列

  if (!user) return <div>読み込み中...</div>;

  return <div>ユーザー名: {user.name}</div>;
}
```

---

## イベントハンドリング

```jsx
function ContactForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // デフォルト動作を防ぐ
    console.log("送信されたメール:", email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="メールアドレス"
      />
      <button type="submit">送信</button>
    </form>
  );
}
```

---

## Reactの開発フロー

1. **プロジェクト作成** - `npm create vite@latest my-app -- --template react`
2. **コンポーネント設計** - UIを再利用可能な部品に分割
3. **状態管理** - アプリケーションのデータ流れを設計
4. **API連携** - 外部サービスとのデータやり取り
5. **テスト** - 動作確認とバグ修正
6. **ビルド & デプロイ** - 本番環境への公開

---

# 〜演習問題〜 外部APIからデータを取得しReactで表示してみよう

---

## 本日の演習課題

実際にReactを使って、段階的にアプリケーションを作成していきます！

### 【課題1】ボタンをクリックしたら数値が増えるようにしてみよう

- `useState` を使ったカウンター機能
- イベントハンドリングの基本

### 【課題2】外部APIからデータを取得して表示してみよう

- `fetch` と `useEffect` を使ったAPI連携
- 非同期処理の理解

### 【課題3】ポケモンAPI を使って自由にアプリを作ってみよう

- より実践的なAPI活用

---

## 課題1: カウンターアプリ

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>カウンター: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button onClick={() => setCount(0)}>
        リセット
      </button>
    </div>
  );
}
```

**チャレンジ:** ±10ボタン、2倍ボタンなども追加してみよう！

---

## 課題2: 外部API連携

```jsx
function ShowApiResponse() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("エラー:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>データ取得</button>
      {loading && <p>読み込み中...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```

---

## 課題3: ポケモンAPIアプリ

**PokeAPI** を使用: `https://pokeapi.co/api/v2/pokemon/{id}`

### 実装アイデア

1. **好きなポケモンアンケート**
   - ポケモン一覧表示 → 投票機能
2. **ポケモンバトルゲーム**
   - ランダム2体選出 → 能力値比較
3. **ポケモンおみくじ**
   - ランダムポケモン表示 → 今日の運勢

**自由に選んで** 楽しくコーディングしてみましょう！

---

## 開発環境の準備

```bash
# プロジェクト作成
npm create vite@latest my-pokemon-app -- --template react

# ディレクトリ移動
cd my-pokemon-app

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

**準備完了！** それでは実際にコーディングを始めましょう 🚀

---

## まとめ

### 本日学んだこと

✅ Webページ表示の仕組み
✅ HTML, CSS, JavaScriptの基本
✅ Reactコンポーネントとフック
✅ 外部API連携の実装

### 次のステップ

- より複雑な状態管理（Context API, Redux）
- ルーティング（React Router）
- テスト（Jest, Testing Library）
- パフォーマンス最適化

**継続的な学習** でスキルアップしていきましょう！
