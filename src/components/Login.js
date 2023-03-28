import React from "react"
import "../styles/Login.css"
import username from "../images/login-page/User.png"
import password from "../images/login-page/Password.png"
export default function Login(){
    return (
        <div className="login">
            <div className="login-container">
                <h2>Sign in to start your session</h2>
                <h3 className="username-text">Username</h3>
                <div className="username">
                    <img src={username} className="username-image"/>
                    <input type="text" className="username-input" />
                </div>
                <h3 className="password-text">Password</h3>
                <div className="password">
                    <img src={password} className="password-image" />
                    <input type="text" className="password-input" />
                </div>
                <button className="login-button">Sign in</button>
            </div>
        </div>
    )
}