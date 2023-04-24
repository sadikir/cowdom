import "./investor.css"
import Navbar from "../components/header/Navbar"
import Slider from "../components/homeslider/Slider"
import HomeAbout from "../components/homeAbout/HomeAbout"
import Divider from "../components/divider/Divider"
import WhyInvest from "../components/whyInvest/WhyInvest"
import Calculator from "../components/calculator/Calculator"
import Pricing from "../components/pricing/Pricing"
import Faq from "../components/faq/Faq"
//import Testimony from "../components/testimonials/Testimony"
import HomeContact from "../components/homeContact/HomeContact"
import Footer from "../components/footer/Footer"
import HomeBlog from "../components/homeBlog/HomeBlog"
import { useEffect } from "react"
import {useLocation, Link} from "react-router-dom"
import { useRef } from "react"

const Investor=()=>{
 const location = useLocation();
 const PricingScrollRef =useRef(null)
 const FaqScrollRef =useRef(null)
 const BlogScrollRef =useRef(null)
 const ContactScrollRef =useRef(null)
 const HeaderRef= useRef(null)
  
  
  useEffect(()=> {
            if (location.hash==="#home") {
              window.scrollTo({top:0,left:0, behavior: "smooth"})
              
            }else if(location.hash==="#pricing"){
                PricingScrollRef.current.scrollIntoView({behavior: "smooth"})
                console.log(PricingScrollRef.current)
              }
            else if(location.hash==="#faq"){
              FaqScrollRef.current.scrollIntoView({behavior: "smooth"})
            }else if(location.hash==="#contact"){
              ContactScrollRef.current.scrollIntoView({behavior: "smooth"})
            }else if(location.hash==="#blog"){
              BlogScrollRef.current.scrollIntoView({behavior: "smooth"})
            }
    }, [location,]);
  useEffect(()=>{
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos < currentScrollPos) {
    HeaderRef.current.style.display = "none";
   } else if (prevScrollpos > currentScrollPos) {
    HeaderRef.current.removeAttribute("style");
   }
   prevScrollpos = currentScrollPos;
};
  },[])

  //only show the menu when user scroll up
  
  return(
    <>
    <Navbar ref={HeaderRef}/>
    <div className="content-wrapper">
      <Slider/>
    <HomeAbout />
    <Divider/>
    <WhyInvest/>
    <Divider/>
    <Calculator/>
    <Divider/>
    <Pricing ref={PricingScrollRef}/>
    <Divider/>
    <Faq ref={FaqScrollRef}/>
    <Divider/>
    <HomeBlog ref={BlogScrollRef}/>
    <Divider/>
    <HomeContact ref={ContactScrollRef}/>
    <Divider/>
    <Footer/>
    </div>
    
      
    </>
  )
}
export default Investor;