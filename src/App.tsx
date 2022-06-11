import React, { useState } from "react";
import { Tablo } from "./components/Tablo/Tablo";
import './App.css';

function App() {

  let [num, setNum] = useState(0)

  function incrementNumber() {
    if (num < 5) {
      setNum(num = num + 1)
    }
  }

  function resetNumber() {
      setNum(0)
  }

  return (
    <div className="App">Counter For Final Work Of The Month
      <Tablo
        incrementNumber={incrementNumber}
        resetNumber={resetNumber}
        incrementDigit={num}
         />
    </div>
  )
}

export default App;
