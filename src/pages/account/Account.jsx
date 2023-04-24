import { Component } from "react";
import "./account.css";
import Footer from "../components/footer/Footer"
import Home from "./home/Home"
import Investment from "./investment/Investment"
import Billing from "./billing/Billing"
import Settings from "./settings/Settings"
import { useState } from "react";


const Account = () => {
  let [navIcon, setNavIcon] = useState(true)
  let [tab, setTab] = useState("tab1")



  const toggleNavIcon = () => {
    setNavIcon(!navIcon)
  }
  return (
    <div>
      <nav className="account-nav">
        <div className="logo-wrapper">
          <img className="logo" src="./images/cowdomwhite.png" />

        </div>
        <div className="overflowed-div">
          <ul className={navIcon ? "account-navmenu" : "account-navmenu show-menu"}>

            <li onClick={(e) => { toggleNavIcon(); setTab("tab1") }} ><i className="account-menu-icon fa-solid fa-house"></i><span>Home</span></li>

            <li onClick={(e) => { toggleNavIcon(); setTab("tab2") }}><i className="account-menu-icon fa-solid fa-chart-simple"></i><span>Investment</span></li>
            <li onClick={(e) => { toggleNavIcon(); setTab("tab3") }}><i className="account-menu-icon fa-solid fa-credit-card"></i><span>Billing</span></li>
            <li onClick={(e) => { toggleNavIcon(); setTab("tab4") }}><i className="account-menu-icon fa-solid fa-gear"></i><span>Setting</span></li>
            <li onClick={toggleNavIcon}><i className="account-menu-icon fa-solid fa-user-plus"></i><span>Invite Friends</span></li>
            <li onClick={toggleNavIcon}><i className="account-menu-icon fa-solid fa-right-from-bracket"></i> <span>Logout</span></li>


          </ul>
        </div>
        <div id="mobile">
          <div className="profile-image-wrapper" onClick={toggleNavIcon}>
            <img src="./images/profile.jpg" />
            {navIcon ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}

          </div>
        </div>
      </nav>
      {/* Components that are part of this page */}
      {tab === "tab1" ? <Home tab={tab}/>
        : tab === "tab2" ? <Investment />
        : tab === "tab3" ? <Billing />
        : tab ==="tab4" ? <Settings /> 
        : ""}



      <Footer />
    </div>
  )
}
export default Account;