import "./LoginAndSignup.css"
import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {useState,useEffect} from "react";

const Login=()=>{
 useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"})
  },[])
  return (
    <>
      <Navbar/>
      <div className = "credentialWindow">
        <h1>Manage your livestock investments!</h1>
        <div className="loginSection">
          <h2>Sign In</h2>
          <p>Get more from the investing world.</p>
          <form>
            <label className="emailLabel">
              <p>Email:</p>
              <input type="email" />
            </label>
            <label className="passLabel">
              <p>Password:</p>
              <input type="password" />
            </label>
            <label className="forgotLabel">
              <p>Forgot password?</p>
            </label>
            
          </form>
          <button className="loginButton">Sign In</button>
          <div className="separator">
            <p className="or-text">or</p>
          </div>
          <div className="socialLogin">
            <button className="googleLogin">
              <p><FcGoogle className="googleLogo"/><span className="signInText">Signin with <br/>Google</span></p>
            </button>
            <button className="fbLogin">
              <p><BsFacebook className= "fbLogo" /><span className= "signInText">Signin with <br/>Facebook</span></p>
            </button>
          </div>
          <div className="join">
            <p>Not a member? <button className="joinLink">Join Now</button></p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Login;