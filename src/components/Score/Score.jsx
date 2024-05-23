import { useContext } from "react";

import { Context } from "../../context/Context";

const Score = () => {
    const { score } = useContext(Context);
    console.log(score);

    return (
        <div className="container">
            <ul className="instruments-of-war">
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissors</li>
            </ul>

            <section className="score-container">
            <h1>score</h1>
            <p>{score}</p>
            </section>
        </div>
    );
};

export default Score;
