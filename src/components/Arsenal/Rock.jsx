const Rock = ({ onSelect, arena }) => {
  return (
    <button 
      onClick={ () => onSelect("rock") } 
      id="weapon-of-war-rock" 
      className={arena ? "weapon-arena" : "weapon-btn"} 
    >
      <figure id="rock-container" className={arena ? "weapon-arena" : "weapon-container"}>
        <img src="/images/icon-rock.svg" alt="rock" />
      </figure>
    </button>
  )
}

export default Rock;
