import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "../styles/cookie.css";

const Cookies = () => {
  const cookieRef = useRef();
  const isAccepted = window.localStorage.getItem("acceptCookies");
  const [show, setshow] = useState();

  const accept = async () => {
    setshow(false);
    window.localStorage.setItem("acceptCookies", "true");
    cookieRef.current.style.display = "none";
  };
  const decline = async () => {
    setshow(false);
    cookieRef.current.style.bottom = "-100%";
  };
  if (!isAccepted) {
    return (
      <div className="cookie" ref={cookieRef}>
        <p>
          This website uses cookies to work properly and for analytics and
          marketing purposes. To find out more about our use of cookies, please
          see our{" "}
          <a onClick={e=>{window.open('https://docs.google.com/document/d/e/2PACX-1vTDt58Lm2Ue9y8Rqa0wHfjsLeu66BWgLprFikIuAjtGDSXzYKFejn_-_5wxYc2hmA/pub')}}>
            Privacy Policy{" "}
          </a>{" "} and  <a onClick={e=>{window.open('https://docs.google.com/document/d/e/2PACX-1vQge66ndMiubCZUET39bui0hhxU3Tn2AlJ3yPaKytIrS3yrp_M1QNOiFNhGLCyNkA/pub')}}>
            cookie Policy{" "}
          </a>{" "}. By continuing to browse our
          website, you agree to our use of cookies.
        </p>
        <div>
          <button onClick={accept}>Accept</button>
          {/* <button style={{background:'rgb(159, 22, 40)'}} onClick={decline}>
                        Decline
                    </button> */}
        </div>
      </div>
    );
  }
};

export default Cookies;
