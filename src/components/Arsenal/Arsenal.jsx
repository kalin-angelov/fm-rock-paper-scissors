import { useContext } from "react";

import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

import {Context} from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Arsenal = () => {
  const navigate = useNavigate()
  const { setSelected } = useContext(Context);

  const onSelect = (weaponOfChoice) => {
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