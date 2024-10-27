import "../assets/css/navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="containerNavbar">
                    <img src={require("../assets/images/logo.jpg")} alt="logo"/>
                </div>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/booking" className="link">Booking</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li>Menu</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;