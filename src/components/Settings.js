import React from "react";
import '../styles/Settings.css'
import { useNavigate } from "react-router-dom"
export default function Settings(){
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/changepassword')
    }
    return (
        <div>
            <button className="change-password-button" onClick={onClick}>Change Password</button>
        </div>
    );
}