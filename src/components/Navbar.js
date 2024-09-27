import "../assets/css/navbar.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className = "containerNavbar">
                    <img src = {require("../assets/images/logo.jpg")} alt = "logo"/>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;