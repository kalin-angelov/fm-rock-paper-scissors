import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <section className="rules-section">
        <h1>Rules</h1>
        <figure className="rules-explanation">
            <img src="/public/images/image-rules.svg" alt="rules" />
        </figure>
        <button onClick={navigateToHome}>
            <figure>
                <img src="/public/images/icon-close.svg" alt="close-btn" />
            </figure>
        </button>
    </section>
  );
};

export default Rules;
