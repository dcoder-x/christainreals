import React from "react";
import { questionBank } from '../data/questionBank'
const {Education,Employment,Ethnicity,relationship,Language,BodyType,EyeColour,Children,HairColour} = questionBank

const Profile1 = () => {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('submited')
  }
  return (
    <>
      <h2>Congratulations your email has been verified</h2>
      <form onSubmit={e=>{handleSubmit(e)}}>
        <div className="address">
          <div className="country">
            <label htmlFor="country">Relationship status</label>
            <select name="relationship" id="relationship">
              <optgroup>
                {relationship.map((status) => {
                  return <option value={status}>{status}</option>;
                })}
              </optgroup>
            </select>
          </div>
          <div className="state">
            <label htmlFor="state">Ethnic Background</label>
            <select name="Ethnic" id="Ethnic">
              <optgroup>
                {Ethnicity.map((ethnic) => {
                  return <option value={ethnic}>{ethnic}</option>;
                })}
              </optgroup>
            </select>
          </div>
        </div>
        <div className="address">
          <div className="country">
            <label htmlFor="country">Highest Educational Attainment</label>
            <select name="country" id="Education">
              <optgroup>
                {Education.map((education) => {
                  return <option value={education}>{education}</option>;
                })}
              </optgroup>
            </select>
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
            type="email"
            name="email"
            id="email"
            className="email"
          />
        </div>

        <div className="address">
          <div className="country">
            <label htmlFor="country">Height (feet/cm)</label>
            <input type="text" placeholder="e.g:6 feet" />
          </div>
          <div className="country">
            <label htmlFor="country">Weight (stone/kg)</label>
            <input type="text" placeholder="e.g:62 kg" />
          </div>
          <div className="state">
            <label htmlFor="state">Bodytype</label>
            <select name="state" id="state">
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
          <label htmlFor="">Languages spoken</label>
          <select name="state" id="state">
            <optgroup>
              {Language.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </optgroup>
          </select>
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
        
      </form>
    </>
  );
};

export default Profile1;
