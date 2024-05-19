const Scissors = ({ onSelect }) => {
  return (
    <button onClick={ () => onSelect("scissors") } id="weapon-of-war-scissors" className="weapon-btn">
        <figure id="scissors-container" className="weapon-container">
            <img src="/public/images/icon-scissors.svg" alt="scissors" />
        </figure>
    </button>
  );
};

export default Scissors;