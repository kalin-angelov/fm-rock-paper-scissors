import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  const ref = useRef();
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showRules && !ref.current.contains(e.target)) {
        setShowRules(!showRules);
      };
    };
 
    window.addEventListener("click", handleClickOutside);

    return (() => {
      window.removeEventListener("click", handleClickOutside);
    });

  },[]);

  const handleToggle = () => {
    setShowRules(!showRules);
  };
  
  return (
    <>
    { showRules &&
      <div className="rules-section" onClick={handleToggle} ref={ref}>
        
          <div className="main-container">
          <section>
            <h1>Rules</h1>
            <button type="button">
              <figure>
                <img src="/images/icon-close.svg" alt="close-btn" />
              </figure>
            </button>
          </section>
          
          <figure className="rules-explanation">
            <img src="/images/image-rules.svg" alt="rules" />
          </figure>
        </div>
      </div>
    }

    <footer className="rules-btn-container">

      <Link 
        to="https://fm-rock-paper-scissors-lizard-spock.vercel.app/" 
        target="_blank"
      >
      Lizard Spock
      </Link>
      <button type="button" onClick={handleToggle}>Rules</button>
    </footer>
    </>
  );
};

export default Rules;
