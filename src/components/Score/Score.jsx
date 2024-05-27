import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Context } from "../../context/Context";

const Score = () => {
    const navigate = useNavigate();
    
    const { score } = useContext(Context);

    return (
        <div className="container">
            <ul className="instruments-of-war">
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissors</li>
            </ul>

            <section className="score-container" onClick={() => {navigate("/")}}>
            <h1>score</h1>
            <p className="score">{score}</p>
            </section>
        </div>
    );
};

export default Score;
