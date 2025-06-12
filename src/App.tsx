import valLogo from "/val_logo.png";
import "./App.css";
import { Counter } from "./components/Counter.tsx";
import { ShowApiResponse } from "./components/ShowApiResponse.tsx";

function App() {
  return (
    <>
      <div>
        <img src={valLogo} className="logo" alt="ヴァル研究所 コーポレートロゴ" />
        ヴァル研究所へようこそ！
      </div>
      <Counter />
      <ShowApiResponse />
    </>
  );
}

export default App;
