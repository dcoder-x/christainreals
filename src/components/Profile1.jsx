import React from "react";
import { questionBank } from "../data/questionBank";
import { Select, SimpleText } from "./Formcomps";
import { useState } from "react";

//destructure question back
const {
  Education,
  Employment,
  Ethnicity,
  relationship,
  Language,
  BodyType,
  EyeColour,
  Children,
  HairColour,
} = questionBank;

const Profile1 = ({ index, onClick, profileSetup }) => {
  const [showOtherEthnic, setshowOtherEthnic] = useState(false);
  const [ethnic, setEthnic] = useState("");

  const [showOtherLanguages, setshowOtherLanguages] = useState(false);
 const [Languages, setLanguages] = useState("");

   const [showOtherPets, setshowOtherPets] = useState(false);
  const [pet, setPet] = useState("");

  const [showOtherEducation, setshowOtherEducation] = useState(false);
  const [education, setEducation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submited");
    onClick();
  }
  return (
    <>
      <h2>Congratulations your email has been verified</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submited");
          onClick();
        }}
        method="POST"
      >
        <div className="address">
          <div className="country">
            <label htmlFor="country">Relationship status</label>
            <select required name="relationship" id="relationship">
              <optgroup>
                {relationship.map((status, i) => {
                  return (
                    <option key={i} value={status}>
                      {status}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
          <div className="state">
            <label htmlFor="state">Ethnic Background</label>
            <select
              required
              value={ethnic}
              name="Ethnic"
              id="Ethnic"
              onChange={(e) => {
                setEthnic(e.currentTarget.value);
                console.log(e.currentTarget.value);
                console.log(ethnic);
                e.currentTarget.value == "Other"
                  ? setshowOtherEthnic(true)
                  : setshowOtherEthnic(false);
              }}
            >
              <optgroup>
                {Ethnicity.map((ethnic, i) => {
                  return (
                    <option key={i} value={ethnic}>
                      {ethnic}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
          <div
            style={{ display: showOtherEthnic ? "block" : "none" }}
            className="otherEthnicGroup"
          >
            <SimpleText
              type={"text"}
              minLength={1}
              label={"Other ethnic group"}
              required
              placeholder={"Enter other ethnicity not specified"}
            />
          </div>
        </div>
        <div className="address">
          <div className="country">
            <label htmlFor="country">Highest Educational Attainment</label>
            <select
              required
              name="country"
              id="Education"
              onChange={(e) => {
                setEducation(e.currentTarget.value);
                console.log(e.currentTarget.value);
                console.log(ethnic);
                e.currentTarget.value == "Other"
                  ? setshowOtherEducation(true)
                  : setshowOtherEducation(false);
              }}
            >
              <optgroup>
                {Education.map((education) => {
                  return <option value={education}>{education}</option>;
                })}
              </optgroup>
            </select>
            <div
              style={{ display: showOtherEducation ? "block" : "none" }}
              className="otherEthnicGroup"
            >
              <SimpleText
                type={"text"}
                minLength={1}
                label={"Other educational levels"}
                required
                placeholder={"Enter other educational levels attained"}
              />
            </div>
          </div>
          <div className="state">
            <label htmlFor="state">Employment Status</label>
            <select name="state" id="state">
              <optgroup>
                {Employment.map((employment) => {
                  return <option value={employment}>{employment}</option>;
                })}
              </optgroup>
            </select>
          </div>
        </div>
        <div className="mail">
          <label htmlFor="email">What kind of work do you do currently?</label>
          <p>If unemployed, enter the kind of work you are seeking.</p>
          <input
            placeholder="e.g:software"
            required
            type="text"
            name="Job"
            id="job"
            className="email"
          />
        </div>
        <div className="mail">
          <label htmlFor="email">What is your future career goal?</label>
          <input
            placeholder="e.g:ayofaluyi@gmail.com"
            required
            type="text"
            name="futureCareer"
            id="futureCareer"
            className="email"
          />
        </div>

        <div className="address">
          <div className="country">
            <label htmlFor="country">Height (feet/cm)</label>
            <input required type="text" placeholder="e.g:6 feet" />
          </div>
          <div className="country">
            <label htmlFor="country">Weight (stone/kg)</label>
            <input required type="text" placeholder="e.g:62 kg" />
          </div>
          <div className="state">
            <label htmlFor="state">Bodytype</label>
            <select required name="state" id="state">
              <optgroup>
                {BodyType.map((body) => {
                  return <option value={body}>{body}</option>;
                })}
              </optgroup>
            </select>
          </div>
        </div>
        <div className="address">
          <div className="country">
            <label htmlFor="country">Natural Hair Colour</label>
            <select name="country" id="country">
              <optgroup>
                {HairColour.map((color) => {
                  return <option value={color}>{color}</option>;
                })}
              </optgroup>
            </select>
          </div>
          <div className="state">
            <label htmlFor="state">Eye Colour</label>
            <select name="state" id="state">
              <optgroup>
                {EyeColour.map((state) => {
                  return <option value={state}>{state}</option>;
                })}
              </optgroup>
            </select>
          </div>
        </div>
        <div className="state">
          <label htmlFor="">Main Languages spoken</label>
          <select
            name="state"
            id="state"
            onChange={(e) => {
              setLanguages(e.currentTarget.value);
              console.log(e.currentTarget.value);
              e.currentTarget.value == "Others"
                ? setshowOtherLanguages(true)
                : setshowOtherLanguages(false);
            }}
          >
            <optgroup>
              {Language.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </optgroup>
          </select>
          <div
            style={{ display: showOtherLanguages ? "block" : "none" }}
            className="otherEthnicGroup"
          >
            <SimpleText
              type={"text"}
              minLength={1}
              label={"Other main language  group"}
              required
              placeholder={"Enter other main language not specified"}
            />
          </div>
          <SimpleText
            placeholder={
              'other languages you speak ; seperate with "," if more than one'
            }
            label={"Second language(s)"}
          />
        </div>
        <div className="">
          <label htmlFor="state">How many children have you?</label>
          <select name="state" id="state">
            <optgroup>
              {Children.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </optgroup>
          </select>
        </div>
        <div className="mail">
          <label htmlFor="childAge">
            What is the age of your oldest child?
          </label>
          <input
            placeholder="e.g:18"
            required
            type="text"
            name="childAge"
            id="childAge"
            className="email"
          />
        </div>
        <div className="mail">
          <label htmlFor="childAge">
            What is the age of your youngest child?
          </label>
          <input
            placeholder="e.g:18"
            required
            type="text"
            name="childAge"
            id="childAge"
            className="email"
          />
        </div>
        <div className="mail">
          <label htmlFor="childAge">
            How many of your children live with you on a permanent basis?
          </label>
          <input
            placeholder="e.g:2"
            required
            type="text"
            name="childAge"
            id="childAge"
            className="email"
          />
        </div>
        <div className="">
          <label htmlFor="state">Do you want children / more children?</label>
          <select name="state" id="state">
            <optgroup>
              {["Yes", "No", "Open to the idea"].map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </optgroup>
          </select>
        </div>
        <Select
          options={["None", "Dog", "Cat", "Bird", "Fish", "Reptile", "Other"]}
          name={"pets"}
          label={"Do you have pets?"}
          onChange={(e) => {
            setPet(e.currentTarget.value);
            console.log(e.currentTarget.value);
            console.log(ethnic);
            e.currentTarget.value == "Other"
              ? setshowOtherPets(true)
              : setshowOtherPets(false);
          }}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <div
          style={{ display: showOtherPets ? "block" : "none" }}
          className="otherEthnicGroup"
        >
          <SimpleText
            type={"text"}
            minLength={1}
            label={"Other Pets"}
            placeholder={"Enter other pets not specified"}
          />
        </div>
        <Select
          options={["Yes", "No"]}
          name={"liveWithPets"}
          label={"Would you live with someone who keeps a pet?"}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <div className="call-to-action">
          <i style={{ color: "red", fontStyle: "italic" }}>
            Please fill in accurate information !
          </i>
          <button
            className="Join-btn"
            // onClick={onClick}
            type="submit"
          >
            {index == profileSetup.length - 1 ? "Submit" : "Continue"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile1;
