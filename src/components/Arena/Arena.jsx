import Score from "../Score/Score";
import RockIcon from "../Icons/RockIcon";
import RockDesktopIcon from "../Icons/RockDesktopIcon";
import PaperIcon from "../Icons/PaperIcon";
import PaperDesktopIcon from "../Icons/PaperDesktopIcon";
import ScissorsIcon from "../Icons/ScissorsIcon";
import ScissorsDesktopIcon from "../Icons/ScissorsDesktopIcon";
import Rules from "../Rules/Rules";

import { Context } from "../../context/Context";
import { houseChoice } from "../../utils/houseChoice";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Arena = () => {
  const navigate = useNavigate();

  const { 
    windowSize,
    score,
    setScore,
    userWeapon,
    houseWeapon, 
    setHouseWeapon,
    result,
    setResult
  } = useContext(Context);
  
  useEffect(() => {
    if (houseWeapon === "") {
      setTimeout(() => {
        const result = houseChoice(userWeapon, score);
        setHouseWeapon(result.houseWeapon);
        setResult(result.result);
        setScore(result.score);
      }, "2000");
    };
  },[]);
  
  const navigateToHome = () => {
    setResult("");
    setHouseWeapon("");
    navigate("/");
  };

  return (
    <div className="arena-section">
      <Score />

      <div className="arena" style={!result ? {marginBottom: 223} : null}>
        <div className={result === "You Won" ? "user-choice winner" : "user-choice"}
          style={result === "You Won" ? {zIndex: 0} : {zIndex: 1}}
        >
          {userWeapon === "rock" ? windowSize >= 1024 ? <RockDesktopIcon /> :  <RockIcon /> : null}
          {userWeapon === "paper" ? windowSize >= 1024 ? <PaperDesktopIcon /> :  <PaperIcon /> : null}
          {userWeapon === "scissors" ? windowSize >= 1024 ? <ScissorsDesktopIcon /> :  <ScissorsIcon /> : null}
        </div>
        <p className="user-selected">You Picked</p>

        <div className={
            result === "" || result === "You Won" || result === "Draw" 
            ? "house-choice" : "house-choice winner"
          }
          style={result === "You Won" ? {zIndex: 1} : {zIndex: 0}}
        >
          {houseWeapon === "" ? 
            <div className="empty"></div>
            :
            <>
              {houseWeapon === "rock" ? windowSize >= 1024 ? <RockDesktopIcon /> :  <RockIcon /> : null}
              {houseWeapon === "paper" ? windowSize >= 1024 ? <PaperDesktopIcon /> :  <PaperIcon /> : null}
              {houseWeapon === "scissors" ? windowSize >= 1024 ? <ScissorsDesktopIcon /> :  <ScissorsIcon /> : null}
            </>
           
          }
        </div>
        <p className="house-selected">The House Picked</p>

        {result && 
        <>
          <p className="result">{result}</p>
          <button className="play-again-btn" onClick={navigateToHome}>Play again</button>
        </>
      }
      </div>
      <Rules />
    </div>
  );
};

export default Arena;