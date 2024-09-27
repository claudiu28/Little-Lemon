import "../assets/css/footer.css"
const Footer = () => {
    return (<>
    <footer>
        <div>
          <img src = {require("../assets/images/logo.jpg")} alt = "Img footer"/>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <ul>
          <li>Contact phone:<strong className = "footerStrong"> xxxxxxxxxxx</strong></li>
          <li>Contact resturant x: <strong className = "footerStrong">xxxxxxxxxxx</strong></li>
          <li>Contact resturant y:<strong className = "footerStrong"> xxxxxxxxxx</strong></li>
        </ul>
        <ul>
          <li>
            Meta
          </li>
          <li>Google</li>
          <li>Github</li>
          <li>Twitter</li>
        </ul>
    </footer>
    </>
    );
}
export default Footer;