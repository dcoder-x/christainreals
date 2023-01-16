import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/events.css";
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";
import { eventsData } from "../data/eventsData";
import PageHeader from "../components/PageHeader";
import { headerBg } from "../assets/assets";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import { useId } from "react";
import { useEffect } from "react";
import { useWindowDimensions } from "../components/hooks";
import Modal from "../components/Modal";
headerBg;

const Events = () => {
  return (
    <main id="events">
      <PageHeader headerImage={headerBg.headerimage5} pageTitle={"Events"} />
      <EventSwiper
        eventgroup={"My Scheduled events"}
        data={eventsData}
        isheader
      />
      <EventSwiper
        eventgroup={"All Upcoming events"}
        upcoming
        data={eventsData}
        isheader
      />
      <EventSwiper
        eventgroup={"All Past events"}
        past
        data={eventsData}
        isheader
      />
      <Footer />
    </main>
  );
};

export const EventSwiper = ({ eventgroup, isheader, data, past, upcoming }) => {
  const [liked, setliked] = useState(false);
  const { width, height } = useWindowDimensions();
  const [deleteEvent, setdeleteEvent] = useState()
  const [registerEvent, setregisterEvent] = useState()


  return (
    <section className="events">
      {isheader ? (
        <div className="events-header">
          <div className="event-class">
            <h2>{eventgroup}</h2>
          </div>
          <div>
            <select className="events-filter" name="" id="">
              <optgroup>
                <option value="florida">Florida</option>
                <option value="florida">Texas</option>
                <option value="florida">Pekkam</option>
              </optgroup>
            </select>
          </div>
        </div>
      ) : null}

      <Swiper
        grabCursor={true}
        spaceBetween={10}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={width < 801 ? 1 : 3}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <section className="events-holder">
          {data.map((event, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="event">
                  <div className="image">
                    <img src={event.image} alt="" className="eventimg" />
                  </div>

                  <div className="event-body">
                    <div className="date">
                      <p className="month">{event.date[0]}</p>
                      <p className="day">{event.date[1]}</p>
                    </div>
                    <div className="text">
                      <p className="title">{event.name}</p>
                      <p className="desc">
                        {event.desc.slice(0, 40)} ... <b> read more </b>
                      </p>
                    </div>
                  </div>
                  {upcoming ? <div className="register" onClick={e=>setregisterEvent(true)}> Register</div> : null}
                  {past ? (
                    <Icon
                      color="FF6A6A"
                      icon="mdi:cards-heart-outline"
                      onClick={(e) => {
                        setliked(!liked);
                        console.log(liked);
                      }}
                      fill={liked}
                      className={"icon"}
                    />
                  ) : null}
                  {!upcoming || past ? (
                    <Icon
                      color="FF6A6A"
                      icon="material-symbols:delete-outline"
                      onClick={(e) => {
                        setdeleteEvent(true);
                      }}
                      className={"icon"}
                    />
                  ) : null}
                </div>
              </SwiperSlide>
            );
          })}
        </section>
      </Swiper>
      <Modal
        show={deleteEvent}
        onclose={(e) => {
          setdeleteEvent(false);
        }}
        message={"Are you sure you want to delete this event?"}
        title={"Delete event"}
        actionText={"delete"}
        onAccept={(e) => {
          setdeleteEvent(false);
        }}
        closeText={"cancel"}
      />
            <Modal
        show={registerEvent}
        onclose={(e) => {
          setregisterEvent(false);
        }}
        message={"Are you sure you want to register this event?"}
        title={"Register event"}
        actionText={"register"}
        onAccept={(e) => {
          setregisterEvent(false);
        }}
        closeText={"cancel"}
      />
    </section>
  );
};

export default Events;
