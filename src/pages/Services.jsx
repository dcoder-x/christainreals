import React from 'react'
import { headerBg } from '../assets/assets'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import { services } from '../data/servicesData'
import '../styles/services.css'

const Services = () => {
  return (
    <main id='services'>
        <PageHeader pageTitle={'Our Services'} headerImage={headerBg.headerimage2}/>
        <section className="our-services">
            {
                services.map(service=>{
                    return(
                    <div className="service">
                        <div className="title">
                            {
                                service.title
                            }
                        </div>
                        <div className="text">
                            {
                                service.text
                            }
                        </div>
                        <button className="Join-btn">
                            Join now
                        </button>
                    </div>
                    )
                })
            }

        </section>
        <Footer/>
    </main>
  )
}

export default Services