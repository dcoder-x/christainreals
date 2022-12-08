import React from "react";
import { CheckBox, Select, SimpleText } from "./Formcomps";

const Profile2 = () => {
  return (
    <form>
      <SimpleText
        extralabel={
          "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E. g. How would a good friend describe you? What makes you unique? What drives you? What are your likes and dislikes? Which things are you passionate about? What activities do you enjoy doing? What activities bring out the best in you?"
        }
        label={"About me"}
        name={"About"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      <Select
        options={["indoor", "Outdoor"]}
        name={"FreeTimeWhere"}
        label={"Where do you like to spend your free time?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <SimpleText
        label={"How do you like to spend your free time?"}
        // label={"About me"}
        name={"About"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
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
      />
      <div className="checkBoxes">
        <label htmlFor="">
        What do you want more than anything right now?
        </label>
        <CheckBox label={"To be successful at work or school"} />
        <CheckBox label={"To make new friends"} />
        <CheckBox
          label={"To find someone I can spend the rest of my life with"}
        />
        <CheckBox label={"To have a closer stronger relationship with God"} />
        {/* <CheckBox label={"To be successful at work or school"} /> */}
      </div>

      <SimpleText
        // extralabel={
        //   "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E. g. How would a good friend describe you? What makes you unique? What drives you? What are your likes and dislikes? Which things are you passionate about? What activities do you enjoy doing? What activities bring out the best in you?"
        // }
        label={"What mantra do you live your life by?"}
        name={"mantra"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      
      <SimpleText
        // extralabel={
        //   "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E. g. How would a good friend describe you? What makes you unique? What drives you? What are your likes and dislikes? Which things are you passionate about? What activities do you enjoy doing? What activities bring out the best in you?"
        // }
        label={"What is that thing that you cannot live without??"}
        name={"cannotLiveWithout"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      
    </form>
  );
};

export default Profile2;
