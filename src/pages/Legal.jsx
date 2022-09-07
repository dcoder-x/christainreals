import React from 'react'
import { headerBg } from '../assets/assets'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import { legalData } from '../data/legalData'
import '../styles/legal.css'


const Legal = () => {
  return (
        <main id='legal'>
            <PageHeader headerImage={headerBg.headerimage3} pageTitle={'Legal'}/>
            <section className='legal-section'>
                
                    {
                        legalData.map(data=>{
                            return(
                                <>  
                                    <div className="legal-div">
                                        <img src={data.icon} className="icon"/>
                                            
                                        
                                        <div className="title">
                                            {
                                                data.title
                                            }
                                        </div>
                                        <div className="text">
                                            {
                                                data.text
                                            }
                                        </div> 
                                        <button style={{borderRadius:'3px'}} className='Join-btn'>
                                            Read more
                                        </button>
                                    </div>
                                </>
                      
                            )
                        })
                    }
                    

            </section>
            <Footer/>
        </main>
  )
}

export default Legal