import Score from "../Score/Score";
import Rock from "../Arsenal/Rock";
import Paper from "../Arsenal/Paper";
import Scissors from "../Arsenal/Scissors";
import RulesBtn from "../Rules/RulesBtn";

import { Context } from "../../context/Context";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Arena = () => {
  const navigate = useNavigate();
  const { selected, score, setScore } = useContext(Context);
  const [result, setResult] = useState("");
  const [houseHand, setHouseHand] = useState("");
  console.log(selected);

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
        setHouseHand(<Paper />);
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
        setHouseHand(<Scissors />);
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
        setHouseHand(<Rock />);
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
  };

  return (

    <div className="arena-section">
      <Score />

      <div className="arena" style={!result ? {marginBottom: 223} : null}>
        <div className={result === "You Won" ? "user-choice winner" : "user-choice"}
          style={result === "You Won" ? {zIndex: 0} : {zIndex: 1}}
        >
          {selected === "rock" && <Rock />}
          {selected === "paper" && <Paper />}
          {selected === "scissors" && <Scissors />}
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
      </div>
     
      {result && 
        <>
          <p className="result">{result}</p>
          <button className="play-again-btn" onClick={navigateToHome}>Play again</button>
        </>
      }
      
      <RulesBtn />
    </div>
  );
};

export default Arena;
