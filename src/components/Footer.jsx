import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/assets";
import {  socials } from "../data/navData";
import "../styles/footer.css";
import { Icon } from "@iconify/react";
import { footerData } from "../data/footerData";

const Footer = () => {
  return (
    <footer id="footer">
      <section>
        <div className="logo">
          <img src={images.Logo} alt="" />
          <p className="motto">The Christian Dating Network</p>
        </div>
        <p className="copyright">© 2022 Christian Reals All rights reserved</p>
      </section>
      <section className="footer-links">
        <div className="links">
          {footerData.map((footerlink) => {
            return (
            <>
            {
              footerlink.link?<Link to={footerlink.link}>
              {footerlink.name}
              </Link>
              :
              <p onClick={e=>{window.open(footerlink.doclink)}}>
                {
                  footerlink.name
                }
              </p>
            }
            </>);
          })}
        </div>
        <div className="socials">
          {socials.map((social, i) =>  (
              <a href={social.link}>
                <Icon
                  // style={{ marginLeft: "1rem" }}
                //   color="white"
                className='icon'
                  icon={social.icon}
                  width={25}
                />
              </a>
            )
          )}
        </div>

      </section>
    </footer>
  );
};

export default Footer;
