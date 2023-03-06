import React, { useState } from "react";
import { CheckBox, MultiLineText, SimpleText } from "./Formcomps";

const Profile3 = ({ index, onClick, profileSetup }) => {

  const [faithStatus, setFaithStatus] = useState([])
  const [churchRole, setChurchRole] = useState([])


  async function handleSubmit(e) {
    e.preventDefault();
     const formData = await new FormData(e.currentTarget)
     const formDataObj = Object.fromEntries(formData.entries());
     formDataObj.faith_status = faithStatus
     formDataObj.church_role = churchRole
      console.log(formDataObj)
      await window.localStorage.setItem('profile3',JSON.stringify(formDataObj))
      onClick()
 }
  return (
    <form
      onSubmit={(e) => {
     handleSubmit(e)
      }}
    >
      <div className="checkBoxes">
        <label htmlFor="">Faith Status</label>
        <CheckBox
        onSelect={selections=>{setFaithStatus(selections)}}
          options={[
            {
              labels: "I am a born-again Christian and a regular church-goer.",
              value: "I am a born-again Christian and a regular church-goer.",
            },
            {
              labels: "I am not born again but I am a regular church-goer.",
              value: "I am not born again but I am a regular church-goer.",
            },
            {
              labels:
                "I am not born again, church is not really my thing but I try my best to live a good Christian life.",
              value:
                "I am not born again, church is not really my thing but I try my best to live a good Christian life.",
            },
            {
              labels:
                "I only identify with Christianity as a religion, nothing more",
              value:
                "I only identify with Christianity as a religion, nothing more .",
            },
          ]}
        />
      </div>
      <MultiLineText
        extralabel="Tell us a bit about your Christian faith. How did it start? What influence does your faith have on your everyday life? Are you proudly Christian? How do you keep your faith alive and growing? Anything else that you would like your potential matches to know about your Christian life."
        label={"About my Christian faith"}
        name={"about_christain_faith"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
        required
        minLength={50}
        placeholder={"minimum 50 characters"}
      />
      <SimpleText
        label={
          "Which three Bible verses mostly inspire you? Please include the texts of the Bible verses."
        }
        // label={"About me"}
        name={"inspirational_verses"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
        required
      />
      <div className="checkBoxes">
        <label htmlFor="">
          Do you play any role in your church? (choose as many as applicable)
        </label>
        <CheckBox
        onSelect={s=>{setChurchRole(s)}}

          options={[
            { value: "Pastoral", labels: "Pastoral" },
            { value: "Choir", labels: "Choir" },
            { value: "Ushering", labels: "Ushering" },
            { value: "Children worker", labels: "Children worker" },
            { value: "Youth worker", labels: "Youth worker" },
            {
              value: "Member of a group",
              labels: "Member of a group",
              textInput: true,
              textInputName: "church_group_member",
            },
            {
              value: "Leader of a group",
              labels: "Leader of a group",
              textInput: true,
              textInputName: "church_group_leader",
            },
            {
              value: "Other",
              labels: "Other",
              textInput: true,
              textInputName: "other_church_role",
            },
            { value: "None", labels: "None" },
            {
              value: "I do not belong to a church",
              labels: "I do not belong to a church",
            },
          ]}
        />
      </div>
      <div className="call-to-action">
        <i style={{ color: "red", fontStyle: "italic" }}>
          Please fill in accurate information !
        </i>
        <button className="Join-btn" type="submit">
          {index == profileSetup.length - 1 ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default Profile3;
