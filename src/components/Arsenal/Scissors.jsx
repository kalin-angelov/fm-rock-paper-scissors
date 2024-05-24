const Scissors = ({ onSelect, arena }) => {
  return (
    <button 
      onClick={ () => onSelect("scissors") } 
      id="weapon-of-war-scissors" 
      className={arena ? "weapon-arena" : "weapon-btn"} 
    >
        <figure id="scissors-container" className={arena ? "weapon-arena" : "weapon-container"}>
            <img src="/images/icon-scissors.svg" alt="scissors" />
        </figure>
    </button>
  );
};

export default Scissors;