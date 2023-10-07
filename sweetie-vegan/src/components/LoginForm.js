import "./LoginForm.css";
import donut from "../imgs/donut1.png";
import muffin from "../imgs/muffin1.png";
import cookies from "../imgs/cookies.mp4";
import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight, AiOutlineLogin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

const LoginForm = () => {
  return (
    <div className="loginPage flex">
      <div className="loginContainer flex">
        <div className="videoDiv">
          <video src={cookies} autoPlay muted loop></video>
          <div className="loginTextDiv">
            <h2 className="loginTitle">Create and Enjoy Baking</h2>
            <p className="loginText">Subscribe now to save time!</p>
          </div>
          <div className="loginFooterDiv flex">
            <span className="text">Don't have an account yet?</span>
            <Link to={"/register"}>
              <button className="loginBtn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="loginFromDiv flex">
          <div className="loginHeaderDiv">
            <img src={muffin} alt="muffin" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="loginForm grid">
            <span className="showMessage">Login Status</span>
            <div className="loginInputDiv">
              <label htmlFor="username">Username</label>
              <div className="loginInput flex">
                <FaUserShield className="loginIcon" />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
            </div>
            <div className="loginInputDiv">
              <label htmlFor="password">Password</label>
              <div className="loginInput flex">
                <BsFillShieldLockFill className="loginIcon" />
                <input type="text" id="password" placeholder="Enter Password" />
              </div>
            </div>
            <button type="submit" className="loginBtn flex">
              <span>Login</span>
              <AiOutlineLogin className="loginIcon" />
            </button>

            <div className="socialLogin">
              <span>or continue with</span>
              <div className="socialLoginButton">
                <button>
                  <FcGoogle className="socialIcons" />
                </button>
                <button>
                  <FaXTwitter className="socialIcons" style={{color: "black"}} />
                </button>
                <button>
                  <FaFacebookF className="socialIcons" style={{color: "#1976D2"}} />
                </button>
              </div>
            </div>

            <span className="forgotPassword">
              Forgot your password?
              <a href="/#"> Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
