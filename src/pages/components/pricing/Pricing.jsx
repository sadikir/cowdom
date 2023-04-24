import "./pricing.css"
import {Link} from "react-router-dom"
import { forwardRef } from "react";



const Pricing = forwardRef((props, ref) => {
  return (
    <div ref ={ref} className="pricing-wrapper">
        <h1>Pricing</h1>
        <div className="price-categories">
          <div className="prices price1">
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
          <div className="prices price2">
            <span className="price-recomend">Popular</span>
            <h2>Immediate farmer</h2>
            <h1>$400/calf</h1>
            <h1><span>then</span>$65<span>/calf/Month</span></h1>
            <ul>
              <li><span>Buy calf upfront</span></li>
              <li><span>Become farmer immedietely</span></li>
               <li><span>Faster processing</span></li>
              <li><span>Recommended</span></li>
            </ul>
            <Link to="#">
              <button>Buy Now</button>
            </Link>
          </div>
          <div className="prices price3">
            <h2>Custom/Enterprise</h2>
            <h1>$Custom</h1>
            <ul>
              <li><span>Need pregnant cows</span></li>
              <li><span>Need grown cattle</span></li>
              <li><span>Other requests</span></li>
            </ul>
            <button type="button" style={{cursor:"not-allowed"}}disabled>Coming soon!</button>
          </div>
        </div>
      </div>
  );
});
export default Pricing;