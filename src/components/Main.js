import "../assets/css/main.css"
import Testimonials from "./Testimonials";

const Main = () => {
    return (
        <>
            <main>
                <div className = "containerOne">
                    <h1>Menu Weekend Specials</h1>
                    <button type = "button">See more</button>
                </div>
                <div className = "containerTwo">
                    <div className = "card">
                        <img src = {require("../assets/images/item1.jpg")} alt = "menu item 1"/>
                        <div className = "containerCardText">
                            <h4>Item 1</h4>
                            <h4>Price:$12.99</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className = "card">
                        <img src = {require("../assets/images/item2.jpg")} alt = "menu item 2"/>
                        <div className = "containerCardText">
                            <h4>Item 2</h4>
                            <h4>Price:$14.99</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className = "card">
                        <img src = {require("../assets/images/item3.jpg")} alt = "menu item 3"/>
                        <div className = "containerCardText">
                            <h4>Item 3</h4>
                            <h4>Price:$20.99</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <Testimonials/>
            </main>
        </>
    )
}

export default Main;