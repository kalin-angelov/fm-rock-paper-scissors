import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Arena from "./components/Arena/Arena";

import { useSessionStorage } from "./hooks/useSessionStorage";
import { Context } from "./context/Context";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [score, setScore] = useSessionStorage("userScore", {score: 0});
  const [userWeapon, setUserWeapon] = useSessionStorage("userSelection", { userSelected: "" });
  const [houseWeapon, setHouseWeapon] = useSessionStorage("houseSelection", { houseSelected: "" });
  const [result, setResult] = useSessionStorage("resultOfMach", { result: "" });

  const contextValue = {
    windowSize,
    score,
    setScore,
    userWeapon,
    setUserWeapon,
    houseWeapon,
    setHouseWeapon,
    result,
    setResult
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
