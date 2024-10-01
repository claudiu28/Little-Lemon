import React from "react";
import "../assets/css/bookingUser.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const ClientForm = () => {
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [comment, setComment] = React.useState('');
    const [error, setError] = React.useState({ firstname: '', lastname: '', email: '', phone: '' });

    const handleValidation = () => {
        let valid = true;
        let errors = { firstname: '', lastname: '', email: '', phone: '' };

        if (firstname === '') {
            errors.firstname = 'First name is required!';
            valid = false;
        }
        if (lastname === '') {
            errors.lastname = 'Last name is required!';
            valid = false;
        }
        if (email === '') {
            errors.email = 'Email is required!';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email format!';
            valid = false;
        }
        if (phone === '') {
            errors.phone = 'Phone number is required!';
            valid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = 'Phone number must be 10 digits!';
            valid = false;
        }

        setError(errors);
        return valid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            alert(`We are waiting for you, ${firstname}`);
        }
    };
    const navigate = useNavigate();
    return (
        <>
            <Navbar/>
            <form onSubmit={handleSubmit} className="formUser">
                <div className="divForms">
                    <label>Firstname</label>
                    <input type="text" name="firstname"
                        value={firstname}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    {error.firstname && <p className="paragraph">{error.firstname}</p>}
                </div>

                <div className="divForms">
                    <label>Lastname</label>
                    <input type="text" name="lastname" value={lastname} onChange={(event) => setLastName(event.target.value)}
                    />
                    {error.lastname && <p className="paragraph">{error.lastname}</p>}
                </div>

                <div className="divForms">
                    <label>Email</label>
                    <input type="email" name="email" value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {error.email && <p className="paragraph">{error.email}</p>}
                </div>

                <div className="divForms">
                    <label>Phone</label>
                    <input type="tel" name="phone" value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    {error.phone && <p className="paragraph">{error.phone}</p>}
                </div>

                <div className="divForms">
                    <label>Comments</label>
                    <textarea name="comment" value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Send Details" />
                <button onClick={() => navigate('/') } className = "btn">Home</button>
            </form>
        </>
    );
};

export default ClientForm;