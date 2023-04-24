import "./homeAbout.css"
import video from '../../../../public/video/video.mp4'
const HomeAbout =()=>{
  return (
    <>
      <div className="home-about-wrapper">
        <div className="intro-text">
          <h1>How our service works</h1>
          <div className="intro-point">
            <i className="fa-solid fa-1"></i>
            <div className="intro-point-text">
              <h3>Buy cattle, we raise it for you</h3>
              <p>You buy cattle from us or anywhere else, we will raise it for you. No cattle amount limit </p>
            </div>
          </div>
          <div className="intro-point">
            <i className="fa-solid fa-2"></i>
            <div className="intro-point-text">
              <h3>Buy anytime, sell anytime</h3>
              <p>From your mobile, you buy today and sell tommorow, just like the stock market. </p>
            </div>
          </div>
          <div className="intro-point">
            <i className="fa-solid fa-3"></i>
            <div className="intro-point-text">
              <h3>Price of pizza can own cattle</h3>
              <p>Only pay a small monthly fee that's equivalent to the price of pizza! </p>
            </div>
          </div>
        </div>
        
        <div className="intro-video">
          <h1>Watch video</h1>
          <div className="home-about-video">
             <video controls poster="../../../../../public/images/poster.jpg" >
             <source src={video} type="video/mp4"/>
             </video>
          </div>
        </div>
        
      </div>
      
    </>
  )
}
export default HomeAbout;