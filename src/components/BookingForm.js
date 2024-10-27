import React from 'react';
import {submitAPI} from '../Api/api';
import {useNavigate} from 'react-router-dom';

const BookingForm = (props) => {

    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState('');
    const [error, setError] = React.useState({date: '', guests: ''});

    const navigate = useNavigate();
    const navigateClient = useNavigate();
    const goToClient = () => {
        navigateClient('/details');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {date, time, guests, occasion};
        if (submitAPI(formData)) {
            goToClient();
        } else {
            alert("Booking submission failed. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="formDate">
                <div className='divForms'>
                    <label htmlFor="booking-date" data-testid="booking-labelDate">Choose date</label>
                    <input type="date" required id="booking-date" data-testid="booking-inputDate" value={date}
                           onChange={
                               (event) => {
                                   if (new Date(event.target.value) < new Date()) {
                                       setError({...error, date: "Date can't be in the past!"});
                                   } else {
                                       setDate(event.target.value);
                                       props.dispatch({type: 'UPDATE_DATE', date: event.target.value});
                                       setError({...error, date: ""});
                                   }
                               }
                           }/>
                    {error.date !== "" && <p className='paragraphDate'>{error.date}</p>}
                </div>
                <div className='divForms'>
                    <label htmlFor="booking-time" data-testid="booking-timeLabel">Choose time</label>
                    <select id="booking-time" data-testid="booking-timeSelect" value={time} onChange={
                        event => setTime(event.target.value)
                    } required>
                        {
                            props.availableTimes.map((item, index) => (
                                <option key={index} value={item}>{item}</option>))
                        }
                    </select>
                </div>
                <div className='divForms'>
                    <label htmlFor="guests" data-testid="guests-idLabel">Number of guests</label>
                    <input type="number" required data-testid="guests-Input" placeholder="1" id="guests" value={guests}
                           onChange={
                               (event) => {
                                   if (event.target.value >= 1 && event.target.value <= 10) {
                                       setGuests(Number(event.target.value));
                                       setError({...error, guests: ""});
                                   } else {
                                       setError({...error, guests: "Number of guests should be between 1 and 10!"});
                                   }
                               }
                           }/>
                    {error.guests !== "" && <p className='paragraphDate'>{error.guests}</p>}
                </div>
                <div className='divForms'>
                    <label htmlFor="occasion" data-testid="occasion-Label">Occasion</label>
                    <select required id="occasion" data-testid="occasion-Input" value={occasion} onChange={
                        event => setOccasion(event.target.value)
                    }>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <input type="submit" value="Make Your reservation" data-testid="buttonDate"/>
                <button onClick={() => navigate('/')} className="btn">Home</button>
            </form>
            <div className='divs'>
                <h4>Date: <strong>{date}</strong></h4>
                <h4>Time: <strong>{time}</strong></h4>
                <h4>Guests: <strong>{guests}</strong></h4>
                <h4>Occasion: <strong>{occasion}</strong></h4>
            </div>


        </>
    );
};

export default BookingForm;
