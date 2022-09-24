import { Icon } from '@iconify/react'
import React, { useRef, useState } from 'react'
import { images, sectionBg, videos } from '../assets/assets'
import Cookies from '../components/cookies'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import Nav from '../components/Nav'
import PopUp from '../components/PopUp'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import { sectionData } from '../data/HomeSectionData'
import '../styles/home.css'


const Home = () => {
    const [videoPlay, setvideoPlay] = useState(false)
    const videoref = useRef(null)

  return (
    <main id="home" style={{marginTop:"5rem"}}>
        {/* <Nav/> */}
        <PopUp/>
        <Slider/>
        <section className="intro">
            <div className="intro-text">
                <h2 className="intro-title">
                    Are you a Christian, single and searching for love?
                </h2>
                <p>
                    Would you want to improve yourself and have fun whilst searching? 
                    Then you have come to the right place! Here, you can meet real single
                    Christians of all ages and backgrounds for relationship, dating and marriage; and you can also enjoy social networking and personal development activities and events all in one place.
                </p>
            </div>
            <div className="vid">
                <video ref={videoref} preload='' src={videos.testvid} title='Welcome to the christain reals website' poster={images.videoPoster}>
                
                </video>
                <div className="play-btn" 
                onClick={e=>{
                    setvideoPlay(!videoPlay);
                    videoPlay?videoref.current.play():videoref.current.pause()
                }}
                onMouseOver={e=>{
                    e.target.style.opacity=1
                }}
                onMouse={e=>{
                    e.target.style.opacity=0
                }}
                >
                    <Icon icon={videoPlay?'bi:play-fill':"bi:pause-fill"}/>
                </div>
            </div>
            
        </section>
        <div className="section-divider" style={{width:"100%",padding:"2rem",}} >
            <p>
                What awaits you
            </p>
        </div>
        {
            sectionData.map((data)=>{
                return(
                    <HomeSection sectionBg={data.bgImage} sectionText={data.desc} sectionTitle={data.title} sectionImg={data.image} key={data.title} />

                )
            })
        }
        <Testimonial/>
        <Cookies/>
        <Footer/>
    </main>
  )
}

export default Home