import React from "react";
import { questionBank } from "../data/questionBank";
import { Select, SimpleText } from "./Formcomps";
import { useState } from "react";
import { validate } from "./ErrorModal";

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

  const [specifyPets, setSpecifyPets] = useState(false);
  const [liveWithpet, setLiveWithPet] = useState("");

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
              name={'otherEthnic'}
              required = {showOtherEthnic}
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
                name={'otherEducation'}
                label={"Other educational levels"}
                required = {showOtherEducation}
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
          <label htmlFor="job">What kind of work do you do currently?</label>
          <input
            placeholder="e.g:software"
            required
            type="text"
            name="Job"
            id="job"
            className="email"
            onChange={e=>{ validate('job',{patternError:"Invalid Character"}) }}
          />
        </div>
        <div className="mail">
          <label htmlFor="email">If unemployed or seeking a new job, enter the kind of work you are seeking or if studying, the job you are aiming for at the end of your course.</label>
          <input
            placeholder="e.g:software"
            required
            type="text"
            name="expectedJob"
            id="expectedJob"
            className="email"
          />
        </div>

        <div className="address">
          <div className="country">
            <label htmlFor="country">Height</label>
            <input name="height" required type="number" placeholder="e.g:6, accepts only number" />
            <select name="heightUnit" id="" defaultValue={'please select a unit'}>
              <optgroup>
                <option value="Ft"> Ft</option>
                <option value="Cm"> Cm</option>
              </optgroup>
            </select>
          </div>
          <div className="country">
            <label htmlFor="country">Weight</label>
            <input required type="number" placeholder="e.g:62 , accepts only number" />
            <select name="WeightUnit" id="" defaultValue={'please select a unit'}>
              <optgroup>
                <option value="Lb"> lb</option>
                <option value="kg"> kg</option>
              </optgroup>
            </select>
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
          <label htmlFor="">Main Language of Communication</label>
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
              name={'otherLanguages'}
              minLength={1}
              label={"Other main language  group"}
              required = {showOtherLanguages}
              placeholder={"Enter other main language not specified"}
            />
          </div>
          <SimpleText
            placeholder={
              'other languages you speak ; separate with "," if more than one'
            }
            label={"Other language(s) spoken"}
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
            name={'otherPets'}
            required={showOtherPets}
            placeholder={"Enter other pets not specified"}
          />
        </div>
        <Select
          options={["Yes, any pet", "No",'Yes, only (specify types of pet)']}
          name={"liveWithPets"}
          label={"Would you live with someone who keeps  pet?"}
          onChange={(e) => {
            setLiveWithPet(e.currentTarget.value);
            console.log(e.currentTarget.value);
            console.log(ethnic);
            e.currentTarget.value == "Yes, only (specify types of pet)"
              ? setSpecifyPets(true)
              : setSpecifyPets(false);
          }}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
          <div
          style={{ display: specifyPets ? "block" : "none" }}
          className="otherEthnicGroup"
        >
          <SimpleText
            type={"text"}
            minLength={1}
            label={"Specify types of pet"}
            name={'specifyPet'}
            required={specifyPets}
            placeholder={"Enter pets you are comfortable with"}
          />
        </div>
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
