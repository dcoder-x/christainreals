import React from "react";
import { useNavigate } from "react-router";
import { CheckBox, Select, SimpleText } from "./Formcomps";

const Profile5 = ({ index, onClick, profileSetup }) => {
  const navigate = useNavigate()
  const handleForm = (e) =>{
      navigate('/signin')
      onClick()
      console.log('gtey')
  }
  return (
    <form onSubmit={e=>{handleForm()}} method='POST'>
      {/* <Select
        options={["Yes, definitely", "Not really"]}
        name={"cleaning"}
        label={
          "Is it important to you that the house is kept clean at all times?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      /> */}
      <SimpleText
        label={
          "What are the things that you do not like in a partner or in a relationship?"
        }
        required

      />
      <SimpleText
        label={
          "What are the things that you like most in a partner or in a relationship?"
        }
        required

      />
      <Select
        options={["Yes, definitely", "Not really"]}
        required
        name={"arrangement"}
        label={"Is it important to you that everything is in its proper place?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={[
          "When alone with them",
          "When in the company of friends",
          "When in a large gathering ",
          "No preference",
        ]}
        required
        name={"easeWithPartner"}
        label={"When would you feel most at ease with a partner?"}
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />
      <Select
        options={["Yes", "No"]}
        name={"oppositeSexFriends"}
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
        name={"exes"}
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
        ]}
        name={"offense"}
        label={
          "What, in your opinion is the gravest offence your partner can commit against you?"
        }
        selstyle={{ width: "60%", minHeight: "40px", marginTop: "1rem" }}
      />

      {/* <Select
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
      /> */}
      <div className="call-to-action">
        <i style={{ color: "red", fontStyle: "italic" }}>
          Please fill in accurate information !
        </i>
        <button type="submit" className="Join-btn">
          {index == profileSetup.length - 1 ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};
export default Profile5;
