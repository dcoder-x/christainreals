import React from "react";
import { CheckBox, SimpleText } from "./Formcomps";

const Profile3 = ({ index, onClick, profileSetup }) => {
  return (
    <form>
      <div className="checkBoxes">
        <label htmlFor="">Faith Status</label>
        <CheckBox label={"To be successful at work or school"} />
        <CheckBox label={"To make new friends"} />
        <CheckBox
          label={"To find someone I can spend the rest of my life with"}
        />
        <CheckBox label={"To have a closer stronger relationship with God"} />
        {/* <CheckBox label={"To be successful at work or school"} /> */}
      </div>
      <SimpleText
        label={"About my christain faith"}
        name={"aboutChristainFaith"}
        extralabel="Tell us a bit about your Christian faith. How did it start? What influence does your faith have on your everyday life? Are you proudly Christian? How do you keep your faith alive and growing? Anything else that you would like your potential matches to know about your Christian life."
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      <SimpleText
        label={
          "Which three Bible verses mostly inspire you? Please include the texts of the Bible verses."
        }
        // label={"About me"}
        name={"About"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      <div className="checkBoxes">
        <label htmlFor="">Do you play any role in your church? (choose as many as applicable)</label>
        <CheckBox label={"Pastoral"} />
        <CheckBox label={"Choir"} />
        <CheckBox label={"Ushering"} />
        <CheckBox label={"Children worker"} />
        <CheckBox label={"Youth worker"} />
        <CheckBox
          label={"Member of a group"}
          textInput
          textInputName={"groupMember"}
        />
        <CheckBox
          label={"Leader of a group "}
          textInput
          textInputName={"groupLeader"}
        />
        <CheckBox label={"Other"} textInput textInputName={"otherRoles"} />
        <CheckBox label={"None"} />

        <CheckBox label={"I do not belong to a church"} />
      </div>
      <div className="call-to-action">
        <i style={{ color: "red", fontStyle: "italic" }}>
          Please fill in accurate information !
        </i>
        <button className="Join-btn" onClick={onClick} type="button">
          {index == profileSetup.length - 1 ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default Profile3;
