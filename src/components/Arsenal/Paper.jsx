const Paper = ({ onSelect }) => {
  return (
    <button onClick={ () => onSelect("paper") } id="weapon-of-war-paper" className="weapon-btn" value="paper">
      <figure id="paper-container" className="weapon-container">
        <img src="/images/icon-paper.svg" alt="paper" />
      </figure>
    </button>
  );
};

export default Paper;
