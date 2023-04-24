
import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {useState, useEffect} from "react";


const Signup=()=>{
  useEffect(()=>{
    window.scrollTo({top:0,left:0, behavior: "smooth"})
  },[])
  return(
    <>
    <Navbar/>
    <div className= "credentialWindow">
      <h1>Become a farmer in the simplest way possible!</h1>
    <div className="signupSection">
          <h2>Sign Up</h2>
          <p>Join a platform of many investors</p>
          <form>
            <label className="nameLabel">
              <p>Full Name:</p>
              <input type="text"/>
            </label>
            <label className="emailLabel">
              <p>Email:</p>
              <input type="email" />
            </label>
            <label className="passLabel">
              <p>Password:</p>
              <input type="password" />
            </label>
          </form>
          <button className="signupButton">Sign Up</button>
          <div className="separator">
            <p className="or-text">or</p>
          </div>
          <div className="socialSignup">
            <button className="googleSignup">
              <p><FcGoogle className="googleLogo"/><span className="signupText">Signup with <br/>Google</span></p>
            </button>
            <button className="fbSignup">
              <p><BsFacebook className= "fbLogo" /><span className= "signupText">Signup with <br/>Facebook</span></p>
            </button>
          </div>
          <div className="login">
            <p>Already a member? <button className="loginLink">Login</button></p>
          </div>
        </div>
    </div>
      <Footer/>
    </>
  )
}
export default Signup;