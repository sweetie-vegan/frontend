import "./RegisterForm.css";
import donut from "../imgs/donut1.png";
import muffin from "../imgs/muffin1.png";
import cookies from '../imgs/cookies.mp4'
import React from "react";
import { Link } from "react-router-dom";
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight, AiOutlineLogin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

const RegisterForm = () => {
    return (
        <div className="registerPage flex">
            <div className="registerContainer flex">
                <div className="videoDiv">
                    <video src={cookies} autoPlay muted loop></video>
                    <div className="registerTextDiv">
                        <h2 className="registerTitle">Create and Enjoy Baking</h2>
                        <p className="registerText">Subscribe now to save time!</p>
                    </div>
                    <div className="registerFooterDiv flex">
                        <span className="text">Have an account?</span>
                        <Link to={'/login'}>
                        <button className="registerBtn">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="registerFromDiv flex">
                    <div className="registerHeaderDiv">
                        <img src={donut} alt="donut" />
                        <h3>Let Us Know You!</h3>
                    </div>

                    <form action="" className="registerForm grid">
                        <div className="registerInputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="registerInput flex">
                                <MdEmail className='registerIcon' />
                                <input type="email" id="email" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="registerInputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="registerInput flex">
                                <FaUserShield className='registerIcon' />
                                <input type="text" id="username" placeholder="Enter Username" />
                            </div>
                        </div>
                        <div className="registerInputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="registerInput flex">
                                <BsFillShieldLockFill className='registerIcon' />
                                <input type="text" id="password" placeholder="Enter Password" />
                            </div>
                        </div>
                        <button type="submit" className="registerBtn flex">
                            <span>Register</span>
                            <AiOutlineLogin className="registerIcon" />
                        </button>

                        <div className="socialLogin">
              <span>or sign up with</span>
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

                        {/* <span className="forgotPassword">
                            Forgot your password? 
                            <a href="/#"> Click Here</a>
                        </span> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;
