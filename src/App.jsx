import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Rules from "./components/Rules/Rules";

import { Context } from "./context/Context";
import Arena from "./components/Arena/Arena";

function App() {
  const [location, setLocation] = useState("home");
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(12);

  const contextValue = {
    location,
    setLocation,
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
