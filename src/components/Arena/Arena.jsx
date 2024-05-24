import Score from "../Score/Score";
import Rock from "../Arsenal/Rock";
import Paper from "../Arsenal/Paper";
import Scissors from "../Arsenal/Scissors";
import Rules from "../Rules/Rules";

import { Context } from "../../context/Context";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Arena = () => {
  const navigate = useNavigate();
  const { windowSize, arena, setArena, selected, score, setScore } = useContext(Context);
  const [result, setResult] = useState("");
  const [houseHand, setHouseHand] = useState("");

  const lose = "You Lose";
  const won = "You Won";
  const draw = "Draw";

  const noPoint = score + 0;
  const wonPoint = score + 1;
  const losePoint = (score - 1 < 0) ? 0 : score - 1;

  useEffect(() => {
    setTimeout(() => {
      const houseChoice = Math.floor(Math.random() * 3) + 1;

      if (houseChoice === 1) {
        setHouseHand(<Paper arena={arena}/>);
        switch (selected) {
          case "paper":
            setResult(draw);
            setScore(noPoint);
            break;
          case "rock":
            setResult(lose);
            setScore(losePoint);
            break;
          case "scissors":
            setResult(won);
            setScore(wonPoint);
            break;
        }
      } else if (houseChoice === 2){
        setHouseHand(<Scissors arena={arena}/>);
        switch (selected) {
          case "scissors":
            setResult(draw);
            setScore(noPoint);
            break;
          case "paper":
            setResult(lose);
            setScore(losePoint);
            break;
          case "rock":
            setResult(won);
            setScore(wonPoint);
            break;
        }
      } else {
        setHouseHand(<Rock arena={arena}/>);
        switch (selected) {
          case "rock":
            setResult(draw);
            setScore(noPoint);
            break;
          case "scissors":
            setResult(lose);
            setScore(losePoint);
            break;
          case "paper":
            setResult(won);
            setScore(wonPoint);
            break;
        }
      }
    }, "2000");
    
  },[]);
  
  const navigateToHome = () => {
    setResult("");
    navigate("/");
    if (windowSize >= 1024) {
      setArena(false);
    };
  };

  return (

    <div className="arena-section">
      <Score />

      <div className="arena" style={!result ? {marginBottom: 223} : null}>
        <div className={result === "You Won" ? "user-choice winner" : "user-choice"}
          style={result === "You Won" ? {zIndex: 0} : {zIndex: 1}}
        >
          {selected === "rock" && <Rock arena={arena} />}
          {selected === "paper" && <Paper arena={arena}/>}
          {selected === "scissors" && <Scissors arena={arena}/>}
        </div>
        <p>You Picked</p>

        <div className={
            result === "" || result === "You Won" || result === "Draw" 
            ? "house-choice" : "house-choice winner"
          }
          style={result === "You Won" ? {zIndex: 1} : {zIndex: 0}}
        >
          {houseHand === "" ? 
            <div className="empty"></div>
            :
            houseHand
          }
        </div>
        <p>The House Picked</p>

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
