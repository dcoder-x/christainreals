import React from 'react'
import { useState } from 'react'
import { headerBg } from '../assets/assets'
import Footer from '../components/Footer'
import PageHeader from '../components/pageHeader'
import '../styles/help.css'

const Help = () => {
    const [show, setShow] = useState(false)
  return (
    <main id="help">
        <PageHeader pageTitle={'Help and support'} headerImage={headerBg.headerimage4}/>
        <section className='contact-container'>
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
                    <label for="full-name">Full name</label>
                    <input type="text" name="full-name" id="full-name" placeholder="Full Name"/>
                    <label for="e-name">E-mail</label>
                    <input type="email" name="e-mail" id="e-mail" placeholder="e-mail address"/>
                    <label for="message">Message</label>
                    <input type="text" name="message" id="message" placeholder="Enter message..."/>
                    <input type="submit" value="send" id="send-btn"/>
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
        
            <div class="accordion" style={{height:!show?'70px':'auto'}} onClick={e=>{
                setShow(!show)
            }}>
                <div class="accordion-header">
                    <div class="accordion-text">
                        <p>
                            How do i create an account
                        </p>
                        <div class="accordion-btn">
                            {
                                !show?'+':'-'
                            }
                        </div>
                    </div>
                
                </div>
                <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit at laboriosam ratione assumenda, dolores nisi eos obcaecati esse harum ad quas eum debitis magni 
                    officia quasi ipsam inventore fugiat quibusdam?
                </div>
            </div>
        </section>
        <section className="safety">
            <h2>
                Safety advice
            </h2>
            <h4>
            Your safety is our utmost priority. Click <a href="" style={{color:'red'}} >here</a> to read our safety tips.
            </h4>
        </section>
        <Footer/>
    </main>
  )
}

export default Help