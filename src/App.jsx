import IncreaseButton from "./components/IncreaseButton";
import DeacreaseButton from "./components/DeacreaseButton";
import ResestButton from "./components/ResestButton";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [count, Setcout] = useState(0);

  const increase = () => {
    Setcout((prevState) => count + 1);
  };

  const decrease = () => {
    Setcout((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  const reset = () => {
    Setcout(0);
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-100">
      <div>
        <h1>{count}</h1>
        <IncreaseButton increase={increase} />
        <ResestButton reset={reset} />
        <DeacreaseButton decrease={decrease} />
      </div>
    </div>
  );
}

export default App;
