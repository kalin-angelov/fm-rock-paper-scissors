import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Context } from "../../context/Context";

const Score = () => {
    const navigate = useNavigate();
    
    const { score } = useContext(Context);

    return (
        <header className="container">
            <figure className="logo-container">
                <img src="/images/logo.svg" alt="logo" />
            </figure>

            <section className="score-container" onClick={() => {navigate("/")}}>
            <h1>score</h1>
            <p className="score">{score}</p>
            </section>
        </header>
    );
};

export default Score;
