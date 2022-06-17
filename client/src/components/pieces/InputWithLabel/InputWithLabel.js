import "./InputWithLabel.css";

const InputWithLabel = ({ type, id, name, value, onChange, required }) => {
  return (
    <>
      <div className="form-label">
        <label htmlFor={id}>{id}</label>
      </div>
      <div className="form-input">
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputWithLabel;
