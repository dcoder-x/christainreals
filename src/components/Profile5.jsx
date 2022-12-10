import React from "react";
import { CheckBox, Select } from "./Formcomps";

const Profile5 = ({ index, onClick, profileSetup }) => {
  return (
    <form>
      <Select
        options={[
          "I am very systematic and always plan ahead",
          "I am very relaxed and just let things work themselves out",
          "It depends on my mood",
        ]}
        name={"planning"}
        label={"What’s your approach to planning?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={["Yes, definitely", "Not really"]}
        name={"cleaning"}
        label={
          "Is it important to you that the house is kept clean at all times?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={["Yes, definitely", "Not really"]}
        name={"arrangement"}
        label={"Is it important to you that everything is in its proper place?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={["Yes, I eat at set times", "No, I eat whenever I'm hungry"]}
        name={"eat"}
        label={"Are regular mealtimes important to you?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Every day",
          "Once or twice a week",
          "Several times a month",
          "That’s not my thing",
        ]}
        name={"excercise"}
        label={"How often do you exercise?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Beach/Seaside",
          "Resorts/Hotels/Spas",
          "Cruises",
          "Road trips",
          "City tour",
          "Outdoors/Adventures",
          "Camping",
          "Staycation",
          "Group travel",
        ]}
        name={"holiday"}
        label={"What are your ideal holiday types?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <div className="call-to-action">
        <i style={{ color: "red", fontStyle: "italic" }}>
          Please fill in accurate information !
        </i>
        <button type="submit"  className="Join-btn" onClick={onClick}>
          {index == profileSetup.length - 1 ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};
export default Profile5;
