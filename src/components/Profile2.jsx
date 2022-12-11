import React from "react";
import { options } from "../data/form";
import { CheckBox, MultiSelect, Select, SimpleText } from "./Formcomps";
const Profile2 = ({ index, onClick, profileSetup }) => {
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
      <MultiSelect
        options={options}
        label={"Which five terms would your friends use to describe you?"}
      />
      <MultiSelect
        options={options}
        label={
          "Which five terms would your family members use to describe you?"
        }
      />
      <MultiSelect
        options={options}
        label={
          "Which five terms would your work or school mates use to describe you?"
        }
      />
      <MultiSelect
        options={options}
        label={"Which five terms would your ex-partners use to describe you?"}
      />
      {/* <Select
        options={["indoor", "Outdoor"]}
        name={"FreeTimeWhere"}
        label={"Where do you like to spend your free time?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      /> */}

      <SimpleText
        label={" Where and how do you like to spend your free time?"}
        // label={"About me"}
        name={"About"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      <div className="checkBoxes" style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
        <label htmlFor="">What do you want more than anything right now? (choose as many as applicable)</label>
        <CheckBox label={"Beach/Seaside"} />
        <CheckBox label={"Resorts/Hotels/Spas "} />
        <CheckBox
          label={"Cruises"}
        />
        <CheckBox label={"Road trips"} />
        <CheckBox label={"City tour"} />
        <CheckBox label={"Outdoors/Adventures"} />
        <CheckBox label={"Camping"} />
        <CheckBox label={"Staycation"} />
        <CheckBox label={"Group travel"} />
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
      />

      <SimpleText
        // extralabel={
        //   "This is your opportunity to sell yourself. Tell us a little about yourself and your personality. E. g. How would a good friend describe you? What makes you unique? What drives you? What are your likes and dislikes? Which things are you passionate about? What activities do you enjoy doing? What activities bring out the best in you?"
        // }
        label={"If you had only one wish, what would that be?"}
        name={"cannotLiveWithout"}
        type={"text"}
        inputStyle={{
          minHeight: "100px",
        }}
      />
      <div className="call-to-action">
        <i style={{ color: "red", fontStyle: "italic" }}>
          Please fill in accurate information !
        </i>
        <button type="button" className="Join-btn" onClick={onClick}>
          {index == profileSetup.length - 1 ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default Profile2;
