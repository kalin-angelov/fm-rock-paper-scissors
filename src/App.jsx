import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Rules from "./components/Rules/Rules";

import { Context } from "./context/Context";
import Arena from "./components/Arena/Arena";

function App() {
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const contextValue = {
    selected,
    setSelected,
    score,
    setScore
  };

  return (
    <Context.Provider value={contextValue} >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </>
    </Context.Provider>
  );
};

export default App;
