import React from "react";
import "../styles/blocked.scss";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";

const Blocked = () => {
    const navigate= useNavigate()
  return (
    <main id="blocked">
      <Icon
        onClick={(e) => {
          navigate("../settings");
        }}
        icon={"ic:baseline-subdirectory-arrow-left"}
        width={30}
        cursor={"pointer"}
      />
      <h1>Blocked users</h1>

      <p>you have not blocked anyone yet</p>
    </main>
  );
};

export default Blocked;
