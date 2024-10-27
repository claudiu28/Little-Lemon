import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking";
import About from "./components/About";
import ClientForm from "./components/ClientForm";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/details" element={<ClientForm/>}/>
            </Routes>
        </>
    );
}

export default App;
