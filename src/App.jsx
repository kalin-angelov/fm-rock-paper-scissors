import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Arena from "./components/Arena/Arena";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { Context } from "./context/Context";

function App() {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [arena, setArena] = useState(false);
  const [score, setScore] = useLocalStorage("userScore", {score: 0});
  const [selected, setSelected] = useLocalStorage("userSelection", { selected: "" });

  const contextValue = {
    windowSize,
    arena,
    setArena,
    score,
    setScore,
    selected,
    setSelected,
  };

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", windowSizeHandler);

    return(() => {
      window.removeEventListener("resize", windowSizeHandler);
    });

  },[]);

  return (
    <Context.Provider value={contextValue} >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arena" element={<Arena />} />
        </Routes>
      </>
    </Context.Provider>
  );
};

export default App;
