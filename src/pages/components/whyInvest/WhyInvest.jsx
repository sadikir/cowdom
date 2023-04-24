import "./whyInvest.css"
const WhyInvest =()=>{
  return (
    <>
      <div className="whyInvest-wrapper">
        <div className="whyInvest-intro">
          <h1>No land, No problem! only your phone!</h1>
          <p>We have the land, we take care of the cattle's diet, health while you own the cattle and manage everything through your mobile phone. We guarantee safefy for the cattle all the time. Its on us!</p>
          <button id="button">Own Cattle Now!    <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        
        <div className="whyInvest-details">
          <div className="details">
            <i className="fa-solid fa-money-check-dollar"></i>
            <div>
              <h2>Small capital required!</h2>
              <p> Are you on budget? We are hear to help. Keep your normal job and pay a small percentaget of your salary to grow your livestock on the side.</p>
            </div>
          </div>
          <div className="details">
            <i className="fa-regular fa-face-tired"></i>
            <div>
              <h2>Don't bear the full cost!</h2>
              <p> Be a farmer without the full cost of owning land, licensing, day to day operations and more. We take care of everything!</p>
            </div>
          </div>
          <div className="details">
            <i className="fa-sharp fa-solid fa-plus"></i>
            <div>
              <h2>Accumulate wealth steadily!</h2>
              <p> Start small and let your investment grow with time when your cattle multiply through birth. You will get occasional updates about your livestock.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WhyInvest;