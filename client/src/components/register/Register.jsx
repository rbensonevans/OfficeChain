import axios from 'axios';
import { React, useRef } from 'react'
import "./register.css"
import {useNavigate} from "react-router-dom"

// After registration the author wants the user to login.
export default function Register() {

    // see the video at 1:34:00 for additional login changes.
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    // const history = useHistory();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords do not match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            try {
                await axios.post("/auth/register", user);
                // disable for now --> navigate('/login'); // replaced history.push()

            }catch(err){
                console.log(err);
            }
        }
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">OfficeChain</h3>
                <span className="loginDesc">a blockchain to manage your company</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Username" required ref={username} className="loginInput" />
                    <input placeholder="Email" required ref={email} className="loginInput" email/>
                    <input placeholder="Password" required ref={password} minlength="6" className="loginInput" type="password"/>
                    <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password"/>
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegisterButton">
                        Log into Account
                    </button>
                </form>
            </div>
        </div>

    </div>
  )
}
