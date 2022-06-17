import "./button.css";

const Button = ({ text }) => {
  return (
    <>
      <div className="form-button">
        <button type="submit" value="Submit">
          {text}
        </button>
      </div>
    </>
  );
};
export default Button;
