import { Link } from "react-router"
import { LOGO_URL } from "../utils.js/constants"
const Header= ()=>{
    return (
        <div className="header">
             <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
             </div>
             <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
             </div>
        </div>
    )
}

export default Header