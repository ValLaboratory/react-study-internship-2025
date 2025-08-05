---
marp: true
theme: mytheme
paginate: true
size: 16:9
---

TODO: 開発環境セットアップを入れる
TODO: テスト問題の解説を入れる
TODO: 講師自己紹介
TODO: TypeScriptの基礎を入れる

株式会社ヴァル研究所

# TypeScript勉強会 for Internship

maas開発部
mixway team　鈴木 涼平

---

# 講師自己紹介

## 鈴木 涼平

<div class="flex">
  <img src="./icon.png" class="icon">
  <div class="flex-grow">

    2024年 新卒入社
    2024年7月〜 mixway APIの開発・運用
    2025年6月〜 AIプロジェクト参加

    一昨日、会社の近くを歩いていたら、お笑い芸人の方にテレビのインタビューを受けました！

</div>
</div>

---

# もくじ

- **導入** - 本日の内容について説明
- **第一章** - Webページが表示されるしくみ
- **第二章** - HTML, CSS, JavaScriptの基本文法
- **第三章** - React
- **演習問題** - 外部APIからデータを取得しReactで表示してみよう

---

# 本日の勉強会の内容について

---

## 今日やること

- 今後開催されるインターンシップに向けて、Webプログラミング(React + TypeScript)の基礎を学ぶ

- 17時台 ・・・ 講義メイン

  - **第一章** - Webページが表示されるしくみ
  - **第二章** - HTML, CSS, JavaScriptの基本文法
  - **第三章** - React

- 17:45〜 質疑応答
- 17:55〜 休憩
- 18:05〜 ・・・ 演習問題

  - 手を動かして実際にReactでWebサイトを作ってみましょう！

---

## 今日のゴール

- Webページが表示されるしくみを学ぶ
- ReactとTypeScriptによるWebプログラミングを体験する

---

## ⚠️ 注意事項

- この勉強会内では、AIを活用してOKです。
- 質問や疑問点があったら、マイクをonにして声をかけるか、チャットで質問してください。
  - 質疑応答の時間も設けます
- この講義資料は公開しています。

---

# 〜第一章〜　Webページが表示されるしくみ

---

## まず初めにアンケート

Webサイトを自分で作ったことがある or Webサイトの作り方を学んだことがある人は手を挙げてみてください！

※ 当てたりしないので、気軽に手を挙げてください :bow:

---

## アンケートその2

Web APIを使ったことがある or Web APIの使い方を学んだことがある人は手を挙げてみてください！

※ 当てたりしないので、気軽に手を挙げてください :bow:

---

## Webページが表示されるまで

ブラウザのアドレスバーにURLを入力した後、
どのようにWebページが表示されるのかを学んでいきましょう。

<img
  src="./browser.svg"
  alt="ブラウザのアイコン"
  width="30%"
/>

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

## IPアドレスとドメイン名

### IPアドレス

- **192.168.1.1** のような数字の組み合わせ
- コンピューター同士が通信するための住所
- 人間には覚えにくい...😅

### ドメイン名

- **google.com**, **github.com** のような文字列
- 人間が覚えやすい形式
- **DNS**（Domain Name System）でIPアドレスに変換

```
google.com → DNS → 172.217.175.14
```

---

## HTTPとHTTPS

### HTTP（HyperText Transfer Protocol）

- Webページを送受信するためのルール
- **ポート80** で通信
- データが暗号化されていない ⚠️

### HTTPS（HTTP Secure）

- HTTPに **SSL/TLS暗号化** を追加
- **ポート443** で通信
- 🔒 **セキュア** - パスワードや個人情報も安全

**現在はHTTPSが標準** - ブラウザも推奨！

---

## Webページを構成する3つの技術

| 技術           | 役割                   | 例                             |
| -------------- | ---------------------- | ------------------------------ |
| **HTML**       | 構造・内容             | 文章、見出し、リンク           |
| **CSS**        | デザイン・見た目       | 色、レイアウト、アニメーション |
| **JavaScript** | 動作・インタラクション | ボタンクリック、データ取得     |

これらを **組み合わせて** Webページを作ります

---

## レスポンスの中身を見てみよう

### ブラウザの開発者ツール

**F12** または **右クリック → 検証** で開く

1. **Elements** - HTML構造
2. **Network** - 通信内容
3. **Console** - JavaScript実行結果

### 実際にやってみよう！

1. 好きなWebサイトを開く
2. F12で開発者ツールを開く
3. Networkタブで通信を確認

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

## HTMLの基本構造

```html
<!DOCTYPE html>  <!-- HTML5であることを宣言 -->
<html lang="ja">  <!-- 言語設定 -->
<head>
    <!-- ページのメタ情報 -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ページタイトル</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 実際に表示される内容 -->
    <header>ヘッダー</header>
    <main>メインコンテンツ</main>
    <footer>フッター</footer>
</body>
</html>
```

---

## よく使うHTMLタグ

### テキスト関連

```html
<h1>大見出し</h1>
<h2>中見出し</h2>
<p>段落のテキスト</p>
<span>通常のテキスト</span> <strong>強調</strong> <em>斜体</em>
```

