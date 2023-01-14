import React from "react";
import { useState } from "react";
import { SimpleText, Select } from "../components/Formcomps";
import { countryCode } from "../data/CountryCodes";
// import * as country from 'countrycitystatejson'
import "../styles/profile.css";
import { country, states, city } from "../data/address";
import { images, testimonials } from "../assets/assets";

const Profile = () => {
  const [countrySelect, setCountryselect] = useState();
  const [stateSelect, setStateSelect] = useState();

  //   city.map((city) => {
  //     if (stateSelect) {
  //       if (city.state_id == stateSelect[0].id) {
  //         filteredCities.push(city);
  //       }
  //     } else {
  //       filteredCities.push(city);
  //     }
  //   });
  var filteredStates = [];
  var filteredCities = [];
  states.map((state) => {
    if (countrySelect) {
      if (state.country_id == countrySelect[0].id) {
        filteredStates.push(state);
      }
    } else {
      filteredStates.push(state);
    }
  });
  return (
    <main id="profile">
      <section className="top">
        <div className="user">
          {/* <img src={testimonials.catherine} alt="" /> */}
          <div className="img"></div>
          <div className="info">
            <div className="name">Anderson Hughes, {"28"}</div>
            <div className="location">San Jose, Alabama</div>
            <div className="about">
              Lörem ipsum kemkastrering epiosmos triskapet har or autoktig.
              Käskapet bitirat, depång monok, gynade. Linjär tv dipynera och
              dian lybel.
            </div>
          </div>
        </div>
        <div className="action-btns">
          <button className="bump-up action-btn">Bump up</button>
          <button className="verify action-btn">Verify</button>
        </div>
      </section>
      <section className="bottom">
        <form action="">
          <SimpleText
            label={"E-mail"}
            placeholder={"andrue@gmail.com"}
            name="email"
          />
          <div className="address">
            <div className="country">
              <label htmlFor="country">
                Country/State
                <p style={{ color: "red" }}> *</p>
              </label>
              <select
                name="country"
                id="country"
                onChange={(e) => {
                  // country.filter(country=>{country.name==e.target.value})
                  setCountryselect(
                    country.filter((country) => {
                      return country.name == e.target.value;
                    })
                  );
                }}
              >
                <optgroup>
                  {country.map((country) => {
                    return <option value={country.name}>{country.name}</option>;
                  })}
                </optgroup>
              </select>
            </div>
            <div className="state">
              <label htmlFor="state">
                Town/city
                <p style={{ color: "red" }}> *</p>
              </label>
              <select
                name="state"
                id="state"
                onChange={(e) => {
                  setStateSelect(
                    states.filter((state) => {
                      return state.name == e.target.value;
                    })
                  );
                }}
              >
                <optgroup>
                  {filteredStates.map((state) => {
                    return <option value={state.name}>{state.name}</option>;
                  })}
                </optgroup>
              </select>
            </div>
            {/* <div className="city">
              <label htmlFor="city">
                Town/City
                <p style={{ color: "red" }}> *</p>
              </label>
              <select name="city" id="city">
                <optgroup>
                  {filteredCities.map((city) => {
                    return <option value={city.name}>{city.name}</option>;
                  })}
                </optgroup>
              </select>
            </div> */}
          </div>

          <div className="post-code">
            <div className="postcode">
              <label htmlFor="postcode">
                Post/Zip code<p style={{ color: "red" }}> *</p>
              </label>
              <input type="text" name="postcode" id="postcode" />
            </div>
          </div>
          <div className="personal">
            {/* <PhoneInputWithCountrySelect onChange={e=>{}} international /> */}

            <div className="phone-holder">
              <label htmlFor="phone">
                Phone<p>(optional) </p>
              </label>
              <div className="phone">
                <select name="" id="">
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
            </div>
          </div>
          <input type="button" className="login-btn" value="Save changes" />
        </form>
        <div className="pictures">
          <p style={{ color: "#ff6a6a", float: "right" }}>upload Photos</p>
          <div className="images">
            <img src={testimonials.catherine} alt="" />
            <img src={images.photos} alt="" />
            <img src={images.photos} alt="" />
            <img src={images.photos} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
