import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/events.css";
import { Autoplay, Pagination, Navigation,EffectCreative } from "swiper";
import {eventsData} from '../data/eventsData'
import PageHeader from '../components/PageHeader';
import { headerBg } from '../assets/assets';
import Footer from '../components/Footer';
headerBg

const Events = () => {
  return (
    <main id='events'>
        <PageHeader headerImage={ headerBg.headerimage5 } pageTitle={'Events'}/>
        <EventSwiper eventgroup={'My events'}/> 
        <EventSwiper eventgroup={'Past events'}/> 
        <EventSwiper eventgroup={'Upcoming'}/> 
        <Footer/>
    </main>
    
  )
}



export const EventSwiper = ({eventgroup,isheader}) => {
  return (
    
    <section className="events">
        {
            isheader?
            <div className="events-header">
                <div className="event-class">
                    <h2>
                        {
                            eventgroup
                        }
                    </h2>
                </div>
                <div >
                    <select className="events-filter" name="" id="">
                        <optgroup>
                            <option value="florida">Florida</option>
                            <option value="florida">Texas</option>
                            <option value="florida">Pekkam</option>
                        </optgroup>
                    </select>
                </div>
            </div>:
            null
        }

        <Swiper
        grabCursor={true}  
        spaceBetween={10}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={3}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectCreative]}


        className="mySwiper"
        >
            <section className="events-holder"> 
                {
                    eventsData.map((event)=>{
                        return(
                            <SwiperSlide>
                                <div className='event'>
                                    <div className="image">
                                        <img src={event.image} alt="" className="eventimg" />
                                    </div>
                                    
                                    <div className="event-body">
                                        <div className="date">
                                            <p className="month">
                                                {
                                                    event.date[0]
                                                }
                                            </p>
                                            <p className="day">
                                                {
                                                    event.date[1]
                                                }
                                            </p>
                                        </div>
                                        <div className="text">
                                            <p className="title">
                                                {
                                                    event.name
                                                }
                                            </p>
                                            <p className="desc">
                                                {
                                                    event.desc
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </section>
        </Swiper>
    </section>
  )
}


export default Events