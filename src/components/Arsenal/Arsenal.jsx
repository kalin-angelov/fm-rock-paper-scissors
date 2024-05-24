import { useContext } from "react";

import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

import {Context} from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Arsenal = () => {
  const navigate = useNavigate()
  const {windowSize, setArena, setSelected } = useContext(Context);

  const onSelect = (weaponOfChoice) => {
    if (windowSize >= 1024) {
      setArena(true);
    };
    setSelected(weaponOfChoice);
    navigate("/arena");
  };

  return (
    <div className="weapons-container">
      <Paper onSelect={onSelect} />
      <Scissors onSelect={onSelect} />
      <Rock onSelect={onSelect} />
    </div>
  )
}

export default Arsenal;