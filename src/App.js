import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [showButtons, setShowButtons] = useState(false);
  const handleButtonClick = (value) => {
    setValue(value);
    setShowButtons(false);
  };

  return (
    <>
      <button className="mainBtn" onClick={() => setShowButtons(true)}>
        {value}
      </button>

      {showButtons ? (
        <div className="selectorsBtn">
          <button onClick={() => handleButtonClick(1)}>1</button>
          <button onClick={() => handleButtonClick(2)}>2</button>
          <button onClick={() => handleButtonClick(3)}>3</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
