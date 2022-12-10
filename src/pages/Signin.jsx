import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../assets/assets";
import Signinbanner from "../assets/images/signinbanner.png";
import { SimpleText } from "../components/Formcomps";
import "../styles/signin.css";

const Signin = () => {
  const [password, setpassword] = useState(false);
  const navigate = useNavigate()
  return (
    <main id="sign-up">
      <section className="signup-form">
        <img src={Signinbanner} alt="" className="banner" />
        <div className="form">
          <img src={images.Logo} alt="" />
          <h2>Sign In</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/dashboard')
            }}
            method="POST"
          >
            <SimpleText
              label={"Email"}
              placeholder="e.g ayomikun@gamil.com"
              type={"Email"}
              name="email"
              required
            />
            <div className={`mail`}>
              <label htmlFor="email">Password</label>
              <div className="password-container">
                <input
                  placeholder={"fill in your password"}
                  required={true}
                  type={!password ? "password" : "text"}
                  name={"password"}
                  //   style={{ ...inputStyle }}
                  //   id={id}
                  className={`email`}
                  //   onChange={onChange}
                />
                <Icon
                  onClick={(e) => {
                    setpassword(!password);
                  }}
                  icon={
                    password
                      ? "mdi:password-outline"
                      : "mdi:password-off-outline"
                  }
                  width={30}
                />
              </div>
            </div>

            <button className="login-btn">Login</button>
          </form>
          <p>
            Dont have an account? <a href="/signup">Register</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signin;
