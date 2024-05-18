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
        <button className="weapon-of-war-paper">
          <figure className="paper-container">
            <img src="/public/images/icon-paper.svg" alt="paper" />
          </figure>
        </button>
        <button className="weapon-of-war-scissors">
          <figure className="scissors-container">
            <img src="/public/images/icon-scissors.svg" alt="scissors" />
          </figure>
        </button>
        <button className="weapon-of-war-rock">
          <figure className="rock-container">
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
