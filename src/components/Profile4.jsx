import React, { useState } from "react";
import { CheckBox, Select } from "./Formcomps";

const Profile4 = ({ index, onClick, profileSetup }) => {
  const [genderRole, setGenderRole] = useState([])

  async function handleSubmit(e) {
    e.preventDefault();
     const formData = await new FormData(e.currentTarget)
     const formDataObj = Object.fromEntries(formData.entries());
     formDataObj.gender_roles_view =genderRole
      console.log(formDataObj)
      await window.localStorage.setItem('profile4',JSON.stringify(formDataObj))
      onClick()
 }
 
  return (
    <form
      onSubmit={(e) => {
     handleSubmit(e)
      }}
    >
      {/* <Select
        options={["Yes", "No"]}
        name={"relationshipGoal"}
        label={
          "Do you believe that marriage should be the goal of every relationship?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      /> */}
      <div className="checkBoxes">
        <label htmlFor="">
          What is your view about gender roles in marriage?
        </label>
        <CheckBox
        onSelect={selections=>setGenderRole(selections)}
          options={[
            {
              labels:
                "The man should be in control. That is how it was designed to be.",
              value:
                "The man should be in control. That is how it was designed to be.",
            },
            {
              labels:
                "The woman should be in control. That’s how you can have peace.",
              value:
                "The woman should be in control. That’s how you can have peace.",
            },
            {
              labels:
                "Each party has their own unique role, according to the Bible, which complement each other.",
              value:
                "Each party has their unique roles, according to the Bible, which complement each other.",
            },
            {
              labels:
                "It is a partnership where both parties are equal. This is 21st century.",
            },
          ]}
        />
        <Select
          options={["Yes", "No", "It doesn't bother me"]}
          name={"age_preference"}
          label={
            "Would you prefer that in a relationship the man is older than the woman?"
          }
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <Select
          options={[
            "1 – 3 years",
            "3 – 5 years",
            "5 – 7 years",
            "7 – 10 years",
            "10+ years",
          ]}
          name={"tolerable_age_gap"}
          label={
            "What is your tolerable age gap between the man and the woman in a relationship?"
          }
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <Select
          options={[
            "No – I don’t cook",
            "Yes – only for myself",
            "Yes – for myself and my family and friends",
            "Yes – for myself, my family and friends and for small groups",
            "Yes – for myself, my family and friends, small groups and large groups,",
          ]}
          name={"cooking"}
          label={"Do you cook?"}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <Select
          options={[
            "I don’t cook",
            "I only cook if I have to",
            "I cook regularly but I am not adventurous",
            "I’m always cooking and trying new recipes",
          ]}
          name={"cooking_frequency"}
          label={"How often do you cook?"}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <Select
          options={["Yes", "No"]}
          name={"cooking_partner"}
          label={
            "Is it important to you that your partner knows how to cook and enjoys cooking?"
          }
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
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
          options={["-Yes, definitely", "No, not really"]}
          name={"always_clean"}
          label={
            "Is it important to you that everything is in its proper place at all times?"
          }
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <Select
          options={["Yes, I eat at set times", "No, I eat whenever I'm hungry"]}
          name={"eating_pattern"}
          label={"Are regular mealtimes important to you?"}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <Select
          options={[
            "Every day",
            "Once or twice a week",
            "Few times a month",
            "That’s not my thing",
          ]}
          name={"excercise"}
          label={"How often do you exercise?"}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        <Select
          options={[
            "No – I am a teetotal",
            "Yes – light drinker",
            "Yes – moderate drinker",
            "Yes – heavy drinker",
            "Yes – only occasionally",
          ]}
          name={"alcohol"}
          label={"Do you drink alcohol?"}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />

        <Select
          options={["Yes", "No – Used to smoke", "No – Never smoked"]}
          name={"smoke"}
          label={"Do you smoke?"}
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />
        {/* <Select
          options={['None',
            'Dog',
            'Cat',
            'Bird',
            'Fish',
            'Reptile',
            'Other',
            ]}
          name={"pets"}
          label={
            "Do you have pets?"
          }
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        />

        <Select
          options={["Yes", "No"]}
          name={"liveWithPets"}
          label={
            "Would you live with someone who keeps a pet?"
          }
          selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
        /> */}
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
export default Profile4;
