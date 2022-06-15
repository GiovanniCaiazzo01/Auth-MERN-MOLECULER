const InputWithLabel = ({ type, id, name, value, onChange, required }) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputWithLabel;
