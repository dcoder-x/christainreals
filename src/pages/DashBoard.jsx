import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { icons, images, testimonials } from "../assets/assets";
import { useScrollToTop } from "../components/hooks";
import { sideMenu } from "../data/sideBar";
import "../styles/dashBoard.scss";
import DashEvents from "./DashEvents";
import DashHelp from "./DashHelp";
import Discussion from "./Discussion";
import Events from "./Events";
import Lovequest from "./Lovequest";
import MeetUp from "./MeetUp";
import Onboard from "./Onboard";
import Profile from "./Profile";
import Settings from "./Settings";
import { Icon } from "@iconify/react";
import Payments from "../components/Payment.";
import Blocked from "../components/Blocked";

const BumpUp = ({ show, onclose,onAccept }) => {
  return (
    <main id="bump-up" style={{ display: show == true ? "flex" : "none" }}>
      <section className="bumpUp-holder">
        <div className="bump-modal">
          <p className="title">Bump Up</p>
          <p className="desc">
            Are you not getting enough messages, smiles, likes or waves from
            other members? It could be because your profile is not easily
            visible to others. Just as in any database, as membership increases,
            people may find themselves being pushed towards the bottom of the
            list in a search result. To ensure that they stay in the top of any
            search result so they can be seen easily and contacted by potential
            matches, premium members can pay a small fee of £7 to be bumped up
            for 28 days from the date of payment. A lot can happen in 28 days,
            you know!
          </p>
          <div className="buttons">
            <button onClick={onAccept}>Bump up now!</button>
            <button className="cancel" onClick={onclose}>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
const DashBoard = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const [show, setshow] = useState(false);

  return (
    <main id="dashboard">
      <div className="sideBar">
        <div className="profile">
          <Link to={"/dashboard/profile"}>
            <div className="img">
              {/* <img src={images.videoPoster} alt="" /> */}
              <div className="status"></div>
            </div>
          </Link>

          <div className="user-info">
            <p>Catherine,29</p>
          </div>
          <div className="user-address">
            <p>Ado,Nigeria</p>
          </div>
          <div
            className="bumpUp"
            onClick={(e) => {
              setshow(true);
            }}
          >
            <img src={icons.bumpUp} alt="" />
            <p>Bump up</p>
          </div>
        </div>
        <div className="menu-holder">
          {sideMenu.map((menu) => {
            return (
              <div
                className="menu"
                onClick={(e) => {
                  navigate(menu.link);
                }}
              >
                <Icon width={20} className="icon" icon={menu.icon} alt="" />

                <p className="menu-name">{menu.name}</p>
              </div>
            );
          })}
        </div>
        <div className="options">
          <div
            className="menu"
            onClick={(e) => {
              navigate("settings");
            }}
          >
            <div className="icon">
              <img src={icons.Settings} alt="" />
            </div>
            <div className="menu-name">Settings</div>
          </div>
          <div
            className="menu"
            onClick={(e) => {
              navigate("help");
            }}
          >
            <div className="icon">
              <img src={icons.Help} alt="" />
            </div>
            <div className="menu-name">Help</div>
          </div>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route index path="/*" element={<Onboard />} />
          <Route path="event" element={<Events />} />
          <Route path="dashEvents" element={<DashEvents />} />
          <Route path="meetup" element={<MeetUp />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<DashHelp />} />
          <Route path="lovequest" element={<Lovequest />} />
          <Route path="discussion" element={<Discussion />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payments" element={<Payments />} />
          <Route path="blocked" element={<Blocked />} />
        </Routes>
      </div>
      <BumpUp
        show={show}
        onAccept = {e=>{navigate('./payments');setshow(false)}}
        onclose={(e) => {
          setshow(false);
        }}
      />
    </main>
  );
};

export default DashBoard;
