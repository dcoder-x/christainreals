import React, { useState } from "react";
import { DropdownDate, DropdownComponent } from "react-dropdown-date";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { signUp } from "../assets/assets";
import "../styles/signup.css";
import { countryCode } from "../data/CountryCodes";
// import * as country from 'countrycitystatejson'
import { country, states, city } from "../data/address";
import { useRef, useEffect } from "react";
import { questionBank } from "../data/questionBank";
import { useLocation, useNavigate } from "react-router";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import Profile3 from "./Profile3";
import Profile4 from "./Profile4";
import Profile5 from "./Profile5";
import Profile6 from "./Profile6";
import Modal from "./Modal";

const profileSetup = [
  {
    img: signUp.verify,
    form: Profile1,
  },
  {
    img: signUp.profileBanner2,
    form: Profile2,
  },
  {
    img: signUp.profileBanner3,
    form: Profile3,
  },
  {
    img: signUp.profileBanner4,
    form: Profile4,
  },
  {
    img: signUp.profileBanner5,
    form: Profile5,
  },
  {
    img: signUp.profileBanner6,
    form: Profile6,
  },
];
const message = [
  {
    title: "Almost done",
    desc: `Don't quit now! you are almost there, your're not a quitter. Keep Going!!`,
  },
  {
    title: "Well done",
    desc: `Just a little more, your're not a quitter. Keep Going!!`,
  },
  {
    title: "Almost there",
    desc: `This is a neccesary part of your registration and it shows how serious you are, your're not a quitter. Keep Going!!`,
  },
  {
    title: "Almost done",
    desc: `Don't quit now! you are almost there, your're not a quitter. Keep Going!!`,
  },
  {
    title: "Almost there",
    desc: `This is a neccesary part of your registration and it shows how serious you are, your're not a quitter. Keep Going!!`,
  },
  {
    title: "Last one I promise",
    desc: `Don't quit now! you are almost there, your're not a quitter. Keep Going!!`,
  },
];
const Verify = () => {
  const navigate = useNavigate();
  const [index, setindex] = useState(0);
  const Form = profileSetup[index].form;
  const [showModal, setshowModal] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [index]);
  function handleForm() {
    const form = document.querySelector('form')
    form.onsubmit=(e)=>{
        e.preventDefault()
        console.log(form)
    }
    form.submit()

 
  }

  return (
    <main id="sign-up">
      <section className="signup-form">
        <img src={profileSetup[index].img} alt="" className="banner" />
        <div className="form">
          <div className="progressBar">
            <div
              className="progressDone"
              style={{
                width: `${(index / (profileSetup.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
          {<Form />}
          <div className="call-to-action">
            <i style={{ color: "red", fontStyle: "italic" }}>
              Please fill in accurate information !
            </i>
            <button
              className="Join-btn"
              onClick={(e) => {
                if (index != profileSetup.length - 1) {
                //   handleForm()
                  setindex(index + 1);
                  setshowModal(true);
                } else {
                  setindex(5);
                }
              }}
            >
              {index == profileSetup.length - 1 ? "Submit" : "Continue"}
            </button>
          </div>
        </div>
      </section>
      <Modal
        message={message[index].desc}
        show={showModal}
        onAccept={(e) => {
          setshowModal(false);
        }}
        title={message[index].title}
        icon="icon-park-solid:good-one"
        iconSize={50}
        iconColor={"#DC1417"}
        onclose={(e) => {
          setshowModal(false);
        }}
        modalStyle={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        actionText="Keep going"
      />
    </main>
  );
};

export default Verify;
