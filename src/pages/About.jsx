import React from "react";
import PageHeader from "../components/PageHeader";
import { about, headerBg } from "../assets/assets";
import "../styles/about.css";
import { believe, whoWeAre } from "../data/aboutData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main id="about">
      <PageHeader headerImage={headerBg.headerimage} pageTitle={"About Us"} />
      <section className="who-we-are">
        <div className="text">
          <h1 className="title">Who We Are</h1>
          {whoWeAre.map((points) => {
            return <p className="desc">{points}</p>;
          })}
        </div>
        <img src={about.whoImage} alt="" className="who-image" />
      </section>
      <section className="more">
        <h1>More Than Just A Dating Website</h1>
        <div className="desc">
          <p>
            Christian Reals is not just a dating website. It is an online
            community where you can have fun, grow your faith and improve your
            personal life whilst searching for love.
          </p>
          <p>
            We have very active and lively discussion boards and a system that
            allows members to organise local meetup activities. We also organise
            offline events to give people a chance to meet face to face in a
            safe and comfortable environment. Our events cover a range of themes
            including but not limited to conferences, workshops, retreats,
            get-aways, music festivals, films, theatres, comedy nights etc.
          </p>
        </div>
      </section>
      <section id="believe" className="believe">
        <div className="vector">
          <p className="title">What We Believe</p>
          <img src={about.fancyArrow} alt="" className="arrow" />
        </div>
        <div className="believes">
          {believe.map((point) => {
            return (
              <div className="text-holder">
                <p className="desc">{point}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="core-values">
        <div className="title">
          <h1>Our Core Values</h1>
          <p>
            We are in this together. Our core values are the deeply engrained
            principles that guide all of our actions in delivering the service
            to our members. They also represent the set of behaviours we expect
            from all our members who use our service. These are:
          </p>
        </div>
        <div className="desc">
          <h4>Safety</h4>
          <p>
            The safety of our members is our highest priority. We are committed
            to the highest level of safety and security on our platform and at
            our events. Members are expected to exhibit behaviours that will
            make other members feel safe and not threatened in any way while
            using our platform or attending our meetups and events. We encourage
            members to work at each other’s pace, keep communication online and
            only meet offline when both parties are absolutely comfortable and
            feel safe to do so. No member should put undue pressure on another.
            You can read our
            <a
              onClick={(e) =>
                window.open(
                  "https://docs.google.com/document/d/e/2PACX-1vSUmRIYu2pVmBnhjmrxru4rPH2ryoaGh2FOvDQlj-DDiXbgAYxWZPf2mDVKXe3juw/pub"
                )
              }
            >
              {" "}
              Safety Advice
            </a>{" "}
            .
          </p>
        </div>
        <div className="desc">
          <h4>Trust</h4>
          <p>
            We want our members to be able to trust us with their information.
            We will take all steps reasonably necessary to ensure that your data
            is treated securely and in accordance with our
            <a
              href=""
              onClick={(e) =>
                window.open(
                  "https://docs.google.com/document/d/e/2PACX-1vTDt58Lm2Ue9y8Rqa0wHfjsLeu66BWgLprFikIuAjtGDSXzYKFejn_-_5wxYc2hmA/pub"
                )
              }
            >
              {" "}
              Privacy policy{" "}
            </a>
            . &nbsp; We expect our members to protect any personal information
            they may obtain about another member in the course of using our
            Website or our Service.
          </p>
        </div>
        <div className="desc">
          <h4>Respect</h4>
          <p>
            We recognise that the Christian faith and traditions are broad; we
            welcome Christians from a range of faith traditions and church
            denominations; and we respect each member’s beliefs and values. By
            joining Christian Reals, you are committing to treating other
            members with respect, and not to attack or undermine the faith,
            beliefs or traditions of any member, whether directly or indirectly,
            whether online or offline. We only ask that you join us if you
            believe and accept
            <a href="#believe" >
              {" "}
              What we believe{" "}
            </a>
            , and you have read and accept our{" "}
            <a
              href=""
              onClick={(e) =>
                window.open(
                  "https://docs.google.com/document/d/e/2PACX-1vRqQ7H9ANf0U6PUJ6zYXpWI9S3zCjT3lnlXxg3T7HZ_8IQcK4v3CCL3Ivh4WGAytg/pub"
                )
              }
            >
              {" "}
              Terms and Conditions
            </a>{" "}
            .
          </p>
        </div>
        <div className="desc">
          <h4>Honesty</h4>
          <p>
            We will not make false promises. We will be honest about our
            strengths and weaknesses, what we can or cannot deliver. We expect
            our members to be honest about who they are and not claim to be what
            they are not. Your profile gives you the opportunity to give honest
            information about yourself.
          </p>
        </div>
        <div className="desc">
          <h4>Quality</h4>
          <p>
            What sets us apart is our ability to help our members make quality
            connections. We feature robust profiles and personalisation features
            to help members connect with genuine people. Our suite of powerful
            communication tools helps members make deeper and more personal
            connections that should potentially lead to a lasting relationship.
          </p>
        </div>
      </section>
      <section className="invitation">
        <div className="special">
          <img src={about.invitation} alt="" />
          <div className="text">
            <h3>Our Special Invitation to You!</h3>
            <p>
              You are specially invited to join our growing community of
              members. It is free to join and you can cancel at any time. With
              our various membership types and attractive offers, there is
              something for everyone. You can take a look at our
              <a href="">membership types</a>.
            </p>
          </div>
        </div>
        <div className="waiting">
          <h3 className="title">What are you still waiting for?</h3>
          <p className="body">
            Sign up now to start connecting immediately with likeminded real
            single Christians.
          </p>
          <Link to={"/signin"}>
            <button className="Join-btn">Join Now</button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
