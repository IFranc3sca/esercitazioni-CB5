import "./index.css";

const Button = ({ isModalEnabled, func }) => {
  return (
    <button
      onClick={func}
      className={`Button ${isModalEnabled ? "active" : "passive"}  `}
    >
      {isModalEnabled ? "x" : "+"}
    </button>
  );
};

export default Button;
