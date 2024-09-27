import "../assets/css/main.css"

const Main = () => {
    return (
        <>
            <main>
                <div className = "containerOne">
                    <h1>Weekend Specials</h1>
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
                
                <h1 className = "testimonials">Testimonials</h1>
                <div className = "containerTestimonials">
                    <div className = "CardTest">
                        <div>
                            <img src = {require("../assets/images/persona.jpg")} alt = "profile one"/>
                            <span>Raiting:<strong>9/10</strong></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className = "CardTest">
                        <div>
                            <img src = {require("../assets/images/persona2.jpg")} alt = "profile one"/>
                            <span>Raiting<strong>10/10</strong></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className = "CardTest">
                        <div>
                            <img src = {require("../assets/images/persona3.jpg")} alt = "profile one"/>
                            <span>Raiting<strong>10/10</strong></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className = "CardTest">
                        <div>
                            <img src = {require("../assets/images/persona4.jpg")} alt = "profile one"/>
                            <span>Raiting<strong>9/10</strong></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className = "AboutSection">
                    <div className = "about_one">
                        <div className="titlesAbout">
                            <h1>Little Lemmon</h1>
                            <h3>Chicago</h3>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className = "about_two">
                        <img src = {require("../assets/images/food1.jpg")} alt = "food"/>
                        <img src = {require("../assets/images/food2.jpg")} alt = "food"/>
                    </div> 
                </div>     
            </main>
        </>
    )
}

export default Main;