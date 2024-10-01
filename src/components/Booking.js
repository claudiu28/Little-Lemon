import Navbar from "./Navbar";
import BookingForm from "./BookingForm";
import React, {useReducer } from "react";
import {fetchAPI} from "../Api/api"
import "../assets/css/booking.css"
const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_DATE":
            return fetchAPI(new Date(action.date));   
        default:
            return state;
    }
};


const Booking = () => {  

    const [availableTimes, dispatch] = useReducer(updateTimes, []);
   
    React.useEffect(() => {
        const today = new Date();
        dispatch({ type: 'UPDATE_DATE', date: today.toISOString().split('T')[0] }); 
    }, []);

    return (
        <>
            <Navbar />
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
}

export default Booking;
