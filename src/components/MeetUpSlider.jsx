import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/events.css";
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";
import { Icon } from "@iconify/react";
import Modal from "./Modal";

export const MeetSwiper = ({
  eventgroup,
  isheader,
  data,
  past,
  scheduled,
  upcoming,
}) => {
  const [rsvpShow, setrsvpShow] = useState(false);
  const [deleteMeetup, setdeleteMeetup] = useState(false);
  const [reportMeetup, setreportMeetup] = useState(false);

  return (
    <section className="events">
      {isheader ? (
        <div className="events-header">
          <div className="event-class">
            <h2>
              {`${eventgroup} (${data.length < 100 ? data.length : "99+"})`}
            </h2>
          </div>
          {/* <div >
                    <select className="events-filter" name="" id="">
                        <optgroup>
                            <option value="florida">Florida</option>
                            <option value="florida">Texas</option>
                            <option value="florida">Pekkam</option>
                        </optgroup>
                    </select>
                </div> */}
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
        slidesPerView={3}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <section className="events-holder">
          {data.map((event) => {
            return (
              <SwiperSlide>
                <div className="event">
                  {scheduled ? (
                    <Icon
                      color="FF6A6A"
                      icon="material-symbols:delete-outline"
                      onClick={(e) => {
                        setdeleteMeetup(true);
                      }}
                      className={"icon"}
                    />
                  ) : null}
                  {past ? (
                    <Icon
                      color="FF6A6A"
                      icon="ic:outline-report-gmailerrorred"
                      className={"icon"}
                      onClick={(e) => {
                        setreportMeetup(true);
                      }}
                    />
                  ) : null}
                  <div className="image">
                    <img src={event.image} alt="" className="eventimg" />
                  </div>

                  <div className="event-body">
                    {/* <div className="date">
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
                                        </div> */}
                    <div className="text">
                      <p className="title">{event.name}</p>
                      <p className="desc">{event.desc}</p>
                    </div>
                  </div>
                  {upcoming ? (
                    <div
                      className="rsvp"
                      onClick={(e) => {
                        setrsvpShow(true);
                      }}
                    >
                      RSVP
                    </div>
                  ) : null}
                </div>
              </SwiperSlide>
            );
          })}
        </section>
      </Swiper>
      <Modal
        show={rsvpShow}
        onclose={(e) => {
          setrsvpShow(false);
        }}
        message={"Do you want to rsvp this meetup?"}
        title={"RSVP"}
        actionText={"OK"}
      />
      <Modal
        show={deleteMeetup}
        onclose={(e) => {
          setdeleteMeetup(false);
        }}
        message={
          "You are about to cancel this meetup, Do you wish to continue?"
        }
        title={"Cancel Meetup"}
        actionText={"OK"}
      />
      <Modal
        show={reportMeetup}
        onclose={(e) => {
          setreportMeetup(false);
        }}
        message={"What are you reporting this meetup for"}
        Comp={
          <form className="reportMeetup" style={{ width: "90%" }}>
            <input
              type="text"
              placeholder="What is your reason for reporting this meetup"
            />
          </form>
        }
        title={"Report Meetup"}
        actionText={"Report"}
      />
    </section>
  );
};