### リスト

```html
<ul>  <!-- 順序なしリスト -->
    <li>項目1</li>
    <li>項目2</li>
</ul>
<ol>  <!-- 順序ありリスト -->
    <li>手順1</li>
    <li>手順2</li>
</ol>
```

---

## 入力要素

```html
<form>
    <label for="name">名前:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">メール:</label>
    <input type="email" id="email" name="email">
    
    <label for="message">メッセージ:</label>
    <textarea id="message" name="message"></textarea>
    
    <button type="submit">送信</button>
</form>
```

### 入力タイプ

`text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`

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

## CSSセレクタの種類

```css
/* 要素セレクタ */
h1 {
  color: blue;
}

/* クラスセレクタ */
.button {
  background: red;
}

/* IDセレクタ */
#header {
  height: 80px;
}

/* 属性セレクタ */
input[type="text"] {
  border: 1px solid gray;
}

/* 疑似クラス */
a:hover {
  color: red;
}
button:disabled {
  opacity: 0.5;
}

/* 子要素セレクタ */
nav > ul {
  list-style: none;
}
```

---

## CSSボックスモデル

```css
.box {
  width: 300px; /* 幅 */
  height: 150px; /* 高さ */
  padding: 40px; /* 内余白 */
  border: 5px solid black; /* 境界線 */
  margin: 40px; /* 外余白 */
}
```

![w:700](./box-model.png)

---

## CSSでできること

- **色・フォント** - テキストの色やフォントサイズを変更
- **レイアウト** - 配置を横並びにするなど
- **アニメーション** - 要素の動きをつける
- **レスポンシブデザイン** - 画面サイズに応じてスタイルを変える

---

## JavaScript（ES6+）

**役割：** プログラミングを使ってWebページに動的な機能を追加

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

## JavaScriptの基本文法

### テンプレートリテラル

```javascript
const name = "田中";
const age = 25;

// 従来の書き方
const message1 = "私の名前は" + name + "で、" + age + "歳です。";

// ES6+の書き方
const message2 = `私の名前は${name}で、${age}歳です。`;
```

### 分割代入

```javascript
// 配列の分割代入
const [first, second] = ["りんご", "バナナ"];

// オブジェクトの分割代入
const user = { name: "田中", age: 25 };
const { name, age } = user;
```

---

## 配列の便利メソッド

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - 各要素を変換
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - 条件に合う要素を抽出
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - 累積処理
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find - 条件に合う最初の要素
const found = numbers.find(n => n > 3);
// 4
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

## なぜReactを使うのか？

### 従来のJavaScript開発の課題

- **DOM操作が複雑** - 手動でHTML要素を更新
- **状態管理が困難** - データと画面の同期が大変
- **コードの再利用性が低い** - 似たような処理を何度も書く

### Reactが解決すること

✅ **宣言的UI** - 「こうなってほしい」を記述するだけ
✅ **自動的な画面更新** - データが変わると自動で再描画
✅ **コンポーネント化** - 再利用可能なパーツを作れる

---

## 仮想DOM（Virtual DOM）

### 従来のDOM操作

```javascript
// 毎回DOMを直接更新（重い処理）
document.getElementById("counter").textContent = count;
document.getElementById("list").innerHTML = items.map(/* ... */);
```

### Reactの仮想DOM

```jsx
// JavaScriptオブジェクトとして表現（軽い処理）
const virtualDOM = {
  type: "div",
  props: { id: "counter" },
  children: [count],
};
```

Reactが **差分だけを効率的に更新** → **高速な画面更新**

---

## プロジェクトの作成

```bash
# Vite（高速ビルドツール）を使用
npm create vite@latest my-react-app -- --template react

# プロジェクトディレクトリに移動
cd my-react-app

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### プロジェクト構造

```
my-react-app/
├── src/
│   ├── App.jsx      # メインコンポーネント
│   ├── main.jsx     # エントリーポイント
│   └── App.css      # スタイル
├── public/          # 静的ファイル
└── package.json     # 設定ファイル
```

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

## useStateの詳細

### 複数の状態を管理

```jsx
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  // オブジェクトで管理することも可能
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser, // 既存のプロパティを展開
      [field]: value, // 指定したフィールドを更新
    }));
  };
}
```

---

## useStateの注意点

### ❌ 直接的な変更は禁止

```jsx
// ダメな例
const [items, setItems] = useState([]);
items.push(newItem); // 直接変更 - Reactが変更を検知できない

// ✅ 正しい例
setItems(prevItems => [...prevItems, newItem]);
```

### 前の状態に基づく更新

```jsx
// ❌ ダメな例（競合状態の可能性）
setCount(count + 1);

