import { useContext } from "react";

import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

import {Context} from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Arsenal = () => {
  const navigate = useNavigate()
  const { setLocation, setSelected } = useContext(Context);

  const onSelect = (weaponOfChoice) => {
    setSelected(weaponOfChoice);
    navigate("/arena");
  };

  return (
    <div className="weapons-container">
      <Paper onSelect={onSelect} setSelected={setSelected} />
      <Scissors onSelect={onSelect} setSelected={setSelected}/>
      <Rock onSelect={onSelect} setSelected={setSelected}/>
    </div>
  )
}

export default Arsenal;