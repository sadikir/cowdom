import "./home.css"
import Checkout from "../checkout/Checkout"
import { useState } from "react"
const Home =()=>{
  let [toggleCheckout, setToggleCheckout]=useState(false);
  const checkoutToggle =()=>{
    setToggleCheckout((current)=>(!current));
  }
  return (
    <>
      <div className="account-home-wrapper">
        <h1>Welcome, Sadiki Rungo!</h1>
        <p>Cowdom is a place to invest in livestock the easy way!</p>
        <div className="account-home-actions">
          <div className="home-action1 mobile-flex" onClick={checkoutToggle}>
            <i className="home-action-icon action-icon1 fa-solid fa-chart-line"></i>
            <p className="home-action-text" >Own Cattle Now</p>
          </div>
          <div className="home-action2 mobile-flex">
            <i className="home-action-icon action-icon2 fa-solid fa-user-plus"></i>
            <p className="home-action-text">Invite friends</p>
          </div>
          <div className="home-action3 mobile-flex">
            <i className="home-action-icon action-icon3 fa-solid fa-cow"></i>
            <p className="home-action-text">Manage Cattle</p>
          </div>
          <div className="home-action4 mobile-flex">
            <i className="home-action-icon action-icon4 fa-solid fa-sack-dollar"></i>
            <p className="home-action-text">See earnings</p>
          </div>
        </div>

        {/* Another section*/}
        <div className="home-revenue-outlook">
            <table>
              <tbody>
              <tr>
                <td className="head-strong">Total Invested</td>
                <td className="head-strong">Total months</td>
                
              </tr>
              <tr>
                <td className="value-strong">$1,530</td>
                <td className="value-strong">6<span>  months</span></td>
                
              </tr>
              </tbody>
            </table>
        </div>

        <div className="cattle-price-history">
          <img src="./images/price.jpg" />
        </div>

        <div className="home-billing-wrapper">
          <i className="fa-solid fa-credit-card"></i>
          <ul>
            <li>Next Billing Date:</li>
            <li>12/Jan/2023</li>
          </ul>
        </div>
      </div>
      <div className={toggleCheckout?"show-checkout":"hide-checkout"}>
           <Checkout passedCheckoutToggle={checkoutToggle}/>
      </div>
      
      
    
    </>
  )
}
export default Home;