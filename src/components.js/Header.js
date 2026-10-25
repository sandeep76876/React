import { LOGO_URL } from "../utils.js/constants"
const Header= ()=>{
    return (
        <div className="header">
             <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
             </div>
             <div className="nav-bar">
                <a href="">Home</a>
                <a href="">Cart</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
             </div>
        </div>
    )
}

export default Header