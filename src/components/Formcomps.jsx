import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import "../styles/formcomps.css";

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

export const MultiSelect = ({label, options, optionClass, containerClass }) => {
  // const [selections, setselections] = useState([]);
  const selections = []
  return (
      <>
      <label htmlFor="" style={{
        marginBottom:'1rem'
      }}>
        {
          label
        }
      </label>
          <section id="multiselect" className={`conatiner ${containerClass}`}>
      {options.map((option, i) => {
        return (
          <div
            onClick={(e) => {
                if (selections.length<=4 && !e.currentTarget.classList.contains('selected') ) {
                  selections.push(option)
                  e.currentTarget
                    .querySelector(".icon")
                    .classList.toggle("selected");
                  e.currentTarget.classList.toggle('selected')
                  console.log(selections)
                } else {
                  alert('you can only select 5')
                  console.log(selections.length)
                  e.currentTarget
                  .querySelector(".icon")
                  .classList.remove("selected");
                e.currentTarget.classList.remove('selected')
                console.log(selections)
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
