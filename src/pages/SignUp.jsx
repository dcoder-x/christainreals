import React, { useState } from "react";
import { DropdownDate, DropdownComponent } from "react-dropdown-date";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { signUp } from "../assets/assets";
import "../styles/signup.css";
import { countryCode } from "../data/CountryCodes";
// import * as country from 'countrycitystatejson'
import { country, states, city } from "../data/address";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../components/ErrorModal";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [selectedDate, setdate] = useState("2004-12-31");
  const [countrySelect, setCountryselect] = useState();
  const [stateSelect, setStateSelect] = useState();
  const [iswoman, setiswoman] = useState(false);
  const [isman, setisman] = useState(false);
  const [gender, setGender] = useState(false);
  const navigate = useNavigate();
  const [datingNeed, setDatingNeed] = useState();

  //State and town filter logic

  //set empty array for filtered data

  var filteredStates = [];
  var filteredCities = [];

  //calling filter method on data arrays

  city.map((city) => {
    if (stateSelect) {
      if (stateSelect.length>0) {
        if (city.state_id == stateSelect[0].id) {
          filteredCities.push(city);
        }
      }

    } else {
      filteredCities.push(city);
    }
  });
  states.map((state) => {
    if (countrySelect) {
      if (state.country_id == countrySelect[0].id) {
        filteredStates.push(state);
      }
    } else {
      filteredStates.push(state);
    }
  });
  const formatDate = (date) => {
    // formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  //handling form on submit

  const handleForm = async (e)=>{
    e.preventDefault();
     const formData = await new FormData(e.currentTarget)
     const formDataObj = Object.fromEntries(formData.entries());
     console.log(datingNeed)
     formDataObj.dateOfBirth=selectedDate
     formDataObj.gender= gender
     formDataObj.datingNeed= datingNeed
     formDataObj.phone= parseInt(`${formDataObj.code}${formDataObj.phone}`)


     try {
      const response = await axios.post('https://christianreals-backend.onrender.com/register',formDataObj)
      console.log(response.data)
      navigate("/verify",{state:{username:`${formDataObj.firstName}`,email:`${formDataObj.email}`}});
     } catch (error) {
      console.log(error)
      toast(error.response.data.msg)
     }
   
    

  }


  return (
    <main id="sign-up">
      <section className="signup-form">
        <img src={signUp.signup} alt="" className="banner" />
        <div className="form">
          <h2>Sign Up</h2>
          <form
            action=""
            onSubmit={handleForm}
            method="post"
          >
            <div className="radios">
              <div className="genders">
                <p>I am</p>
                <div className="gender">
                  <input
                    className="radio"
                    onClick={(e) => {
                      setiswoman(!iswoman);
                    }}
                    onChange={(e) => {
                      setGender(e.currentTarget.value);
                      setDatingNeed('male')
                    }}
                    type="radio"
                    name="female"
                    id="woman"
                    checked={iswoman}
                    disabled={isman}
                    value={"female"}
                  />
                  <p htmlFor="woman">A woman</p>
                </div>
                <div className="gender">
                  <input
                    onClick={(e) => {
                      setisman(!isman);
                    }}
                    onChange={(e) => {
                      setGender(e.currentTarget.value);
                      setDatingNeed('female')
                    }}
                    disabled={iswoman}
                    checked={isman}
                    className="radio"
                    type="radio"
                    name="male"
                    id="man"
                    value={"male"}
                  />
                  <p htmlFor="woman">A man</p>
                </div>
              </div>
              <div className="seeking">
                <p>Seeking</p>
                <div className="gender">
                  <input
                    disabled={iswoman}
                    checked={isman}
                    className="radio"
                    type="radio"
                    name="seekingwoman"
                    id="seekingwoman"
                    value={'female'}
                    onChange={e=>{
                      setDatingNeed(e.currentTarget.value)
                      console.log(datingNeed,e.currentTarget.value)
                    }}
                  />
                  <p htmlFor="woman">A woman</p>
                </div>
                <div className="gender">
                  <input
                    className="radio"
                    type="radio"
                    name="seekingman"
                    disabled={isman}
                    checked={iswoman}
                    id="seekingman"
                    value={'male'}
                    onChange={e=>{
                      setDatingNeed(e.currentTarget.value)
                    }}
                  />
                  <p htmlFor="woman">A man</p>
                </div>
              </div>
            </div>
            <div className="names">
              <div className="name">
                <label htmlFor="username">
                  UserName/ID
                  <p style={{ color: "red" }}> *</p>
                </label>
                <input
                  type="text"
                  placeholder="e.g:Ayo"
                  name="userName"
                  id="username"
                  minLength={5}
                  pattern="[A-Za-z0-9]+"
                  onBlur={(e) => {
                    validate("username", {
                      patternError: "Username cannot contain symbols",
                    });
                  }}
                  required
                />
                <p className="field-info">
                  (Enter your unique username/ID. Your user name must be at
                  least five characters, should contain alphanumeric characters
                  only and must not contain obscene words)
                </p>
              </div>
              <div className="name">
                <label htmlFor="password">
                  Password
                  <p style={{ color: "red" }}> *</p>
                </label>
                <input
                  placeholder="e.g:Philips"
                  type="Password"
                  name="password"
                  id="password"
                  required
                  pattern="^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$"
                  minLength={8}
                  onChange={(e) => {
                    validate("password", {
                      patternError: "Your password is weak\n passwowrd must be 8 characters and contain at least one: \n 1 Upper case, \n 1 lower case, \n 1 number, \n 1 special character.  ",
                    });
                  }}
                />
                <p className="field-info">
                  (Enter your password. A strong password helps keep your
                  account secure)
                </p>
              </div>
            </div>
            <div className="mail">
              <label htmlFor="email">
                E-mail <p style={{ color: "red" }}> *</p>{" "}
              </label>
              <input
                placeholder="e.g:ayofaluyi@gmail.com"
                required
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  validate("email", {
                    patternError: "This is not a valid email",
                  });
                }}
                style={{ width: "100%" }}
              />
              <p className="field-info">
                (Enter your email address. After your profile creation, you can
                also use your email to log in instead of your user ID).
              </p>
            </div>
            <div className="names">
              <div className="name">
                <label htmlFor="fname">
                  First Name
                  <p style={{ color: "red" }}> *</p>
                </label>
                <input
                  type="text"
                  placeholder="e.g:Ayo"
                  name="firstName"
                  id="firstName"
                  required
                  minLength={1}
                  onChange={(e) => {
                    validate("firstName", {
                      patternError:
                        "your input does not match field requirements",
                    });
                  }}
                />
              </div>
              <div className="name">
                <label htmlFor="sname">
                  Surname
                  <p style={{ color: "red" }}> *</p>
                </label>
                <input
                  placeholder="e.g:Philips"
                  type="text"
                  name="surname"
                  id="lastName"
                  required
                  minLength={1}
                  onChange={(e) => {
                    validate("lastName", {
                      patternError:
                        "your input does not match field requirements",
                    });
                  }}
                />
              </div>
            </div>
            <p className="field-info">
              Your real names will not be visible to other users. Only your User
              ID which you will choose by yourself will be displayed on your
              profile.
            </p>

            <div className="address">
              <div className="country">
                <label htmlFor="country">
                  Country
                  <p style={{ color: "red" }}> *</p>
                </label>
                <select
                  name="country"
                  id="country"
                  required
                  onChange={(e) => {
                    // country.filter(country=>{country.name==e.target.value})
                    setCountryselect(
                      country.filter((country) => {
                        return country.name == e.target.value;
                      })
                    );
                    // validate("country", {
                    //   patternError:
                    //     "your input does not match field requirements",
                    // });
                  }}
                >
                  <optgroup>
                    {country.map((country) => {
                      return (
                        <option value={country.name}>{country.name}</option>
                      );
                    })}
                  </optgroup>
                </select>
              </div>
              <div className="state">
                <label htmlFor="state">
                  Region/State
                  <p style={{ color: "red" }}> *</p>
                </label>
                <select
                  name="state"
                  id="state"
                  required
                  onChange={(e) => {
                    setStateSelect(
                      states.filter((state) => {
                        return state.name == e.target.value;
                      })
                    );
                    // validate("state", { patternError: "invalid character" });
                  }}
                >
                  <optgroup>
                    {filteredStates.map((state) => {
                      return <option value={state.name}>{state.name}</option>;
                    })}
                  </optgroup>
                </select>
              </div>
              <div className="city">
                <label htmlFor="city">
                  Town/City
                  <p style={{ color: "red" }}> *</p>
                </label>
                <select name="city" id="city" required>
                  <optgroup>
                    {filteredCities.map((city) => {
                      return <option value={city.name}>{city.name}</option>;
                    })}
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="post-code">
              <div className="postcode">
                <label htmlFor="postcode">
                  Post/Zip code<p style={{ color: "red" }}> *</p>
                </label>
                <input
                  type="text"
                  name="postCode"
                  id="postcode"
                  required
                  onChange={(e) => {
                    setStateSelect(
                      states.filter((state) => {
                        return state.name == e.target.value;
                      })
                    );
                    validate("postcode", { patternError: "invalid character" });
                  }}
                />
              </div>

              <p className="info">
                Your Post/Zip Code will not be publicly displayed on your
                profile. Post/Zip Codes can be used by members to search for
                other members near them.
              </p>
            </div>
            <div className="personal">
              {/* <PhoneInputWithCountrySelect onChange={e=>{}} international /> */}

              <div className="phone-holder">
                <label htmlFor="phone">
                  Phone<p>(optional) </p>
                </label>
                <div className="phone">
                  <select name="code" id="">
                    <optgroup>
                      {countryCode.map((code) => {
                        return (
                          <option value={code.dial_code}>
                            {`${code.name} ${code.dial_code}`}
                          </option>
                        );
                      })}
                    </optgroup>
                  </select>
                  <input type="number" name="phone" id="phone" maxLength={10} />
                </div>
                <p className="field-info">
                  {" "}
                  Only enter if you would like the system to send you SMS
                  notification when you receive a new massage on the web
                </p>
              </div>

              <div className="dob">
                <label htmlFor="phone">
                  date of birth<p style={{ color: "red" }}> *</p>
                </label>
                <DropdownDate
                  startDate={
                    // optional, if not provided 1900-01-01 is startDate
                    "1927-01-01" // 'yyyy-mm-dd' format only
                  }
                  endDate={
                    // optional, if not provided current date is endDate
                    "2004-12-31" // 'yyyy-mm-dd' format only
                  }
                  order={[
                    // optional
                    DropdownComponent.year,
                    DropdownComponent.month,
                    DropdownComponent.day,
                  ]}
                  ids={
                    // optional
                    {
                      year: "select-year",
                      month: "select-month",
                      day: "select-day",
                    }
                  }
                  names={
                    // optional
                    {
                      year: "year",
                      month: "month",
                      day: "day",
                    }
                  }
                  classes={
                    // optional
                    {
                      dateContainer: "classes",
                      yearContainer: "classes",
                      monthContainer: "classes",
                      dayContainer: "classes",
                      year: "classes classes",
                      month: "classes classes",
                      day: "classes classes",
                      yearOptions: "classes",
                      monthOptions: "classes",
                      dayOptions: "classes",
                    }
                  }
                  // defaultValues={                   // optional
                  //     {
                  //     year: 'select year',
                  //     month: 'select month',
                  //     day: 'select day'
                  //     }
                  // }
                  options={
                    // optional
                    {
                      yearReverse: true, // false by default
                      monthShort: true, // false by default
                      monthCaps: true, // false by default
                    }
                  }
                  selectedDate={selectedDate}
                  // onDateChange={(date)=>{
                  //     setdate(formatDate(date))
                  //     console.log(date)
                  // }}
                  onDateChange={(date) => {
                    setdate(formatDate(date));
                  }}
                  
                />
                <p className="field-info">
                  Only age will be displayed on your profile, your full date of
                  birth will not be displayed.
                </p>
              </div>
            </div>
            <div className="call-to-action">
              <p>
                Already a member? <a href="/signin"> Sign In</a>
              </p>
              <button type="submit" className="Join-btn">
                Continue
              </button>
            </div>
          </form>
        </div>

      </section>
    </main>
  );
};

export default SignUp;
