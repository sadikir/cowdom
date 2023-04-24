import "./checkout.css"
import { Link } from "react-router-dom"
import { useState } from "react"
const Checkout = ({ passedCheckoutToggle }) => {

  const [step1, setSteps]=useState(false)
  return (
    <>
      <div className="checkout-wrapper">
        <h1>Invest Now</h1>
        <div className="question-screen">
          <i className=" checkout-close-icon fa-solid fa-circle-xmark" onClick={passedCheckoutToggle}></i>
          

          {false?<div className="choose-animal-amount">
            <h3>How many calves do you want to own?</h3>
            <div className="female-calves">
              <h1>Female</h1>
              <div className="preferrence">
                <button>5 calves</button>
                <button>10 calves</button>
                <button>25 calves</button>
                <button>50 calves</button>
                <button>100 calves</button>
                <button>250 calves</button>
                <button>500 calves</button>
              </div>
              <div className="custom-option">
                <p>Custom:</p>
                <input type="number" />
              </div>
            </div>
            <div className="male-calves">
              <h1>Male</h1>
              <div className="preferrence">
                <button>5 calves</button>
                <button>10 calves</button>
                <button>25 calves</button>
                <button>50 calves</button>
                <button>100 calves</button>
                <button>250 calves</button>

                <button>500 calves</button>
              </div>
              <div className="custom-option">
                <p>Custom:</p>
                <input type="number" />
              </div>
            </div>
            <div className="gender-control-button">
              <button className="checkout-back">Back</button>
              <button className="checkout-gender-nex" type="submit">
                Next
              </button>
            </div>
          </div>:""}
          {false?<div className="checkout-pricing">
            <h1>Choose the price that suites you!</h1>
          
        
        <div className="checkout-prices">
          <div className="prices-flex checkout-price1">
            <h2>Finance startup cost</h2>
            <h1>$100<span>/calf/Month-up to 4months</span></h1>
            <h1><span>then</span>$65<span>/calf/month</span></h1>
            <ul>
              <li><span>Finance the startup cost</span></li>
              <li><span>Become a farmer in 4 months</span></li>
              <li><span>Pay $65/cow/month after financing</span></li>
              
            </ul>
            <Link to="#">
              <button>Buy Now</button>
            </Link>
          </div>
          <div className="prices-flex checkout-price2">
            <span className="price-recomend">Popular</span>
            <h2>Immediate farmer</h2>
            <h1>$400/calf</h1>
            <h1><span>then</span>$65<span>/calf/Month</span></h1>
            <ul>
              <li><span>Buy calf upfront</span></li>
              <li><span>Become farmer immedietely</span></li>
              <li><span>Recommended</span></li>
            </ul>
            <Link to="#">
              <button>Buy Now</button>
            </Link>
          </div>
          
      </div>
            <div className="gender-control-button">
              <button className="checkout-back">Back</button>
              
            </div>
          </div>:""}
          <div className="checkout-summary">
            <h1>Review order and submit</h1>
            
            <div className="order-gender-wrapper">
              <div className="summary-heading">
              <h3>Order Summary</h3>
            </div>
              <div className="order-male">
                <div className="order-column1">
                  <img src="/images/catprofile.jpg"/>
                  <div>
                    <h4>Male calves</h4>
                    <p>Steers</p>
                    <p>$65/month</p>
                  </div>
                </div>
                <div className="order-column2">
                  <p className="order-count">x2</p>
                </div>
              </div>
              <div className="order-female">
                <div className="order-column1">
                  <img src="/images/catprofile.jpg"/>
                  <div>
                    <h4>Female calves</h4>
                    <p>Heifers</p>
                    <p>$65/month</p>
                  </div>
                </div>
                <div className="order-column2">
                  <p className="order-count">x2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}
export default Checkout