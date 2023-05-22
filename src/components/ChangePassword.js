import React, { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ChangePassword.css'
import padlock from '../images/nurse-page/padlock.png'
import ChangePasswordNurseApi from "../api/ChangePasswordNurseApi"
import ChangePasswordDoctorApi from "../api/ChangePasswordDoctorApi"
import ChangePasswordPatientApi from "../api/ChangePasswordPatientApi"
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
        let response = 0;
        if((JSON.parse(localStorage.getItem("user"))).user ==="nurse")
            response = ChangePasswordNurseApi(formData.password,(JSON.parse(localStorage.getItem("user"))).phone);
        else if((JSON.parse(localStorage.getItem("user"))).user ==="doctor")
            response = ChangePasswordDoctorApi(formData.password,(JSON.parse(localStorage.getItem("user"))).phone);
        else 
            response = ChangePasswordPatientApi(formData.password,(JSON.parse(localStorage.getItem("user"))).identityNo);
        if(response.isError === true)
            toast.error("Error");
        else
            toast.success("Password changed successfully");
    }   
    return(
        <div className="div">
            <div className="changePassword-div">
            <img src={padlock} className="photo"/>
            <h2 className="changePassword-h2">New password</h2>
            <input type="password" className="changePassword-input" onChange={handleFormData} name="password" value={formData.password} autoComplete="off"/>
            <button onClick={onClick} className="changePassword-btn">Reset</button>
            </div>
            <ToastContainer />
        </div>
        
    )
}