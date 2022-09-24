import React,{useState} from 'react'
import { DropdownDate,DropdownComponent } from 'react-dropdown-date'
import PhoneInputWithCountrySelect from 'react-phone-number-input'
import { signUp } from '../assets/assets' 
import '../styles/signup.css'
import { countryCode } from '../data/CountryCodes' 
// import * as country from 'countrycitystatejson'
import {country,states,city} from '../data/address'
import { useRef,useEffect } from 'react'
import { questionBank } from '../data/questionBank'

const Verify = () => {
    const {Education,Employment,Ethnicity,relationship,Language,BodyType,EyeColour,Children,HairColour} = questionBank
  return (
    <main id="sign-up">
        <section className="signup-form">
            <img src={signUp.verify} alt="" className="banner" />
            <div className="form">
                <h2>
                    Congratulations your email has been verified
                </h2>
                <form action="" method="post" >
                    <div className="address">
                        <div className="country">
                            <label htmlFor="country">
                                Relationship status
                            </label>
                            <select name="relationship" id="relationship">
                                <optgroup>
                                    {
                                        relationship.map((status)=>{
                                            return(
                                                <option value={status}>
                                                    {
                                                        status
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                        <div className="state">
                            <label htmlFor="state">
                                Ethnic Background
                            </label>
                            <select name="Ethnic" id="Ethnic">
                                <optgroup>
                                    {
                                        Ethnicity.map((ethnic)=>{
                                            return(
                                                <option value={ethnic}>
                                                    {
                                                        ethnic
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="address">
                        <div className="country">
                            <label htmlFor="country">
                                Highest Educational Attainment
                            </label>
                            <select name="country" id="Education">
                                <optgroup>
                                    {
                                        Education.map((education)=>{
                                            return(
                                                <option value={education}>
                                                    {
                                                        education
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                        <div className="state">
                            <label htmlFor="state">
                                Employment Status
                            </label>
                            <select name="state" id="state">
                                <optgroup>
                                    {
                                        Employment.map((employment)=>{
                                            return(
                                                <option value={employment}>
                                                    {
                                                        employment
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="mail">
                        <label htmlFor="email">
                            What kind of work do you do currently?
                        </label>
                        <p>
                        If unemployed, enter the kind of work you are seeking.
                        </p>
                        <input placeholder='e.g:software' required type="email" name="email" id="email" />
                    </div>
                    <div className="mail">
                        <label htmlFor="email">What is your future career goal?</label>
                        <input placeholder='e.g:ayofaluyi@gmail.com' required type="email" name="email" id="email" />
                    </div>

                    <div className="address">
                        <div className="country">
                            <label htmlFor="country">
                                Height
                            </label>
                            <select name="country" id="country">
                                <optgroup>
                                    {
                                        country.map((country)=>{
                                            return(
                                                <option value={country.name}>
                                                    {
                                                        country.name
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                        <div className="country">
                            <label htmlFor="country">
                                Weight
                            </label>
                            <select name="country" id="country">
                                <optgroup>
                                    {
                                        country.map((country)=>{
                                            return(
                                                <option value={country.name}>
                                                    {
                                                        country.name
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                        <div className="state">
                            <label htmlFor="state">
                                Bodytype
                            </label>
                            <select name="state" id="state">
                                <optgroup>
                                    {
                                        BodyType.map((body)=>{
                                            return(
                                                <option value={body}>
                                                    {
                                                        body
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="address">
                        <div className="country">
                            <label htmlFor="country">
                                Natural Hair Colour
                            </label>
                            <select name="country" id="country">
                                <optgroup>
                                    {
                                        HairColour.map((color)=>{
                                            return(
                                                <option value={color}>
                                                    {
                                                        color
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                        <div className="state">
                            <label htmlFor="state">
                                Eye Colour
                            </label>
                            <select name="state" id="state">
                                <optgroup>
                                    {
                                        EyeColour.map((state)=>{
                                            return(
                                                <option value={state}>
                                                    {
                                                        state
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                    </div>
                        <div className="state">
                            <label htmlFor="state">
                                Languages spoken
                            </label>
                            <select name="state" id="state">
                                <optgroup>
                                    {
                                        Language.map((state)=>{
                                            return(
                                                <option value={state}>
                                                    {
                                                        state
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                        <div className="state">
                            <label htmlFor="state">
                                How many children have you?
                            </label>
                            <select name="state" id="state">
                                <optgroup>
                                    {
                                        Children.map((state)=>{
                                            return(
                                                <option value={state}>
                                                    {
                                                        state
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>

                </form>
                <div className="call-to-action">
                    <p >
                    Already a member? <a> Sign In</a>
                    </p>
                    <button className="Join-btn">
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Verify