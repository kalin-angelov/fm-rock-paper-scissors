const Home = () => {
  return (
    <div className="home-section">
      <div className="container">
        <ul className="instruments-of-war">
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissors</li>
        </ul>
        <section className="score-container">
          <h1>score</h1>
          <p>12</p>
        </section>
      </div>

      <div className="weapons-container">
        <button id="weapon-of-war-paper" className="weapon-btn">
          <figure id="paper-container" className="weapon-container">
            <img src="/public/images/icon-paper.svg" alt="paper" />
          </figure>
        </button>
        <button id="weapon-of-war-scissors" className="weapon-btn">
          <figure id="scissors-container" className="weapon-container">
            <img src="/public/images/icon-scissors.svg" alt="scissors" />
          </figure>
        </button>
        <button id="weapon-of-war-rock" className="weapon-btn">
          <figure id="rock-container" className="weapon-container">
            <img src="/public/images/icon-rock.svg" alt="rock" />
          </figure>
        </button>
      </div>

      <div className="rules-btn-container">
        <button>Rules</button>
      </div>
    </div>
  );
};

export default Home;
