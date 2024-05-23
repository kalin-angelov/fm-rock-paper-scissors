import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Rules from "./components/Rules/Rules";
import Arena from "./components/Arena/Arena";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { Context } from "./context/Context";

function App() {
  const [location, setLocation] = useState("home");
  const [score, setScore] = useLocalStorage("userScore", {score: 0});
  const [selected, setSelected] = useLocalStorage("userSelection", { selected: "" });

  const contextValue = {
    score,
    setScore,
    location,
    setLocation,
    selected,
    setSelected,
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
