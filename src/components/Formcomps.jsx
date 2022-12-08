import React from "react";

export const Select = ({
  label,
  className,
  optstyle,
  selstyle,
  options,
  onChange,
  required,
  name,
  id,
}) => {
  return (
    <div className={`state ${className}`}>
      <label htmlFor="state">{label}</label>
      <select
        style={selstyle}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
      >
        <optgroup>
          {options.map((option, i) => {
            return (
              <option key={i} style={{ ...optstyle }} value={option}>
                {option}
              </option>
            );
          })}
        </optgroup>
      </select>
    </div>
  );
};
export const SimpleText = ({
  placeholder,
  containerClass,
  type,
  inputStyle,
  className,
  extralabel,
  label,
  onChange,
  required,
  name,
  id,
}) => {
  return (
    <div className={`mail ${containerClass}`}>
      <label htmlFor="email">{label}</label>
      {extralabel ? <p>{extralabel}</p> : null}
        <input
          placeholder={placeholder}
          required={required}
          type={type}
          name={name}
          style={{ ...inputStyle }}
          id={id}
          className={`email ${className}`}
          onChange={onChange}
        />
    </div>
  );
};

export const CheckBox = ({
  label,
  onChange,
  checked,
  name,
  id,
  textInput,
  onTextInputChange,
  textInputName,
}) => {
  return (
    <div className="checkField">
      <input
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
        type="checkbox"
        placeholder="check here"
      />
      <label htmlFor="">{label}</label>
      {textInput ? (
        <input
          type={"text"}
          onChange={onTextInputChange}
          name={textInputName}
        />
      ) : null}
    </div>
  );
};
