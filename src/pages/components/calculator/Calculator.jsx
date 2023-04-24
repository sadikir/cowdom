import "./calculator.css"
import { useState, useEffect } from "react";
const Calculator = () => {
  const [value, setValue] = useState(2)
  const [cows, setCows] = useState()
  const [earn, setEarn] =useState()
  const MAX = 10;
  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX}% 100%` };
  };
  useEffect(() => {
    if(value ==0){
      setCows("1")
      setEarn("1,750")
    } else if(value==2){
      setCows("5")
      setEarn("8,750")
    }else if(value==4){
      setCows("20")
      setEarn("35,000")
    }else if(value==6){
      setCows("100")
      setEarn("175,000")
    }else if(value==8){
      setCows("300")
      setEarn("525,000")
    }else if(value==10){
      setCows("1,500")
      setEarn("2,625,000")
    }
  });
  return (
    < div className="slider-section">
      <div className="calculator-heading">
        <h1>Making money with us is fast and stupid simple. </h1>
      </div>
      <div className="calculator-wrapper">
        <div className="dragable-bar">
          <h4>How many cows do you want to own?</h4>
          <p><span>{cows?cows:"5"}</span>Cows</p>
          <div className="slider">
            <input
              type="range"
              min="0"
              max={MAX}
              step="2"
              onChange={(e) => setValue(e.target.value)}
              style={getBackgroundSize()}
              value={value}
            />
          </div>
        </div>
        <div className="estimated-return">
        <div className="estimate-wrapper">
          <h4>Earn up to 45% ROI:</h4>
          <h1>$<span>{earn?earn:"8,750"}</span>/year</h1>
          <p>Based on Canadian markets</p>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Calculator;