const Rock = ({ onSelect }) => {
  return (
    <button onClick={ () => onSelect("rock") } id="weapon-of-war-rock" className="weapon-btn">
        <figure id="rock-container" className="weapon-container">
            <img src="/images/icon-rock.svg" alt="rock" />
        </figure>
    </button>
  )
}

export default Rock;
