import { useContext } from "react";

import {Context} from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Arsenal = () => {
  const navigate = useNavigate()
  const { setUserWeapon } = useContext(Context);

  const { 
    setHouseWeapon,
    setResult
  } = useContext(Context);

  const onSelect = (weaponOfChoice) => {
    setUserWeapon(weaponOfChoice);
    setHouseWeapon("");
    setResult("");
    navigate("/arena");
  };

  return (
    <div className="weapons-container">
      <figure className="triangle">
        <img src="/images/bg-triangle.svg" alt="triangle" />
      </figure>
      <div 
        onClick={ () => onSelect("paper") } 
        id="weapon-of-war-paper" 
        className="weapon-btn"
      >
        <figure id="paper-container" className="weapon-container">
          <img src="/images/icon-paper.svg" alt="paper" />
        </figure>
      </div>

      <div 
        onClick={ () => onSelect("scissors") } 
        id="weapon-of-war-scissors" 
        className="weapon-btn"
      >
          <figure id="scissors-container" className="weapon-container">
            <img src="/images/icon-scissors.svg" alt="scissors" />
          </figure>
      </div>
      
      <div 
        onClick={ () => onSelect("rock") } 
        id="weapon-of-war-rock" 
        className="weapon-btn"
      >
        <figure id="rock-container" className="weapon-container">
          <img src="/images/icon-rock.svg" alt="rock" />
        </figure>
      </div>
    </div>
  );
};

export default Arsenal;