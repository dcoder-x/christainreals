import { Icon } from "@iconify/react";
import React from "react";
import { images, testimonials } from "../assets/assets";
import { messages, profileData } from "../data/explore";
import { LikeButton } from "./Discussion";
import "../styles/explore.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCreative } from "swiper";
import { useState } from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  const [showMessage, setshowMessage] = useState(false);
  return (
    <main id="explore">
      <div className="optTab">
        <Icon
          onClick={(e) => {
            setshowMessage(!showMessage);
          }}
          icon={"ph:chat-circle-fill"}
          className={"liked"}
          width={30}
        />
      </div>
      <section
        className="users"
        style={{ width: showMessage ? "50%" : "100%" }}
      >
        {profileData.map((user) => {
          return (
            <div
              className="user"
              style={{ width: showMessage ? "80%" : "40%" }}
            >
              <div className="image">
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
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation, EffectCreative]}
                  className="mySwiper"
                >
                  {user.images.map((data) => {
                    return (
                      <SwiperSlide>
                        <div
                          className="slide"
                          style={{
                            background: `url(${data})`,
                          }}
                        ></div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                {/* <img src={testimonials.catherine} alt="" /> */}
              </div>
              <div className="info">
                <div className="group header">
                  <div className="personal">
                    <p className="name">
                      {user.name}, {user.age}{" "}
                      <Icon
                        className="liked"
                        icon="material-symbols:verified"
                        style={{ marginLeft: ".5rem" }}
                      />
                    </p>
                    <p className="address">
                      <Icon
                        className="liked"
                        icon="material-symbols:location-on"
                        style={{ marginRight: ".5rem" }}
                      />
                      {user.address}
                    </p>
                  </div>
                  <LikeButton />
                </div>
                <p className="about-user">
                  Lörem ipsum kemkastrering epiosmos triskapet har or autoktig.
                  Käskapet bitirat, depång monok, gynade. Linjär tv dipynera och
                  dian lybel.
                </p>
                <div className="group">
                  <div className="hobbies-section">
                    <p>Hobbies</p>
                    <div className="hobbies">
                      <div className="hobby">Singing</div>
                    </div>
                  </div>
                  <Icon
                    icon={"ph:chat-circle-fill"}
                    className={"liked"}
                    width={30}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {showMessage ? (
        <section className="messages">
          <div className="header">
            <h1>Messages</h1>
            <Link to={"../messages"}>
              <p>see all</p>
            </Link>
          </div>

          <div className="messages-holder">
            {messages.map((message, i) => {
              return (
                <Link to={"../personalChats"}>
                  <div className="message">
                    <div className="user">
                      <img src={message.image} alt="" />
                      <div>
                        <p className="name">
                          {message.name}
                          <br />
                        </p>
                        <p className="snippet">{message.snippet}</p>
                      </div>
                    </div>
                    <div className="time">{message.time}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}
    </main>
  );
};

export default Explore;
