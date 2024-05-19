import { useContext } from "react";

import Score from "../Score/Score";
import Arsenal from "../Arsenal/Arsenal";
import RulesBtn from "../Rules/RulesBtn";

import { Context } from "../../context/Context";
import Arena from "../Arena/Arena";

const Home = () => {
  const { location} = useContext(Context);

  return (
    <div className="home-section">
      <Score />

      {
        location === "home" ? 
        <Arsenal />
        :
        <Arena />
      }
      
      <RulesBtn />
    </div>
  );
};

export default Home;
