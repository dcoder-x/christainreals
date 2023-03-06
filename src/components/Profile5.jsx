import React from "react";
import { useNavigate } from "react-router";
import { CheckBox, Select, SimpleText } from "./Formcomps";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Profile5 = ({ index, onClick, profileSetup }) => {

  const [graveOffence, setGraveOffence] = useState()
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
     const formData = await new FormData(e.currentTarget)
     const formDataObj = Object.fromEntries(formData.entries());

      console.log(formDataObj)
      await window.localStorage.setItem('profile5',JSON.stringify(formDataObj))
      const profile1 = JSON.parse(localStorage.getItem('profile1'))
      const profile2 = JSON.parse(localStorage.getItem('profile2'))
      const profile3 = JSON.parse(localStorage.getItem('profile3'))
      const profile4 = JSON.parse(localStorage.getItem('profile4'))
      const profile5 = JSON.parse(localStorage.getItem('profile5'))
      const registrationDataId= window.localStorage.getItem('userId')
      console.log(registrationDataId)

      const profileCompile = {...profile1,...profile2,...profile3,...profile4,...profile5,regId:registrationDataId}
      console.log(profileCompile)
      onClick()

      try {
        const response = await axios.post('http://localhost:5000/profile',profileCompile)
        navigate('/signin')
       } catch (error) {
        console.log(error)
        toast(error.response.data.msg)
       }
 }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <SimpleText
        label={
          "What are the things that you do not like in a partner or in a relationship?"
        }
        name={'dislike'}
        required
      />
      <SimpleText
      name={'like'}
        label={
          "What are the things that you like most in a partner or in a relationship?"
        }
        required
      />
      <Select
        options={[
          "When alone with them",
          "When in the company of friends",
          "When in a large gathering ",
          "No preference",
        ]}
        required
        name={"ease_with_partner"}
        label={"When would you feel most at ease with a partner?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Yes – I don’t see them as a threat",
          "No – friendship with the opposite sex is not usually what it seems",
        ]}
        name={"opposite_sex_friends"}
        label={
          "Would you be comfortable if your partner keeps friends of the opposite sex that you are not friends with?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Yes – I don’t see them as a threat",
          "No – Exes should remain in the past",
        ]}
        name={"ex_friendship"}
        label={
          "Would you be comfortable if your partner still maintains a close friendship with their ex?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "Cheating",
          "Domestic Violence",
          "Verbal Abuse",
          "Dishonesty",
          "Others",
        ]}
        onChange={(e) => {
          e.currentTarget.value == "Others"
            ? setGraveOffence(true)
            : setGraveOffence(false);
        }}
        name={"grave_offense"}
        label={
          "What, in your opinion is the gravest offence your partner can commit against you?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <div
        style={{ display: graveOffence ? "block" : "none" }}
        className="otherEthnicGroup"
      >
        <SimpleText
          type={"text"}
          minLength={1}
          label={"Specify types of pet"}
          name={"other_grave_offense"}
          required={graveOffence}
          placeholder={"Enter other offences you consider Grave"}
        />
      </div>
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
export default Profile5;
