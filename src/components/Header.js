import "../assets/css/header.css"

const Header = () => {
    return (
        <>
            <header className = "header">
                <div className = "container">                
                    <div className = "titles">
                        <h1>Little Lemon</h1>
                        <h4>Chicago</h4>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p> 
                    <button type = "button">Reserve table</button>
                </div>
                <div className="containerImage">
                    <img src={require("../assets/images/header.jpg")} alt="headerImage" className="headerImage" />
                </div>
            </header>
        </>
    )
}
export default Header;