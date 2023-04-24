
import "./NavbarStyles.css";
import { useRef, useState,forwardRef } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef((props, ref) => {
  let [navIcon, setNavIcon] = useState(true)

  
  

  const toggleNavIcon = () => {
    setNavIcon(!navIcon)
  }
  // const scrollToSection=(e)=>{
  //  e.preventDefault();
  //   if(scrollTo.current==="pricing"){
  //     PricingScrollRef.current.scrollIntoView({ behavior: "smooth" });
  //   }else if(scrollTo.current==="blog"){
  //     BlogScrollRef.current.scrollIntoView({ behavior: "smooth" });
  //   }else if(scrollTo.current==="contact"){
  //     ContactScrollRef.current.scrollIntoView({ behavior: "smooth" });
  //   }else if(scrollTo.current==="faq"){
  //     FaqScrollRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
    
  // }
  return (
    <div ref={ref}>
      <nav className="investor-nav">
        <div className="logo-wrapper">
          <img className="logo" src="./images/cowdomwhite.png" />

        </div>
        <div className="overflowed-div">
          <ul className={navIcon ? "investor-navmenu" : "investor-navmenu show-menu"}>
            <li onClick={toggleNavIcon}><Link to="/#home">Home</Link></li>
            {/*<li onClick={toggleNavIcon} ><a href = "#">About</a></li>*/}
            <li onClick={(e)=>{ toggleNavIcon(); }}><Link to="/#pricing">Pricing</Link></li>
            <li onClick={(e)=>{ toggleNavIcon(); }}><Link to="/#blog">Blog</Link></li>
            <li onClick={(e)=>{ toggleNavIcon(); }}><Link to="/#contact">Contact</Link></li>
            <li onClick={(e)=>{ toggleNavIcon(); }}><Link to="/#faq">FAQs</Link></li>
            

            <div>
              <ul className="loginSignup">
                <li onClick={toggleNavIcon}><Link to="/login">Login</Link></li>
                <li onClick={toggleNavIcon}><Link to="/register">Sign Up</Link></li>
              </ul>
            </div>

          </ul>
        </div>
        <div id="mobile">
          <i onClick={toggleNavIcon} className={navIcon ? "fas fa-bars" : "fas fa-times"} />/

        </div>
      </nav>
    </div>
  );
});
export default Navbar;