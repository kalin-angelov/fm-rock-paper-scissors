const Paper = ({ onSelect, arena }) => {
  return (
    <button 
      onClick={ () => onSelect("paper") } 
      id="weapon-of-war-paper" 
      className={arena ? "weapon-arena" : "weapon-btn"} 
    >
      <figure id="paper-container" className={arena ? "weapon-arena" : "weapon-container"}>
        <img src="/images/icon-paper.svg" alt="paper" />
      </figure>
    </button>
  );
};

export default Paper;
