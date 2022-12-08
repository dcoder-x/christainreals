import React from "react";
import { CheckBox, SimpleText } from "./Formcomps";

const Profile3 = () => {
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
        <label htmlFor="">Do you play any role in your church?</label>
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
        <CheckBox
          label={"Other"}
          textInput
          textInputName={"otherRoles"}
        />
        <CheckBox
          label={"None"}
        />

        <CheckBox label={"I do not belong to a church"} />
      </div>
      
    </form>
  );
};

export default Profile3;
