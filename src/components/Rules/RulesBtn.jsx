import { useNavigate } from "react-router-dom";

const RulesBtn = () => {
    const navigate = useNavigate();

    const navigateToRules = () => {
        navigate("/rules");
    };

    return (
        <div className="rules-btn-container">
            <button onClick={navigateToRules}>Rules</button>
        </div>
    );
};

export default RulesBtn;