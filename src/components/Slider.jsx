import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {sliderData} from '../data/sliderData'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/slider.css";

// import required modules
import { Autoplay, Pagination, Navigation,EffectCreative } from "swiper";
import { Link } from "react-router-dom";



const Slider = () => {
  return (
    <div className="slider-container">
        <Swiper
        grabCursor={true}  
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
               
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectCreative]}


        className="mySwiper"
        >

        {sliderData.map((data)=>{
          
          return(
            <SwiperSlide 
            > 
              <div className="slide" style={{background:`linear-gradient(0deg,rgba(203, 11, 11, 0.26),rgba(203, 11, 11, 0.16)),url(${data.bgImage})`}} >
              {/* <img src={data.bgImage} alt="" className="slider-bg" /> */}

                <div className="slider-text">
                  <p className="slider-title">
                    {
                      data.title
                    }
                  </p>
                  <p className="slider-desc">
                    {
                      data.text
                    }
                  </p>
                  <Link to={'/signup'}>
                    <button className="Join-btn">
                      Join now
                    </button>
                  </Link>


                </div>

              </div>
            </SwiperSlide>

            
          )
        })}
        
        </Swiper>
    
    </div>
  )
}

export default Slider