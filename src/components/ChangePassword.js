import React, { useState } from "react"
import '../styles/ChangePassword.css'
import padlock from '../images/nurse-page/padlock.png'
import ChangePasswordApi from "../api/ChangePasswordApi"
export default function ChangePassword(){
    const [formData, setFormData] = useState({
        password: ""
    })
    const handleFormData = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    const onClick = () =>{
        ChangePasswordApi(formData.password,(JSON.parse(localStorage.getItem("user"))).firstName,(JSON.parse(localStorage.getItem("user"))).lastName);
    }
    return(
        <div className="div">
            <div className="changePassword-div">
            <img src={padlock} className="photo"/>
            <h2 className="changePassword-h2">New password</h2>
            <input type="password" className="changePassword-input" onChange={handleFormData} name="password" value={formData.password}/>
            <button onClick={onClick} className="changePassword-btn">Reset</button>
            </div>
        </div>
    )
}