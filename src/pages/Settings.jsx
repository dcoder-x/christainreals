import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router";
import { Vectors } from "../assets/assets";
import { settings } from "../data/options";
import "../styles/settings.css";
import Modal from "../components/Modal";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  return (
    <main id="settings">
      <section className="options">
        <h1 className="page-title">Settings</h1>
        {settings.map((option, index) => {
          return (
            <div
              key={index}
              className="option"
              onClick={(e) => {
                option.link ? navigate(option.link) : option.onClick;
              }}
            >
              <p className="option-name">{option.name}</p>
              <Icon icon="ic:round-keyboard-arrow-right" />
            </div>
          );
        })}
        {/* change password */}
        <div
          className="option"
          onClick={(e) => {
            setPasswordModal(true);
          }}
        >
          <p className="option-name">{"Change Password"}</p>
          <Icon icon="ic:round-keyboard-arrow-right" />
        </div>
        <div
          className="option"
          onClick={(e) => {
            setDeleteModal(true);
          }}
        >
          <p className="option-name">{"Delete account"}</p>
          <Icon icon="ic:round-keyboard-arrow-right" />
        </div>
        <button
          className="logout"
          onClick={(e) => {
            setLogOutModal(true);
          }}
        >
          Logout
        </button>
      </section>
      {/* modal to delete account */}
      <Modal
        show={deleteModal}
        onclose={(e) => {
          setDeleteModal(false);
        }}
        message={
          "You are about to delete your account, this action is irreversible. Are you sure you wish to continue ?"
        }
        Comp={
          <form className="reportMeetup" style={{ width: "90%" }}>
            <input
              type="password"
              autoComplete="new password"
              required
              placeholder="Type in your Password to confirm it's you"
            />
          </form>
        }
        title={"Delete account"}
        actionText={"Yes, delete account"}
        closeText={"cancel"}
        onAccept={(e) => {
          alert("account deleted");
          navigate("../../");
        }}
      />
      {/* log out modal */}
      <Modal
        show={logOutModal}
        onclose={(e) => {
          setLogOutModal(false);
        }}
        message={
          "You are about to log out. Are you sure you wish to continue ?"
        }
        title={"Log out"}
        actionText={"Yes, log out"}
        closeText={"cancel"}
        onAccept={(e) => {
          navigate("../../signin");
        }}
      />
      {/* Modal to change password */}
      <Modal
        show={passwordModal}
        onclose={(e) => {
          setPasswordModal(false);
        }}
        message={
          "You are about to change your password, Set a secure password?"
        }
        Comp={
          <form className="reportMeetup" style={{ width: "90%" }}>
            <input
              type="password"
              required
              placeholder="Old password"
            />
            <input
              type="password"
              required
              placeholder="new password"
            />
          </form>
        }
        title={"Log out"}
        actionText={"change password"}
        closeText={"cancel"}
        onAccept={(e) => {
          alert("password changed");
        //   navigate("../../");
        setPasswordModal(false)
        }}
      />
      ;
    </main>
  );
};

export default Settings;
