import './App.css'
import Shareholder from "./pages/shareholder/Shareholder"
import Investor from "./pages/investor/Investor"
import Login from "./pages/login/Login"
import Signup from "./pages/register/Signup"
import Account from "./pages/account/Account"
import Billing from "./pages/account/billing/Billing"
import Home from "./pages/account/home/Home"
import Settings from "./pages/account/settings/Settings"
import Investment from "./pages/account/investment/Investment"
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Investor/>}/>
        <Route exact path="/#home" element={<Investor/>}/>
        <Route exact path="/login" element ={<Login/>}/>
        <Route exact path="/signup" element ={<Signup/>}/>
        <Route exact path="Account" element ={<Account/>}/>
          
        
        <Route exact path ="/#pricing" element={<Investor/>}/>
        <Route exact path="register" element ={<Signup/>}/>
        <Route exact path="shareholder" element={<Shareholder/>}/>
      </Routes>
    </Router>
  )
}
