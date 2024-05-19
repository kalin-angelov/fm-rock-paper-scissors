import Score from "../Score/Score";
import Rock from "../Arsenal/Rock";
import Paper from "../Arsenal/Paper";
import Scissors from "../Arsenal/Scissors";
import RulesBtn from "../Rules/RulesBtn";

import { Context } from "../../context/Context";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Arena = () => {
  const navigate = useNavigate();
  const { selected, setLocation } = useContext(Context);
  const [result, setResult] = useState("You Lose");
  
  const navigateToHome = () => {
    setResult("");
    navigate("/");
  };

  return (

    <div className="arena-section">
      <Score />

      <div className="arena" style={!result ? {marginBottom: 229} : null}>
        <div className="user-choice">
          {selected === "rock" && <Rock />}
          {selected === "paper" && <Paper />}
          {selected === "scissors" && <Scissors />}
          <p>You Picked</p>
        </div>

        <div className="house-choice">
          <div className="empty"></div>
          <p>The House Picked</p>
        </div>
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
