import "../assets/css/footer.css"
import {Link} from "react-router-dom"

const Footer = () => {

    const navBarItems = ["Home", "About", "Booking", "Menu", "Order Online", "Login"];
    const socials = {
        Coursera: "https://www.coursera.org/user/d7a281152805c49dc624c8c7cf699427",
        LinkedIn: "https://www.linkedin.com/in/claudiu-dr-a39199295/",
        Github: "https://github.com/claudiu28",
        Instagram: "https://www.instagram.com/claudiu.draghita/"
    }

    const listNavBar = navBarItems.map((item, index) => {
        if (item === "Home") {
            return <li key={index}><Link to="/" className="link">{item}</Link></li>
        }
        return <li key={index}><Link to={item.toLowerCase()} className="link">{item}</Link></li>
    });

    const listSocials = Object.entries(socials).map(([socialName, socialLink], index) => {
        return <li key={index}><Link to={socialLink} className="link">{socialName}</Link></li>
    });


    return (
        <>
            <footer>
                <div>
                    <img src={require("../assets/images/logo.jpg")} alt="Img footer"/>
                </div>
                <ul>
                    {listNavBar}
                </ul>
                <ul>
                    <li>Contact phone:<strong className="footerStrong"> xxxxxxxxxx</strong></li>
                    <li>Contact restaurant x: <strong className="footerStrong"> xxxxxxxxxx</strong></li>
                    <li>Contact restaurant y:<strong className="footerStrong"> xxxxxxxxxx</strong></li>
                </ul>
                <ul>
                    {listSocials}
                </ul>
            </footer>
        </>
    );
}
export default Footer;