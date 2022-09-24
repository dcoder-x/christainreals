import React from 'react'
import { testimonies } from '../data/testimonial'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/testimonial.css";
import { Autoplay, Pagination, Navigation,EffectCreative } from "swiper";
// import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section className="testimonies">
        <Swiper
        grabCursor={true}              
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation,EffectCreative]}


        className="mySwiper"
        >

        {testimonies.map((data)=>{
        
        return(
            <SwiperSlide 
            > 
            <div className="slide"  >
                <div className="testimony">
                    <p>
                        {
                            data.testimony
                        }
                    </p>
                    <p className='couple'>
                        {
                            data.couple
                        }
                    </p>
                </div>
                <img src={data.img} alt="" className="testifier" />

            </div>
            </SwiperSlide>

            
        )
        })}
        
        </Swiper>
        <Swiper
        grabCursor={true}              
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation,EffectCreative]}


        className="mySwiper"
        >

        {testimonies.reverse().map((data)=>{
        
        return(
            <SwiperSlide 
            > 
            <div className="slide"  >
                <div className="testimony">
                    <p>
                        {
                            data.testimony
                        }
                    </p>
                    <p className='couple'>
                        {
                            data.couple
                        }
                    </p>
                </div>
                <img src={data.img} alt="" className="testifier" />

            </div>
            </SwiperSlide>

            
        )
        })}
        
        </Swiper>
    </section>


  )
}

export default Testimonial