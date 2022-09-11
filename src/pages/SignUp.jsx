import React,{useState} from 'react'
import { DropdownDate } from 'react-dropdown-date'
import PhoneInputWithCountrySelect from 'react-phone-number-input'
import { signUp } from '../assets/assets' 
import '../styles/signup.css'
import { countryCode } from '../data/CountryCodes' 
// import * as country from 'countrycitystatejson'
import {country,states,city} from '../data/address'
import { useRef,useEffect } from 'react'

const SignUp = () => {
    // console.log(countryCode)
    //  const countries = country.getCountries()
    //  const states = country.getCities('AE',"Abu Dhabi")
    //  console.log(states)
    // console.log(country)
    // const radioref = useRef()
    const [countrySelect,setCountryselect] = useState()
    const [iswoman, setiswoman] = useState(false)
    const [isman, setisman] = useState(false)
    const [seekingMan, setseekingMan] = useState(false)
    const [seekingWoman, setseekingWoman] = useState(false)

    var filteredStates  = []

    states.map((state)=>{
        // console.log(state.country_id,countrySelect.id)
        if (countrySelect) {
            if(state.country_id== countrySelect[0].id){
                filteredStates.push(state)
                }
        }
        else{
            filteredStates.push(state)
        }
    })
    console.log(filteredStates)
    // useEffect(() => {
    //     console.log(radioref.current.value)
    // }, [])
    
    
  return (
    <main id="sign-up">
        <section className="signup-form">
            <img src={signUp.signup} alt="" className="banner" />
            <div className="form">
                <h2>
                    Sign Up
                </h2>
                <form action="" method="post" >
                    <div className="radios">
                        <div className="genders">
                            <p>
                                I am
                            </p>
                            <div className="gender">
                               <input className='radio' 
                               onClick={e=>{
                                setiswoman(!iswoman)
                               }} 
                               type="radio" name="woman" id="woman" checked={iswoman} disabled={isman}  /> 
                               <p htmlFor="woman">A woman</p>
                            </div>
                            <div className="gender">
                               <input
                                    onClick={e=>{
                                        setisman(!isman)
                                    }} 
                                    disabled={iswoman}
                                    checked={isman}
                                    className='radio' type="radio" name="man" id="man" 
                                /> 
                               <p htmlFor="woman">A man</p>
                            </div>
                            
                        </div>
                        <div className="seeking">
                            <p>
                                Seeking
                            </p>
                            <div className="gender">
                               <input 
                                disabled={iswoman} 
                                checked={isman} 
                                className='radio' 
                                type="radio" 
                                name="seekingwoman" 
                                id="seekingwoman" 
                               /> 
                               <p htmlFor="woman">A woman</p>
                            </div>
                            <div className="gender">
                               <input 
                                className='radio' 
                                type="radio" 
                                name="seekingman" 
                                disabled={isman} 
                                checked={iswoman} 
                                id="seekingman" 
                               /> 
                               <p htmlFor="woman">A man</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mail">
                        <label htmlFor="email">E-mail</label>
                        <input placeholder='e.g:ayofaluyi@gmail.com' required type="email" name="email" id="email" />
                    </div>
                    <div className="names">
                        <div className="name">
                            <label htmlFor="fname">
                                First Name
                            </label>
                            <input type="text" placeholder='e.g:Ayo' name="fname" id="fname" />
                        </div>
                        <div className="name">
                            <label htmlFor="sname">
                                Surname
                            </label>
                            <input placeholder='e.g:Philips' type="text" name="sname" id="sname" />
                        </div>
  
                    </div>
                    <p className="info">
                            These will not be visible to the public. Only system-allocated user IDs 
                            which would be a combination of first name and digits will be publicly displayed. 
                        </p>
                    <div className="address">
                        <div className="country">
                            <label htmlFor="country">
                                Country
                            </label>
                            <select name="country" id="country" onChange={e=>{
                                country.filter(country=>{country.name==e.target.value})
                                setCountryselect(country.filter(country=>{
                                  return  country.name==e.target.value
                                }))
                                console.log(e.target.value)
                                console.log(countrySelect[0].id)
                            }}>
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
                                state
                            </label>
                            <select name="state" id="state">
                                <optgroup>
                                    {
                                        filteredStates.map((state)=>{
                                            return(
                                                <option value={state.name}>
                                                    {
                                                        state.name
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="post-code">
                        <div className='postcode'>
                        <label htmlFor="postcode">Post code</label>
                        <input type="number" name="postcode" id="postcode" />
                        </div>

                        <p className="info">
                        Only town/city and country will be visible by other members so that members can search for their matches by location; postcodes are not displayed publicly 
                        but are only used to enable members search for other members near them
                        </p>
                    </div>
                    <div className="personal">
                        {/* <PhoneInputWithCountrySelect onChange={e=>{}} international /> */}

                        
                        <div className="phone-holder">
                        <label htmlFor="phone">Phone</label>
                            <div className="phone">
                            <select name="" id="">
                                <optgroup>
                                {
                                        countryCode.map((code)=>{
                                            return(
                                                <option value={code.dial_code}>
                                                    {
                                                        `${code.name} ${code.dial_code}`
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                            <input type="number" name="phone" id="phone" maxLength={10} />
                            </div>
                        </div>
                      
                        <div className="dob">
                        <label htmlFor="phone">date of birth</label>
                            <DropdownDate
                            startDate={
                              // optional, if not provided 1900-01-01 is startDate
                              "1900-01-01" // 'yyyy-mm-dd' format only
                            }
                            endDate={
                                // optional, if not provided current date is endDate
                                "2013-12-31" // 'yyyy-mm-dd' format only
                            }
                            // selectedDate={
                            //     '2001-10-18'
                            // }
                            defaultValues={
                               { 
                                year: '2001',
                                month: '10',
                                day: '18'
                            }
                            }
                            />
                        </div>
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

export default SignUp