import React, { useState } from "react";
import { options } from "../data/form";
import { CheckBox, MultiLineText, MultiSelect, Select, SimpleText } from "./Formcomps";
import { toast } from "react-toastify";


const Profile2 = ({ index, onClick, profileSetup }) => {

  const [friendDescription, setFriendDescription] = useState([])
  const [familyDescription, setFamilyDescription] = useState([])
  const [colleagueDescription, setColleagueDescription] = useState([])
  const [idealHoliday, setIdealHoliday] = useState([])
  const [exPartner, setExPartner] = useState([])
  
  async function handleSubmit(e) {
     e.preventDefault();
     if (familyDescription.length<5 && colleagueDescription.length<5 && friendDescription.length<5 && idealHoliday.length < 1 && exPartner.length < 5) {
      toast('Personal description requires at least 5 options')
      console.log(familyDescription.length,colleagueDescription.length)
     }
     else{
      const formData = await new FormData(e.currentTarget)
      const formDataObj = Object.fromEntries(formData.entries());
      formDataObj.friend_description = friendDescription
      formDataObj.family_description = familyDescription
      formDataObj.colleague_description = colleagueDescription
      formDataObj.ideal_holiday = idealHoliday
      formDataObj.exPartner_description = exPartner

       console.log(formDataObj)
       await window.localStorage.setItem('profile2',JSON.stringify(formDataObj))
       onClick()
     }
    
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <MultiLineText
        extralabel={
          "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E .g What makes you unique? What are your likes and dislikes? What keeps you awake at night and what wakes you up in the morning? What are the things that you are passionate about? What activities do you enjoy doing and what activities would you rather not engage in? What brought you to this website? What kind of person would you like to meet on this website? Anything else that you would like your potential matches to know about you."
        }
        label={"About me"}
        name={"about"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
        required
        minLength={50}
        placeholder={'minimum 50 characters'}
      />
      <MultiSelect
        options={options}
        onSelect={selection=>{
          setFriendDescription(selection)
        }}
        label={"Which five terms would your friends use to describe you?"}
      />
      <MultiSelect
        options={options}
        onSelect={selection=>{
          setFamilyDescription(selection)
        }}
        label={
          "Which five terms would your family members use to describe you?"
        }
      />
      <MultiSelect
        options={options}
        onSelect={selection=>{
          setColleagueDescription(selection)
        }}
        label={
          "Which five terms would your work or school mates use to describe you?"
        }
      />
      <MultiSelect
        options={options}
        onSelect={selection=>{
          setExPartner(selection)
        }}
        label={"Which five terms would your ex-partners use to describe you?"}
      />
      {/* <Select
        options={["indoor", "Outdoor"]}
        name={"FreeTimeWhere"}
        label={"Where do you like to spend your free time?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      /> */}

      <MultiLineText
        label={" Where and how do you like to spend your free time?"}
        // label={"About me"}
        name={"free_time"}
        required
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      <div
        className="checkBoxes"
        style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
      >
        <label htmlFor="">
        What are your ideal holiday types? (Choose as many as are applicable)
        </label>
        <CheckBox 
        onSelect={selection=>setIdealHoliday(selection)}
        options={[
          {labels:'Beach/Seaside',value:'Beach/Seaside'},
          {labels:'Resorts/Hotels/Spas ',value:'Resorts/Hotels/Spas '},
          {labels:'Cruises',value:'Cruises'},
          {labels:'Road trips',value:'Road trips'},
          {labels:'City tour',value:'City tour'},
          {labels:'Outdoors/Adventures',value:'Outdoors/Adventures'},
          {labels:'Camping',value:'Camping'},
          {labels:'Staycation',value:'Staycation'},
          {labels:'Group travel',value:'Group travel'},
        ]} />
        {/* <CheckBox  label={"Beach/Seaside"} />
        <CheckBox label={"Resorts/Hotels/Spas "} />
        <CheckBox label={"Cruises"} />
        <CheckBox label={"Road trips"} />
        <CheckBox label={"City tour"} />
        <CheckBox label={"Outdoors/Adventures"} />
        <CheckBox label={"Camping"} />
        <CheckBox label={"Staycation"} />
        <CheckBox label={"Group travel"} /> */}
        {/* <CheckBox label={"To be successful at work or school"} /> */}
      </div>
      <SimpleText
        // extralabel={
        //   "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E. g. How would a good friend describe you? What makes you unique? What drives you? What are your likes and dislikes? Which things are you passionate about? What activities do you enjoy doing? What activities bring out the best in you?"
        // }
        label={"What types of music do you like to listen to?"}
        name={"musicChoice"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
        required
      />

      <SimpleText
        // extralabel={
        //   "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E. g. How would a good friend describe you? What makes you unique? What drives you? What are your likes and dislikes? Which things are you passionate about? What activities do you enjoy doing? What activities bring out the best in you?"
        // }
        label={
          "Everyone has different passions, such as art, sports, music, family and faith. What are you passionate about?"
        }
        name={"mantra"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
        required
      />

      <SimpleText
        // extralabel={
        //   "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E. g. How would a good friend describe you? What makes you unique? What drives you? What are your likes and dislikes? Which things are you passionate about? What activities do you enjoy doing? What activities bring out the best in you?"
        // }
        label={"If you had only one wish, what would that be?"}
        name={"desire"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
        required
      />
      <div className="call-to-action">
        <i style={{ color: "red", fontStyle: "italic" }}>
          Please fill in accurate information !
        </i>
        <button type="submit" className="Join-btn">
          {index == profileSetup.length - 1 ? "Submit" : "Save & Continue"}
        </button>
      </div>
    </form>
  );
};

export default Profile2;
