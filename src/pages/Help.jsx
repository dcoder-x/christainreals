import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { headerBg } from '../assets/assets'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import '../styles/help.css'

const Help = () => {
    const [show, setShow] = useState(false)
    useEffect(()=>{
        const accordion= document.querySelectorAll('.accordion') 
        const accordionBtn= document.querySelectorAll('.accordion-btn') 

        accordion.forEach((element,index) => {
            element.onclick=()=>{
            
                element.classList.toggle('open')
                if (element.classList.contains('open')) {
                    accordionBtn[index].innerHTML='&minus;'
                }
                else{
                    accordionBtn[index].innerHTML='&plus;'
                }
            }
        });
    })
  return (
    <main id="help">
        <PageHeader pageTitle={'Help and support'} headerImage={headerBg.headerimage4}/>
        <section className='contact-container'>
        <h1 style={{textAlign:'center'}}>
                Contact Us
        </h1>
        <div class="contact">

            <div class="contact-banner">
                <div className="banner-text">
                    <h6>
                        wanna talk to us?
                    </h6>
                    <h3>
                        How can we help you?
                    </h3>
                </div>
                <div className="contact-desc">
                    <p style={{margin:0}}>
                        Our Support Team is happy to assist you with any questions you may have. 
                        Send us a message by completing our Contact Us Form or send us an email 
                        to <a href="" style={{color:'#ff5757',fontWeight:700}}>info@christianreals.com</a> and we will get back to you as soon as possible. 
                        You can also visit our 
                        Frequently Asked Questions where you may find answers to your questions.
                    </p>
               
                </div>
                {/* <img src="../images/line.png" alt=""/> */}
            </div>
            <div class="contact-form">

                <form>
                    <label for="first-name">First name</label>
                    <input type="text" name="first-name" id="first-name" placeholder="First Name"/>
                    <label for="surname">Surname name</label>
                    <input type="text" name="surname" id="surname" placeholder="Surname"/>
                    <label for="full-name">User Id</label>
                    <input type="text" name="userid" id="userId" placeholder="User ID"/>
                    <label for="e-name">E-mail</label>
                    <input type="email" name="e-mail" id="e-mail" placeholder="e-mail address"/>
                    <label for="full-name">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Subject"/>
                    <label for="message">Message</label>
                    <input type="text" name="message" id="message" placeholder="Enter message..."/>
                    <input type="submit" value="Submit" id="send-btn"/>
                </form>
            </div>
        </div>
        </section>
        <section className="faq">
            <div className="header">
                <h1 className="title">
                    FAQ
                </h1>
                <p>
                    Here are some frequently asked questions
                </p>
            </div>
            <div class={`accordion`}>
                <div class="accordion-header">
                    <div class="accordion-text">
                        <p>
                        I didn’t receive an activation email when I signed up
                        </p>
                        <div class="accordion-btn">
                            +
                        </div>
                    </div>
                
                </div>
                <div class="accordion-body">
                When you signed up, you should have received an email asking you to verify your account.
                This is to ensure we are able to send important account notifications to you.
                <ul>
                    <li>
                    Please check the inbox of the email 
                    address used to sign up thoroughly, including any spam/junk folders.
                    </li>
                    <li>
                    Check that your email address is correct and 
                    update your email address if necessary.
                    </li>
                    <li>
                        <a href="">Contact us </a>  to request an activation email so we can resend it to you.
                    </li>
                </ul>
                </div>
            </div>
            <div class={`accordion`}>
                <div class="accordion-header">
                    <div class="accordion-text">
                        <p>
                        Why can’t I log in?
                        </p>
                        <div class="accordion-btn">
                            +
                        </div>
                    </div>
                
                </div>
                <div class="accordion-body">
                If you are experiencing difficulty logging into 
                your account, please ensure the following:
                <ul>
                    <li>
                    Ensure that the web address is typed correctly 
                    in the address bar of your web browser.
                    </li>
                    <li>
                    Ensure that you have an internet connection.
                    </li>
                    <li>
                    Ensure that you have entered your log-in 
                    details (User ID or email and password) correctly.
                    </li>
                </ul>
                Your User ID or email address may be used to log in. 
                All passwords are case sensitive - they must be typed correctly using 
                upper and lower case where applicable. If you have 
                forgotten your password, you can  <a href=""> reset it here</a> . 
                If you have forgotten your email or User ID, please <a href=""> contact us</a> .
                </div>
            </div>
            <p style={{color:'white'}}>
                See more <a href="/faq">FAQs </a> here
            </p>
        </section>
        <section className="safety">
            <h2>
                Safety advice
            </h2>
            <h4>
            Your safety is our utmost priority. Click <p onClick={e=>window.open('https://docs.google.com/document/d/e/2PACX-1vSUmRIYu2pVmBnhjmrxru4rPH2ryoaGh2FOvDQlj-DDiXbgAYxWZPf2mDVKXe3juw/pub')} style={{color:'red'}} >here</p> to read our safety tips.
            </h4>
        </section>
        <Footer/>
    </main>
  )
}

export default Help