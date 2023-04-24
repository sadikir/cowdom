import "./settings.css"
const Settings=()=>{
  return(
    <>
      <div className="settings-wrapper">
        <h1 className="settings-heading">Settings</h1>
        <div className="item-separator"></div>
        <div className="user">
          <img className="profile-img" src="./images/profile.jpg"/>
          <input className="username" type="text" value ="Sadiki Rungo"/>
        </div>
        
        <div className="address-wrapper">
          <h2>Your Address</h2>
          <div className="address">
            <input type ="text" placeholder="Address line 1"/>
            <input type ="text" placeholder="Country"/>
            <input type ="text" placeholder="State"/>
            <input type ="text" placeholder="city"/>
            <input type ="text" placeholder="Zip/Postal code"/>
          </div>
        </div>
        <div className="item-separator"></div>
        <div className="security-wrapper">
          <h2>Security</h2>
          <div className="security">
          <input type="email" placeholder="name@example.com"/>
          <input type="password" placeholder="Current Password"/>
          <input type="email" placeholder="New email"/>
          <input type="password" placeholder="new passwor"/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Settings