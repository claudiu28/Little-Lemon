import Navbar from "./Navbar"
import "../assets/css/about.css"

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="AboutSection">
                <div className="about_one">
                    <div className="titlesAbout">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </div>
                <div className="about_two">
                    <img src={require("../assets/images/food1.jpg")} alt="food"/>
                    <img src={require("../assets/images/food2.jpg")} alt="food"/>
                </div>
            </div>
        </>
    );
}

export default About;