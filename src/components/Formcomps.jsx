import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import "../styles/formcomps.css";
import { toast } from "react-toastify";

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
  minLength,
  maxLength
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
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};
export const MultiLineText = ({
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
  minLength,
  maxLength
}) => {
  return (
    <div className={`mail ${containerClass}`}>
      <label htmlFor="email">{label}</label>
      {extralabel ? <p>{extralabel}</p> : null}
      <textarea
        placeholder={placeholder}
        required={required}
        type={type}
        name={name}
        style={{ ...inputStyle }}
        id={id}
        className={`email ${className}`}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

// I have to restucture the check box to collect data in group e.g multichoice
export const CheckBox = ({
  label,
  onChange,
  checked,
  name,
  id,
  textInput,
  onTextInputChange,
  textInputName,
  options,
  onSelect
}) => {
  const [selections, setselections] = useState([]);
  // const selections = []
  return (
    <>
      {options.map((option, i) => {
        return (
          <div className="checkField">
            <input
            key={i}
              name={name}
              id={id}
              onChange={onChange}
              checked={checked}
              type="checkbox"
              placeholder="check here"
              onClick={(e) => {
                if (
                  e.currentTarget.checked
                ) {
                  selections.push(option.value);
                  onSelect(selections)
                  console.log(selections)
                } else {
                  const index = selections.indexOf(option.value);
                  if (index > -1) {
                    // only splice array when item is found
                    selections.splice(index, 1); // 2nd parameter means remove one item only
                    console.log(selections)
                  }
                }
              }}
            />
            <label htmlFor="">{option.labels}</label>
            {option.textInput ? (
              <input
                type={"text"}
                key={i}
                onChange={onTextInputChange}
                name={option.textInputName}
              />
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export const MultiSelect = ({
  label,
  options,
  optionClass,
  containerClass,
  name,
  onSelect
}) => {
  const [selections, setselections] = useState([]);
  console.log(selections)
  // const selections = [];
  return (
    <>
      <label
        htmlFor=""
        style={{
          marginBottom: "1rem",
        }}
      >
        {label}
      </label>
      <label
        htmlFor=""
        style={{
          marginBottom: "1rem",
          color: "red",
          fontSize: "12px",
        }}
      >
        {selections.length < 4
          ? "You must pick five options in this section "
          : null}
      </label>

      <section id="multiselect" className={`conatiner ${containerClass}`}>
        {options.map((option, i) => {
          return (
            <div
              onClick={(e) => {
                if (
                  selections.length <= 4 &&
                  !e.currentTarget.classList.contains("selected")
                ) {
                  selections.push(option);
                  console.log(option,selections)
            
                  // const updatedSelection = [...selections, option];
                  // setselections(updatedSelection);
                  e.currentTarget
                    .querySelector(".icon")
                    .classList.toggle("selected");
                  e.currentTarget.classList.toggle("selected");
                  onSelect(selections)
                  console.log(selections)

                  
                } else {
                  const index = selections.indexOf(option);
                  
                  toast('selection is more than 5')
                  console.log(selections)
                  if (index > -1) {
                    // only splice array when item is found
                    selections.splice(index, 1); // 2nd parameter means remove one item only
                    console.log(selections)
                  }
                  e.currentTarget
                    .querySelector(".icon")
                    .classList.remove("selected");
                  e.currentTarget.classList.remove("selected");
                  

                }
              }}
              key={i}
              className={`choice ${optionClass}`}
            >
              <p> {option}</p>
              <Icon
                // onClick={(e) => {
                //   setshowMessage(!showMessage);
                // }}
                icon={"ion:close-circle-sharp"}
                className={"icon"}
                width={30}
                color={"white"}
                // style={{ margin: "1rem 0" }}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};