// ✅ 正しい例（安全）
setCount(prevCount => prevCount + 1);
```

---

## useEffectのパターン

### 1. コンポーネント初回表示時のみ実行

```jsx
useEffect(() => {
  console.log("コンポーネントがマウントされました");
}, []); // 空の依存配列
```

### 2. 特定の値が変更された時に実行

```jsx
useEffect(() => {
  document.title = `カウント: ${count}`;
}, [count]); // countが変わった時のみ実行
```

### 3. クリーンアップが必要な処理

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("1秒経過");
  }, 1000);

  // クリーンアップ関数
  return () => {
    clearInterval(timer);
  };
}, []);
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

# 〜演習問題〜 外部APIからデータを取得しReactで表示してみよう

---

## 本日の演習課題

実際にReactを使って、段階的にアプリケーションを作成していきます！

### 【課題1】ボタンをクリックしたら数値が増えるようにしてみよう

- `useState` を使ったカウンター機能
- イベントハンドリングの基本

### 【課題2】外部APIからデータを取得して表示してみよう

- clickイベントを使ったAPI連携
- 非同期処理の理解

### 【課題3】ポケモンAPI を使って自由にアプリを作ってみよう

- より実践的なAPI活用

---

## 課題1: カウンターアプリ

`+1` ボタンをクリックするとカウント数値が増えるようにしてみましょう。

- 編集対象：`src/components/Counter.tsx`

TODO: 画像を載せる

---

## 課題1: カウンターアプリ

```jsx
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter outline-effect">
      <span className="counter-result">{count}</span>
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
```

**チャレンジ:** リセットボタン、-1ボタン、±10ボタン、2倍ボタンなども追加してみよう！

---

## 課題2: 外部API連携

[PokeAPI](https://pokeapi.co/)を使って、ポケモンの情報を取得して表示してみましょう。

- 編集対象：`src/components/ShowApiResponse.tsx`
- PokeAPI公式ドキュメント: [PokeAPI Documentation](https://pokeapi.co/docs/v2)

TODO: 画像を載せる

---

## 課題2: 外部API連携

```jsx
export function ShowApiResponse() {
  // 変数`pokemon`の定義にuseStateを使うように変更してみましょう
  const pokemon = {
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    sprites: {
      front_default: "",
    },
  };

  return (
    <div className="show-api-response outline-effect">
      <h2>2. APIレスポンス取得</h2>
      <p>APIからデータを取得し表示してみましょう。</p>
      <button
        onClick={async () => {
          // getPokemon()関数またはgetRandomPokemon()関数を使い、APIからデータを取得し表示してみましょう。
        }}
      >
        取得
      </button>
      {pokemon && (
        <div className="pokemon-info">
          <h3>ポケモン情報</h3>
          <p>ID: {pokemon.id}</p>
          <p>名前: {pokemon.name}</p>
          <p>高さ: {pokemon.height}</p>
          <p>体重: {pokemon.weight}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
}
```

---

## 課題3: ポケモンAPIアプリ

**PokeAPI** を使用: `https://pokeapi.co/api/v2/pokemon/{id}`

### お題

1. **ポケモン進化情報表示**: ポケモンの進化先を表示
2. **好きなポケモンアンケート**: ポケモン一覧表示 → 投票機能
3. **ポケモンバトルゲーム**: ランダム2体選出 → 能力値比較
4. **ポケモンおみくじ**: ランダムポケモン表示 → 今日の運勢
5. **ポケモンクイズ**: ランダムポケモンの情報を表示 → 4択クイズ形式で答える
6. **その他、自由なアイデアで実装**: 他のAPIを使ってみてもいいです

---

## 課題1〜3を実装してみましょう！

- 時間：18:45まで
- 質問がある場合は、マイクをonにして声をかけるか、チャットで質問してください。
- 18:45になったら、改めて質疑応答の時間を設けます。

---

## まとめ

### 本日学んだこと

- Webページ表示の仕組み
- HTML, CSS, JavaScriptの基本
- React
- 外部API連携の実装

---

## 質疑応答

---

# おつかれさまでした :tada:

---

# おまけ：課題1回答

```diff
  export function Counter() {
    // Note:
    // 変数countには、現在のカウント数値が入っている
    const [count, setCount] = useState(0);

    return (
      <div className="counter outline-effect">
        {/* カウント数値の表示 */}
        <span className="counter-result">{count}</span>
        {/* カウントアップボタン */}
        <button
          onClick={() => {
            console.log("ボタンがクリックされました");
+          setCount(count + 1);
          }}
        >
          +1
        </button>
      </div>
    );
  }
```

---

# おまけ：課題2回答

```diff
  export function ShowApiResponse() {
+   const [pokemon, setPokemon] = useState({
+     id: 0,
+     name: "",
+     height: 0,
+     weight: 0,
+     sprites: {
+       front_default: "",
+     },
+   });

    return (
      <div className="show-api-response outline-effect">
        <h2>2. APIレスポンス取得</h2>
        <p>APIからデータを取得し表示してみましょう。</p>
        <button
          onClick={async () => {
+           const pokemon = await getPokemon("eevee");
+           setPokemon(pokemon);
          }}
        >
          取得
        </button>
        {pokemon && (
          <div className="pokemon-info">
            <h3>ポケモン情報</h3>
            <p>ID: {pokemon.id}</p>
            <p>名前: {pokemon.name}</p>
            <p>高さ: {pokemon.height}</p>
            <p>体重: {pokemon.weight}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        )}
      </div>
    );
  }
```
